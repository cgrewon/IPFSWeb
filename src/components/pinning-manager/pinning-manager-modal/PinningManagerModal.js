import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'redux-bundler-react'
import { withTranslation, Trans } from 'react-i18next'
import PinningServiceModal from '../pinning-manager-service-modal/PinningManagerServiceModal'
import './PinningManagerModal.css'

// Components
import { Modal, ModalBody, ModalActions } from '../../modal/Modal'
import Button from '../../button/Button'
import Overlay from '../../overlay/Overlay'

import RetroButton from '../../common/atoms/RetroButton'
import RetroText from '../../common/atoms/RetroText'

const PinningManagerModal = ({ t, tReady, onLeave, className, remoteServiceTemplates, pinningServicesDefaults, ...props }) => {
  const [selectedService, setSelectedService] = useState(false)

  const onCustomModalOpen = () => setSelectedService({ type: 'CUSTOM' })
  const onModalClose = () => setSelectedService(false)
  const onSuccess = () => {
    setSelectedService(false)
    onLeave()
  }

  const selectedServiceInfo = pinningServicesDefaults[selectedService.name] || {}

  return (
    <Modal {...props} className={className} onCancel={onLeave} style={{ maxWidth: '24em' }}>
      <ModalBody title={t('pinningModal.title')}>
        <div className='pa2 pinningManagerModalContainer'>
          {remoteServiceTemplates.map(({ icon, name }) => (
            <RetroButton flat className="flex items-center pinningManagerModalItem pa1" key={name} onClick={() => setSelectedService({ name, icon })}>
              <img src={icon} alt={name} width={42} height={42} style={{ objectFit: 'contain' }} />
              <RetroText style={{ margin: '0px 10px' }} fontSize={16}>{name}</RetroText>
            </RetroButton>
          ))}
        </div>
        <p className='flex items-center justify-center w95fa f6 ma0 mb2'>
          <Trans i18nKey="pinningModal.description" t={t}>
            Don’t see your pinning service provider? <Button style={{ width: 'fit-content', minWidth: '0' }} className='pv0 pl1 pr0 w95fa f6' type='link' onClick={onCustomModalOpen}>Add a custom one.</Button>
          </Trans>
        </p>
      </ModalBody>

      <ModalActions justify="center">
        <RetroButton width='200px' className='ma2 tc' bg='bg-gray' onClick={onLeave}>
          <RetroText>
            {t('actions.cancel')}
          </RetroText>
        </RetroButton>
      </ModalActions>

      <Overlay show={!!selectedService} onLeave={onModalClose} hidden>
        <PinningServiceModal className='outline-0' service={selectedService} onSuccess={onSuccess} onLeave={onModalClose} nickname={selectedServiceInfo.nickname} apiEndpoint={selectedServiceInfo.apiEndpoint} visitServiceUrl={selectedServiceInfo.visitServiceUrl} t={t} />
      </Overlay>
    </Modal>
  )
}

PinningManagerModal.propTypes = {
  t: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired
}

PinningManagerModal.defaultProps = {
  className: ''
}

export default connect(
  'selectRemoteServiceTemplates',
  'selectPinningServicesDefaults',
  withTranslation('settings')(PinningManagerModal)
)
