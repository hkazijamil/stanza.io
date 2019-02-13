import WildEmitter from 'wildemitter';

import { JID } from './protocol/jid';
import { IQ, Message, Presence, StreamError } from './protocol/stanzas';

export interface Agent extends WildEmitter {
    jid: JID;
    config: AgentConfig;
    transport?: any;

    sessionStarted: boolean;

    disconnect(): void;

    send(path: 'message', data: Message): void;
    send(path: 'presence', data: Presence): void;
    send(path: 'iq', data: IQ): void;

    send(path: string, data: object): void;

    sendIQ(iq: IQ): Promise<IQ>;
    sendIQResult(orig: IQ, result?: Partial<IQ>): void;
    sendIQError(orig: IQ, err?: Partial<IQ>): void;
    sendMessage(msg: Message): void;
    sendPresence(pres: Presence): void;
    sendStreamError(err: StreamError): void;
}

export interface AgentConfig {
    jid: JID | string;
    server?: string;
    resource?: string;
}
