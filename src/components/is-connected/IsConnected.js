import React from 'react'
import { withTranslation } from 'react-i18next'

import IsConnectedIcon from '../../icons/retro/IsConnectedIcon'

export const IsConnected = ({ t }) => {
  return (
    <div>
      <div className='flex flex-wrap items-center'>
        <IsConnectedIcon />
        <h1 className='pixm f5 fw4 ma0 ml3' style={{ color: '#378C30' }}>{t('app:status.connectedToIpfs')}</h1>
      </div>
      <p className='pixm f7 fw4 mt2 w-100 white'>{t('connected.paragraph1')}</p>
    </div>
  )
}

export default withTranslation('welcome')(IsConnected)
