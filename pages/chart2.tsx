import React from 'react'

import MainAreaChart from '@/components/main-area-chart'

const Chart2 = () => {
  return (
    <MainAreaChart
      width={300}
      height={300}
      showTooltip={() => undefined}
      hideTooltip={() => undefined}
      tooltipData={undefined}
      tooltipOpen={true}
      updateTooltip={() => undefined}
    />
  )
}

export default Chart2
