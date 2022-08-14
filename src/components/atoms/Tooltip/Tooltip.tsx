import { ReactNode } from "react";
import { useLayer, useHover, Arrow } from "react-laag";
import { AnimatePresence, motion } from "framer-motion";

import css from "./Tooltip.module.scss";

interface TooltipProps {
  children: ReactNode | string | number;
  tooltipText: string;
  className?: string;
}

export const Tooltip = ({ children, tooltipText, className }: TooltipProps) => {
  const [isOver, hoverProps] = useHover({ delayEnter: 100, delayLeave: 300 });

  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: isOver,
    auto: true,
    triggerOffset: 24,
  });

  return (
    <>
      {children == typeof String || typeof Number ? (
        <span className={className} {...triggerProps} {...hoverProps}>
          {children}
        </span>
      ) : (
        { children }
      )}
      {isOver &&
        renderLayer(
          <AnimatePresence>
            <motion.div
              className={css.tooltip}
              {...layerProps}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
            >
              {tooltipText}
              <Arrow
                {...arrowProps}
                angle={45}
                size={8}
                borderWidth={0}
                borderColor="#1B1D3D"
                backgroundColor="#1B1D3D"
              />
            </motion.div>
          </AnimatePresence>
        )}
    </>
  );
};

export default Tooltip;
