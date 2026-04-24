"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HorizontalSectionsProps = {
  children: React.ReactNode;
  autoAdvanceMs?: number;
};

const WHEEL_LOCK_MS = 700;

export default function HorizontalSections({
  children,
  autoAdvanceMs,
}: HorizontalSectionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef(false);
  const indexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const panels = useMemo(() => React.Children.toArray(children), [children]);

  const goToIndex = useCallback(
    (nextIndex: number, behavior: ScrollBehavior = "smooth") => {
      const container = containerRef.current;
      if (!container || panels.length <= 0) {
        return;
      }

      const clamped = Math.max(0, Math.min(nextIndex, panels.length - 1));
      indexRef.current = clamped;
      setActiveIndex(clamped);
      container.scrollTo({
        left: clamped * container.clientWidth,
        behavior,
      });
    },
    [panels.length],
  );

  useEffect(() => {
    const container = containerRef.current;

    if (!container || panels.length <= 1) {
      return;
    }

    const onScroll = () => {
      const nextIndex = Math.round(
        container.scrollLeft / container.clientWidth,
      );
      if (Number.isFinite(nextIndex)) {
        const clamped = Math.max(0, Math.min(nextIndex, panels.length - 1));
        indexRef.current = clamped;
        setActiveIndex(clamped);
      }
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
        return;
      }

      const activePanel = container.querySelector<HTMLElement>(
        `[data-panel-index='${indexRef.current}']`,
      );
      if (activePanel) {
        const canScrollDown =
          activePanel.scrollTop + activePanel.clientHeight <
          activePanel.scrollHeight - 1;
        const canScrollUp = activePanel.scrollTop > 1;

        if (
          (event.deltaY > 0 && canScrollDown) ||
          (event.deltaY < 0 && canScrollUp)
        ) {
          return;
        }
      }

      event.preventDefault();

      if (lockRef.current) {
        return;
      }

      lockRef.current = true;

      const direction = event.deltaY > 0 ? 1 : -1;
      goToIndex(indexRef.current + direction);

      window.setTimeout(() => {
        lockRef.current = false;
      }, WHEEL_LOCK_MS);
    };

    const onResize = () => {
      goToIndex(indexRef.current, "auto");
    };

    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) {
        return;
      }

      const target = container.querySelector<HTMLElement>(`#${hash}`);
      const panel = target?.closest<HTMLElement>(
        "[data-horizontal-panel='true']",
      );
      if (!panel) {
        return;
      }

      const panelIndex = Number(panel.dataset.panelIndex);
      if (Number.isFinite(panelIndex)) {
        goToIndex(panelIndex);
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    window.addEventListener("hashchange", onHashChange);

    let autoplay: number | undefined;
    if (typeof autoAdvanceMs === "number" && autoAdvanceMs > 0) {
      autoplay = window.setInterval(() => {
        const next = (indexRef.current + 1) % panels.length;
        goToIndex(next);
      }, autoAdvanceMs);
    }

    onHashChange();

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("hashchange", onHashChange);
      if (autoplay) {
        window.clearInterval(autoplay);
      }
    };
  }, [autoAdvanceMs, goToIndex, panels]);

  const goPrev = () => {
    goToIndex(indexRef.current - 1);
  };

  const goNext = () => {
    goToIndex(indexRef.current + 1);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={goPrev}
        disabled={activeIndex === 0}
        aria-label="Previous section"
        className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-white backdrop-blur transition hover:bg-black/65 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft />
      </button>

      <button
        type="button"
        onClick={goNext}
        disabled={activeIndex === panels.length - 1}
        aria-label="Next section"
        className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-white backdrop-blur transition hover:bg-black/65 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight />
      </button>

      <div
        ref={containerRef}
        className="horizontal-sections"
        aria-label="Portfolio sections"
      >
        {panels.map((panel, index) => (
          <div
            key={index}
            className="horizontal-panel"
            data-horizontal-panel="true"
            data-panel-index={index}
          >
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}
