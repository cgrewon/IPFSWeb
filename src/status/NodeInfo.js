import React from 'react'
import { withTranslation } from 'react-i18next'
import { connect } from 'redux-bundler-react'
import VersionLink from '../components/version-link/VersionLink'
import { Definition, DefinitionList } from '../components/definition/Definition.js'

class NodeInfo extends React.Component {
  getField (obj, field, fn) {
    if (obj && obj[field]) {
      if (fn) {
        return fn(obj[field])
      }

      return obj[field]
    }

    return ''
  }

  getVersion (identity) {
    const raw = this.getField(identity, 'agentVersion')
    return raw ? raw.split('/').join(' ') : ''
  }

  render () {
    const { t, identity } = this.props

    return (
      <DefinitionList>
        <Definition term={t('terms.peerId')} desc={this.getField(identity, 'id')} />
        <Definition term={t('terms.agent')} desc={<VersionLink agentVersion={this.getField(identity, 'agentVersion')} />} />
        <Definition term={t('terms.ui')} desc={<a href={'https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v' + process.env.REACT_APP_VERSION} className='link purple pixm f7' target='_blank' rel='noopener noreferrer'>v{process.env.REACT_APP_VERSION}</a>} />
      </DefinitionList>
    )
  }
}

export default connect(
  'selectIdentity',
  withTranslation('app')(NodeInfo)
)
