"use client"

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  TooltipItem
} from "chart.js"
import { useEffect, useMemo, useState } from "react"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
)

const labels = [
  "7 jours",
  "6 jours",
  "5 jours",
  "4 jours",
  "3 jours",
  "Hier",
  "Ce jour"
]

const votes = [1800, 2160, 2030, 2150, 1880, 1730, 730]

interface ChartPalette {
  line: string
  grid: string
  tick: string
  fillStart: string
  fillEnd: string
  fontFamily: string
}

const defaultPalette: ChartPalette = {
  line: "#c88b63",
  grid: "rgba(255, 255, 255, 0.08)",
  tick: "rgba(255, 255, 255, 0.58)",
  fillStart: "rgba(200, 139, 99, 0.28)",
  fillEnd: "rgba(200, 139, 99, 0)",
  fontFamily: "Inter, sans-serif"
}

function getCssVar(
  styles: CSSStyleDeclaration,
  name: string,
  fallback: string
) {
  const value = styles.getPropertyValue(name).trim()
  return value || fallback
}

export function VotesHistoryChart() {
  const [palette, setPalette] = useState<ChartPalette>(defaultPalette)

  useEffect(() => {
    function syncPaletteFromCss() {
      const rootStyles = getComputedStyle(document.documentElement)

      setPalette({
        line: getCssVar(rootStyles, "--chart-votes-line", defaultPalette.line),
        grid: getCssVar(rootStyles, "--chart-votes-grid", defaultPalette.grid),
        tick: getCssVar(rootStyles, "--chart-votes-tick", defaultPalette.tick),
        fillStart: getCssVar(
          rootStyles,
          "--chart-votes-fill-start",
          defaultPalette.fillStart
        ),
        fillEnd: getCssVar(
          rootStyles,
          "--chart-votes-fill-end",
          defaultPalette.fillEnd
        ),
        fontFamily: getCssVar(
          rootStyles,
          "--font-main",
          defaultPalette.fontFamily
        )
      })
    }

    syncPaletteFromCss()

    const observer = new MutationObserver(syncPaletteFromCss)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "style", "class"]
    })

    return () => observer.disconnect()
  }, [])

  const chartData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data: votes,
          borderColor: palette.line,
          borderWidth: 2,
          fill: true,
          pointRadius: 3,
          pointHoverRadius: 4,
          pointBorderWidth: 0,
          pointBackgroundColor: palette.line,
          tension: 0.35,
          backgroundColor: (context: { chart: ChartJS }) => {
            const chart = context.chart
            const { ctx, chartArea } = chart

            if (!chartArea) return palette.fillStart

            const gradient = ctx.createLinearGradient(
              0,
              chartArea.top,
              0,
              chartArea.bottom
            )
            gradient.addColorStop(0, palette.fillStart)
            gradient.addColorStop(1, palette.fillEnd)
            return gradient
          }
        }
      ]
    }),
    [palette]
  )

  const chartOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index" as const,
        intersect: false
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          displayColors: false,
          bodyFont: {
            family: palette.fontFamily
          },
          titleFont: {
            family: palette.fontFamily
          },
          callbacks: {
            label: (tooltipItem: TooltipItem<"line">) =>
              `${tooltipItem.parsed.y ?? 0} votes`
          }
        }
      },
      scales: {
        x: {
          border: {
            display: false
          },
          grid: {
            color: palette.grid,
            drawBorder: false
          },
          ticks: {
            font: {
              family: palette.fontFamily
            },
            color: palette.tick
          }
        },
        y: {
          min: 600,
          max: 2200,
          border: {
            display: false
          },
          grid: {
            color: palette.grid,
            drawBorder: false
          },
          ticks: {
            stepSize: 200,
            font: {
              family: palette.fontFamily
            },
            color: palette.tick
          }
        }
      }
    }),
    [palette]
  )

  return (
    <div style={{ height: 320 }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  )
}
