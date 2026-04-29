import clsx from "clsx";

interface PresentationProps {
  className?: string;
  left:  React.ReactNode
  top:  React.ReactNode
  bottom:  React.ReactNode
}

export const Presentation = ({ className, left, top, bottom }: PresentationProps) => {
  return (
    <section className={clsx("presentation", className)}>
      <div className="presentation-left presentation-bloc">
        {left}
      </div>
      <div className="presentation-right">
        <div className="presentation-top presentation-bloc">
          {top}
        </div>
        <div className="presentation-bottom presentation-bloc">
          {bottom}
        </div>
      </div>
    </section>
  )
}