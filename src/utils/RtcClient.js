export default class RtcClient {
    constructor(setRtcClient) {
        const config = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };
        this.rtcPeerConnection = new RTCPeerConnection(config);
        this.localPeerName = "";
        this.remotePeerName = "";
        this._setRtcClient = setRtcClient;
    }

    setRtcClient() {
        this._setRtcClient(this);
    }
}