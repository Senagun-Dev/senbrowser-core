// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.

export const supportedENSExtensions = ['.eth']
export const supportedSNSExtensions = ['.sol']
// Should match `kUDPattern` array from json_rpc_service.cc.
export const supportedUDExtensions = [
  '.altimist',
  '.anime',
  '.ask',
  '.austin',
  '.bald',
  '.basenji',
  '.bay',
  '.benji',
  '.binanceus',
  '.bitcoin',
  '.bitget',
  '.bitscrunch',
  '.blockchain',
  '.boomer',
  '.brave',
  '.calicoin',
  '.caw',
  '.chomp',
  '.clay',
  '.crypto',
  '.dao',
  '.dfz',
  '.doga',
  '.donut',
  '.dream',
  '.emir',
  '.ethermail',
  '.farms',
  '.grow',
  '.her',
  '.kingdom',
  '.klever',
  '.kresus',
  '.kryptic',
  '.lfg',
  '.ltc',
  '.manga',
  '.metropolis',
  '.miku',
  '.ministry',
  '.moon',
  '.mumu',
  '.nft',
  '.nibi',
  '.npc',
  '.onchain',
  '.pastor',
  '.podcast',
  '.pog',
  '.polygon',
  '.privacy',
  '.propykeys',
  '.pudgy',
  '.quantum',
  '.rad',
  '.raiin',
  '.secret',
  '.smobler',
  '.south',
  '.stepn',
  '.tball',
  '.tea',
  '.tribe',
  '.u',
  '.ubu',
  '.unstoppable',
  '.wallet',
  '.wifi',
  '.witg',
  '.wrkx',
  '.x',
  '.xec',
  '.xmr',
  '.zil',
]
export const allSupportedExtensions = [
  ...supportedENSExtensions,
  ...supportedSNSExtensions,
  ...supportedUDExtensions
]
