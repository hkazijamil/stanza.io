declare module 'wildemitter' {
    import { EventEmitter } from 'events';

    class WildEmitter extends EventEmitter {
        constructor();
        public isWildEmitter: boolean;
        public on(name: string, handler: (...data: any[]) => void): this;
        public on(name: string, group: string, handler: (...data: any[]) => void): this;
        public once(name: string, handler: (...data: any[]) => void): this;
        public once(name: string, group: string, handler: (...data: any[]) => void): this;
        public releaseGroup(group: string): this;
    }

    export = WildEmitter;
}
