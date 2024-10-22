/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import { createRootLogger } from '@ironfish/sdk'
import { MultisigServer, MultisigTcpAdapter } from './src'

async function startServer(): Promise<void> {
  const logger = createRootLogger()
  const server = new MultisigServer({ logger })
  const adapter = new MultisigTcpAdapter({ logger, host: '::', port: 9035 })
  server.mount(adapter)

  await server.start()
}

void startServer()
