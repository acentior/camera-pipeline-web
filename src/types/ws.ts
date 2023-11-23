export interface WsMsg {
  WSType: string,
  SDP?: string,
  ICE?: RTCIceCandidateInit,
  Answer?: string,
  Data?: string
}

export const WSType = {
  CONNECTED: "Connected",
  SDP: "SDP",
  ICE: "ICE",
  ERROR: "Error"
}