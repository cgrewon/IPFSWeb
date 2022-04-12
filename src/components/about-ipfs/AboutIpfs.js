import React from 'react'
import { withTranslation, Trans } from 'react-i18next'
import './AboutIpfs.css'

export const AboutIpfs = ({ t }) => {
  return (
    <div>
      <h2 className='mt0 mb3 w95fa fw2 f4 white'>{t('aboutIpfs.header')}</h2>
      <ul className='pl3 f6'>
        <Trans i18nKey='aboutIpfs.paragraph1' t={t}>
          <li className='mb2 w95fa white'><span>A hypermedia distribution protocol</span> that incorporates ideas from Kademlia, BitTorrent, Git, and more</li>
        </Trans>
        <Trans i18nKey='aboutIpfs.paragraph2' t={t}>
          <li className='mb2 w95fa white'><span>A peer-to-peer file transfer network</span> with a completely decentralized architecture and no central point of failure, censorship, or control</li>
        </Trans>
        <Trans i18nKey='aboutIpfs.paragraph3' t={t}>
          <li className='mb2 w95fa white'><span>An on-ramp to tomorrow's web</span> &mdash; traditional browsers can access IPFS files through gateways like <code className='w95fa underline' style={{ color: '#92B0FF' }}>https://ipfs.io</code> or directly using the <a className='link blue' target='_blank' rel='noopener noreferrer' href='https://github.com/ipfs-shipyard/ipfs-companion#ipfs-companion'>IFPS Companion</a> extension</li>
        </Trans>
        <Trans i18nKey='aboutIpfs.paragraph4' t={t}>
          <li className='mb2 w95fa white'><span>A next-gen CDN</span> &mdash; just add a file to your node to make it available to the world with cache-friendly content-hash addressing and BitTorrent-style bandwidth distribution</li>
        </Trans>
        <Trans i18nKey='aboutIpfs.paragraph5' t={t}>
          <li className='mb2 w95fa white'><span>A developer toolset</span> for building completely <a className='link blue' target='_blank' rel='noopener noreferrer' href='https://awesome.ipfs.io/'>distributed apps and services</a>, backed by a robust open-source community</li>
        </Trans>
      </ul>
    </div>
  )
}

export default withTranslation('welcome')(AboutIpfs)
