import React from 'react'

const providers = {
  'go-ipfs': {
    url: 'https://github.com/ipfs/go-ipfs'
  },
  'js-ipfs': {
    url: 'https://github.com/ipfs/js-ipfs'
  }
}

const findUrl = name => {
  const provider = providers[name]
  if (!provider) return null
  return provider.url
}

// formats an ipfs agentVersion string from /go-ipfs/0.10.0/desktop to go-ipfs v0.10.0 desktop
const VersionLink = ({ agentVersion }) => {
  if (!agentVersion) return <span>Unknown</span>
  const parts = agentVersion.split('/').filter(str => !!str)
  const name = parts[0]
  const url = findUrl(name)
  const version = parts[1]
  const suffix = parts.slice(2).join('/')
  if (!url) {
    return (
      <span className='purple'>
        {name}
        <ReleaseLink agent={name} version={version} />
        {suffix ? <span> {suffix}</span> : ''}
      </span>
    )
  }
  return (
    <span>
      <a href={url} className='link purple pixm f7' target='_blank' rel='noopener noreferrer'>
        {name}
      </a>
      <ReleaseLink agent={name} version={version} />
      {suffix ? <span> {suffix}</span> : ''}
    </span>
  )
}

const ReleaseLink = ({ agent, version }) => {
  if (!version) return ''
  if (Object.prototype.hasOwnProperty.call(providers, agent)) {
    const releaseUrl = `${providers[agent].url}/releases/tag/v${version}`
    return (
      <a href={releaseUrl} className='pixm f7 link white ml1' target='_blank' rel='noopener noreferrer'>
        v{version}
      </a>
    )
  }
  return ` v${version}`
}

export default VersionLink
