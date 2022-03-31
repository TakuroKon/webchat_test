export default class RtcClient {
    constructor() {
        const config = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };
        this.rtcPeerConnection = new RTCPeerConnection(config);
        this.localPeerName = "";
        this.remotePeerName = "";
    }
}