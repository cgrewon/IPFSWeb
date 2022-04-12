import React, { Component, Fragment } from 'react'
import { getCurrentLanguage } from '../../lib/i18n'

// Components
import Overlay from '../overlay/Overlay'
import LanguageModal from './language-modal/LanguageModal'

import RetroButton from '../common/atoms/RetroButton'
import RetroText from '../common/atoms/RetroText'
import SectionIcon from '../../icons/retro/SectionIcon'

class LanguageSelector extends Component {
  state = { isLanguageModalOpen: false }

  onLanguageEditOpen = () => this.setState({ isLanguageModalOpen: true })

  onLanguageEditClose = () => this.setState({ isLanguageModalOpen: false })

  render () {
    const { t } = this.props

    return (
      <Fragment>
        <div className='flex'>
          <RetroButton className="tc" bg='bg-teal' width='100px' onClick={this.onLanguageEditOpen}>
            <RetroText>
              <SectionIcon style={{ position: 'relative', left: '-20px', top: '-1px' }} />
              {getCurrentLanguage()}
            </RetroText>
          </RetroButton>
        </div>

        <Overlay show={this.state.isLanguageModalOpen} onLeave={this.onLanguageEditClose} >
          <LanguageModal className='outline-0' onLeave={this.onLanguageEditClose} t={t} />
        </Overlay>
      </Fragment>
    )
  }
}

export default LanguageSelector
