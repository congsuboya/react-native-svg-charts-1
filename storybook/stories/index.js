import React from 'react'

import { storiesOf } from '@storybook/react-native'

import AreaChart from './area-chart/with-knobs'
import ShowcaseCard from './decorators/showcase-container'
import LineChart from './line-chart/with-knobs'

import BarChart from './bar-chart/with-knobs'
import MultipleBarChart from './bar-chart/multiple-with-knobs'

import PieChart from './pie-chart'
import PieChartWithLabels from './pie-chart/with-labels'

import ProgressCircle from './progress-circle/with-knobs'
import ProgressGauge from './progress-gauge/with-knobs'

import StackedCharts from './stacked-charts'
import Decorators from './decorator'
import Extras from './extras'

import XAxisExample from './x-axis'
import YAxisExample from './y-axis'
import WaterfallChartExample from './waterfall-chart/with-knobs'
import { withKnobs } from '@storybook/addon-knobs'

storiesOf('AreaChart', module)
    .addDecorator(withKnobs)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('Standard', () => (<AreaChart/>))

storiesOf('LineChart', module)
    .addDecorator(withKnobs)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('Standard', () => <LineChart/>)

storiesOf('BarChart', module)
    .addDecorator(withKnobs)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('Standard', () => <BarChart/>)
    .add('Multiple data set', () => <MultipleBarChart/>)

storiesOf('PieChart', module)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('Standard', () => <PieChart/>)
    .add('With labels', () => <PieChartWithLabels/>)
    .add('With labels', () => <PieChartWithLabels/>)

storiesOf('WaterfallChart', module)
    .addDecorator(withKnobs)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('Standard', () => <WaterfallChartExample/>)

storiesOf('ProgressCircle', module)
    .addDecorator(withKnobs)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('Standard', () => <ProgressCircle/>)
    .add('Gauge', () => <ProgressGauge/>)

storiesOf('Axises', module)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('YAxis', () => <YAxisExample/>)
    .add('XAxis', () => <XAxisExample/>)

storiesOf('Others', module)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('Stacked charts', () => <StackedCharts/>)
    .add('Decorators', () => <Decorators/>)
    .add('Extras', () => <Extras/>)
