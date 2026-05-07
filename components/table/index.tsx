import clsx from "clsx"
import type { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from "react"

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: ReactNode
}

export function Table({ children, className, ...props }: TableProps) {
  return (
    <div className="table-wrapper">
      <table className={clsx("table", className)} {...props}>
        {children}
      </table>
    </div>
  )
}

interface TableCaptionProps extends HTMLAttributes<HTMLTableCaptionElement> {
  children: ReactNode
}

export function TableCaption({ children, className, ...props }: TableCaptionProps) {
  return (
    <caption className={clsx("table-caption", className)} {...props}>
      {children}
    </caption>
  )
}

interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
}

export function TableHead({ children, className, ...props }: TableHeadProps) {
  return (
    <thead className={clsx("table-head", className)} {...props}>
      {children}
    </thead>
  )
}

interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
}

export function TableBody({ children, className, ...props }: TableBodyProps) {
  return (
    <tbody className={clsx("table-body", className)} {...props}>
      {children}
    </tbody>
  )
}

interface TableFootProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
}

export function TableFoot({ children, className, ...props }: TableFootProps) {
  return (
    <tfoot className={clsx("table-foot", className)} {...props}>
      {children}
    </tfoot>
  )
}

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode
}

export function TableRow({ children, className, ...props }: TableRowProps) {
  return (
    <tr className={clsx("table-row", className)} {...props}>
      {children}
    </tr>
  )
}

type TableCellProps = (
  | (ThHTMLAttributes<HTMLTableCellElement> & { as: "th" })
  | (TdHTMLAttributes<HTMLTableCellElement> & { as?: "td" })
) & {
  children?: ReactNode
}

export function TableCell({
  children,
  className,
  as = "td",
  ...props
}: TableCellProps) {
  const Component = as

  return (
    <Component className={clsx("table-cell", className)} {...props}>
      {children}
    </Component>
  )
}
