import React from 'react'
import { connect } from 'redux-bundler-react'
import { Helmet } from 'react-helmet'
import { withTranslation } from 'react-i18next'
import ReactJoyride from 'react-joyride'
import withTour from '../components/tour/withTour'
import { peersTour } from '../lib/tours'
import { getJoyrideLocales } from '../helpers/i8n'

// Components
import Box from '../components/box/Box'
import WorldMap from './WorldMap/WorldMap'
import PeersTable from './PeersTable/PeersTable'
import AddConnection from './AddConnection/AddConnection'
import CliTutorMode from '../components/cli-tutor-mode/CliTutorMode'
import { cliCmdKeys, cliCommandList } from '../bundles/files/consts'

const PeersPage = ({ t, toursEnabled, handleJoyrideCallback, isCliTutorModeEnabled }) => (
  <div data-id='PeersPage' className='overflow-hidden'>
    <Helmet>
      <title>{t('title')} | IPFS</title>
    </Helmet>

    <div className='flex justify-end items-center mb3'>
      <CliTutorMode buttonClassName='black hover-white hover-bg-blue ph2' showIcon={true} command={cliCommandList[cliCmdKeys.ADD_NEW_PEER]()} t={t} />
    </div>

    <Box className='pt3 ph3'>
      <WorldMap className='joyride-peers-map' />
      <div className='mt2 flex justify-between pr0 pl3' >
        <p className='white spacegrotesk fs24' style={{ fontWeight: 700 }}>Files</p>
        <AddConnection />
      </div>
    </Box>

    <Box className=' ph3 pb4 mv3'>
      <PeersTable className='joyride-peers-table' />
    </Box>

    <ReactJoyride
      run={toursEnabled}
      steps={peersTour.getSteps({ t })}
      styles={peersTour.styles}
      callback={handleJoyrideCallback}
      continuous
      scrollToFirstStep
      locale={getJoyrideLocales(t)}
      showProgress />
  </div>
)

export default connect(
  'selectToursEnabled',
  'selectIsCliTutorModeEnabled',
  withTour(withTranslation('peers')(PeersPage))
)
