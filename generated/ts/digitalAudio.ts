/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "rv.data";

export interface DigitalAudio {
}

export interface DigitalAudio_Setup {
  buses: DigitalAudio_Bus[];
  monitorDevice: DigitalAudio_Device | undefined;
  mainOutputDevice: DigitalAudio_Device | undefined;
  enableSdiNdiDevice: boolean;
  sdiNdiDevice: DigitalAudio_Device | undefined;
  monitorOnMains: boolean;
  disableMainOutputDevice: boolean;
}

export interface DigitalAudio_Bus {
  name: string;
  muted: boolean;
  solo: boolean;
  testTone: boolean;
  masterLevel: number;
}

export interface DigitalAudio_Device {
  name: string;
  renderID: string;
  formats: DigitalAudio_Device_Format[];
  routing: DigitalAudio_Device_Routing | undefined;
}

export interface DigitalAudio_Device_Format {
  sampleRate: number;
  bitDepth: number;
  type: DigitalAudio_Device_Format_Type;
}

export enum DigitalAudio_Device_Format_Type {
  TYPE_INT = 0,
  TYPE_FLOAT = 1,
  UNRECOGNIZED = -1,
}

export function digitalAudio_Device_Format_TypeFromJSON(object: any): DigitalAudio_Device_Format_Type {
  switch (object) {
    case 0:
    case "TYPE_INT":
      return DigitalAudio_Device_Format_Type.TYPE_INT;
    case 1:
    case "TYPE_FLOAT":
      return DigitalAudio_Device_Format_Type.TYPE_FLOAT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DigitalAudio_Device_Format_Type.UNRECOGNIZED;
  }
}

export function digitalAudio_Device_Format_TypeToJSON(object: DigitalAudio_Device_Format_Type): string {
  switch (object) {
    case DigitalAudio_Device_Format_Type.TYPE_INT:
      return "TYPE_INT";
    case DigitalAudio_Device_Format_Type.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case DigitalAudio_Device_Format_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DigitalAudio_Device_Map {
  channelIndex: number;
  mappedIndices: number[];
}

export interface DigitalAudio_Device_Channel {
  muteEnable: boolean;
  soloEnable: boolean;
  toneEnable: boolean;
  audioDelay: number;
  level: number;
}

export interface DigitalAudio_Device_Routing {
  channels: DigitalAudio_Device_Channel[];
  map: DigitalAudio_Device_Map[];
  isCustomMap: boolean;
  masterChannel: DigitalAudio_Device_Channel | undefined;
}

function createBaseDigitalAudio(): DigitalAudio {
  return {};
}

export const DigitalAudio = {
  encode(_: DigitalAudio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigitalAudio {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DigitalAudio {
    return {};
  },

  toJSON(_: DigitalAudio): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DigitalAudio>, I>>(_: I): DigitalAudio {
    const message = createBaseDigitalAudio();
    return message;
  },
};

function createBaseDigitalAudio_Setup(): DigitalAudio_Setup {
  return {
    buses: [],
    monitorDevice: undefined,
    mainOutputDevice: undefined,
    enableSdiNdiDevice: false,
    sdiNdiDevice: undefined,
    monitorOnMains: false,
    disableMainOutputDevice: false,
  };
}

export const DigitalAudio_Setup = {
  encode(message: DigitalAudio_Setup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.buses) {
      DigitalAudio_Bus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.monitorDevice !== undefined) {
      DigitalAudio_Device.encode(message.monitorDevice, writer.uint32(18).fork()).ldelim();
    }
    if (message.mainOutputDevice !== undefined) {
      DigitalAudio_Device.encode(message.mainOutputDevice, writer.uint32(26).fork()).ldelim();
    }
    if (message.enableSdiNdiDevice === true) {
      writer.uint32(32).bool(message.enableSdiNdiDevice);
    }
    if (message.sdiNdiDevice !== undefined) {
      DigitalAudio_Device.encode(message.sdiNdiDevice, writer.uint32(42).fork()).ldelim();
    }
    if (message.monitorOnMains === true) {
      writer.uint32(48).bool(message.monitorOnMains);
    }
    if (message.disableMainOutputDevice === true) {
      writer.uint32(56).bool(message.disableMainOutputDevice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigitalAudio_Setup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio_Setup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buses.push(DigitalAudio_Bus.decode(reader, reader.uint32()));
          break;
        case 2:
          message.monitorDevice = DigitalAudio_Device.decode(reader, reader.uint32());
          break;
        case 3:
          message.mainOutputDevice = DigitalAudio_Device.decode(reader, reader.uint32());
          break;
        case 4:
          message.enableSdiNdiDevice = reader.bool();
          break;
        case 5:
          message.sdiNdiDevice = DigitalAudio_Device.decode(reader, reader.uint32());
          break;
        case 6:
          message.monitorOnMains = reader.bool();
          break;
        case 7:
          message.disableMainOutputDevice = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DigitalAudio_Setup {
    return {
      buses: Array.isArray(object?.buses) ? object.buses.map((e: any) => DigitalAudio_Bus.fromJSON(e)) : [],
      monitorDevice: isSet(object.monitorDevice) ? DigitalAudio_Device.fromJSON(object.monitorDevice) : undefined,
      mainOutputDevice: isSet(object.mainOutputDevice)
        ? DigitalAudio_Device.fromJSON(object.mainOutputDevice)
        : undefined,
      enableSdiNdiDevice: isSet(object.enableSdiNdiDevice) ? Boolean(object.enableSdiNdiDevice) : false,
      sdiNdiDevice: isSet(object.sdiNdiDevice) ? DigitalAudio_Device.fromJSON(object.sdiNdiDevice) : undefined,
      monitorOnMains: isSet(object.monitorOnMains) ? Boolean(object.monitorOnMains) : false,
      disableMainOutputDevice: isSet(object.disableMainOutputDevice) ? Boolean(object.disableMainOutputDevice) : false,
    };
  },

  toJSON(message: DigitalAudio_Setup): unknown {
    const obj: any = {};
    if (message.buses) {
      obj.buses = message.buses.map((e) => e ? DigitalAudio_Bus.toJSON(e) : undefined);
    } else {
      obj.buses = [];
    }
    message.monitorDevice !== undefined &&
      (obj.monitorDevice = message.monitorDevice ? DigitalAudio_Device.toJSON(message.monitorDevice) : undefined);
    message.mainOutputDevice !== undefined && (obj.mainOutputDevice = message.mainOutputDevice
      ? DigitalAudio_Device.toJSON(message.mainOutputDevice)
      : undefined);
    message.enableSdiNdiDevice !== undefined && (obj.enableSdiNdiDevice = message.enableSdiNdiDevice);
    message.sdiNdiDevice !== undefined &&
      (obj.sdiNdiDevice = message.sdiNdiDevice ? DigitalAudio_Device.toJSON(message.sdiNdiDevice) : undefined);
    message.monitorOnMains !== undefined && (obj.monitorOnMains = message.monitorOnMains);
    message.disableMainOutputDevice !== undefined && (obj.disableMainOutputDevice = message.disableMainOutputDevice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DigitalAudio_Setup>, I>>(object: I): DigitalAudio_Setup {
    const message = createBaseDigitalAudio_Setup();
    message.buses = object.buses?.map((e) => DigitalAudio_Bus.fromPartial(e)) || [];
    message.monitorDevice = (object.monitorDevice !== undefined && object.monitorDevice !== null)
      ? DigitalAudio_Device.fromPartial(object.monitorDevice)
      : undefined;
    message.mainOutputDevice = (object.mainOutputDevice !== undefined && object.mainOutputDevice !== null)
      ? DigitalAudio_Device.fromPartial(object.mainOutputDevice)
      : undefined;
    message.enableSdiNdiDevice = object.enableSdiNdiDevice ?? false;
    message.sdiNdiDevice = (object.sdiNdiDevice !== undefined && object.sdiNdiDevice !== null)
      ? DigitalAudio_Device.fromPartial(object.sdiNdiDevice)
      : undefined;
    message.monitorOnMains = object.monitorOnMains ?? false;
    message.disableMainOutputDevice = object.disableMainOutputDevice ?? false;
    return message;
  },
};

function createBaseDigitalAudio_Bus(): DigitalAudio_Bus {
  return { name: "", muted: false, solo: false, testTone: false, masterLevel: 0 };
}

export const DigitalAudio_Bus = {
  encode(message: DigitalAudio_Bus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.muted === true) {
      writer.uint32(16).bool(message.muted);
    }
    if (message.solo === true) {
      writer.uint32(24).bool(message.solo);
    }
    if (message.testTone === true) {
      writer.uint32(32).bool(message.testTone);
    }
    if (message.masterLevel !== 0) {
      writer.uint32(41).double(message.masterLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigitalAudio_Bus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio_Bus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.muted = reader.bool();
          break;
        case 3:
          message.solo = reader.bool();
          break;
        case 4:
          message.testTone = reader.bool();
          break;
        case 5:
          message.masterLevel = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DigitalAudio_Bus {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      muted: isSet(object.muted) ? Boolean(object.muted) : false,
      solo: isSet(object.solo) ? Boolean(object.solo) : false,
      testTone: isSet(object.testTone) ? Boolean(object.testTone) : false,
      masterLevel: isSet(object.masterLevel) ? Number(object.masterLevel) : 0,
    };
  },

  toJSON(message: DigitalAudio_Bus): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.muted !== undefined && (obj.muted = message.muted);
    message.solo !== undefined && (obj.solo = message.solo);
    message.testTone !== undefined && (obj.testTone = message.testTone);
    message.masterLevel !== undefined && (obj.masterLevel = message.masterLevel);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DigitalAudio_Bus>, I>>(object: I): DigitalAudio_Bus {
    const message = createBaseDigitalAudio_Bus();
    message.name = object.name ?? "";
    message.muted = object.muted ?? false;
    message.solo = object.solo ?? false;
    message.testTone = object.testTone ?? false;
    message.masterLevel = object.masterLevel ?? 0;
    return message;
  },
};

function createBaseDigitalAudio_Device(): DigitalAudio_Device {
  return { name: "", renderID: "", formats: [], routing: undefined };
}

export const DigitalAudio_Device = {
  encode(message: DigitalAudio_Device, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.renderID !== "") {
      writer.uint32(18).string(message.renderID);
    }
    for (const v of message.formats) {
      DigitalAudio_Device_Format.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.routing !== undefined) {
      DigitalAudio_Device_Routing.encode(message.routing, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigitalAudio_Device {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio_Device();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.renderID = reader.string();
          break;
        case 3:
          message.formats.push(DigitalAudio_Device_Format.decode(reader, reader.uint32()));
          break;
        case 4:
          message.routing = DigitalAudio_Device_Routing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DigitalAudio_Device {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      renderID: isSet(object.renderID) ? String(object.renderID) : "",
      formats: Array.isArray(object?.formats)
        ? object.formats.map((e: any) => DigitalAudio_Device_Format.fromJSON(e))
        : [],
      routing: isSet(object.routing) ? DigitalAudio_Device_Routing.fromJSON(object.routing) : undefined,
    };
  },

  toJSON(message: DigitalAudio_Device): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.renderID !== undefined && (obj.renderID = message.renderID);
    if (message.formats) {
      obj.formats = message.formats.map((e) => e ? DigitalAudio_Device_Format.toJSON(e) : undefined);
    } else {
      obj.formats = [];
    }
    message.routing !== undefined &&
      (obj.routing = message.routing ? DigitalAudio_Device_Routing.toJSON(message.routing) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DigitalAudio_Device>, I>>(object: I): DigitalAudio_Device {
    const message = createBaseDigitalAudio_Device();
    message.name = object.name ?? "";
    message.renderID = object.renderID ?? "";
    message.formats = object.formats?.map((e) => DigitalAudio_Device_Format.fromPartial(e)) || [];
    message.routing = (object.routing !== undefined && object.routing !== null)
      ? DigitalAudio_Device_Routing.fromPartial(object.routing)
      : undefined;
    return message;
  },
};

function createBaseDigitalAudio_Device_Format(): DigitalAudio_Device_Format {
  return { sampleRate: 0, bitDepth: 0, type: 0 };
}

export const DigitalAudio_Device_Format = {
  encode(message: DigitalAudio_Device_Format, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sampleRate !== 0) {
      writer.uint32(8).uint32(message.sampleRate);
    }
    if (message.bitDepth !== 0) {
      writer.uint32(16).uint32(message.bitDepth);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigitalAudio_Device_Format {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio_Device_Format();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sampleRate = reader.uint32();
          break;
        case 2:
          message.bitDepth = reader.uint32();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DigitalAudio_Device_Format {
    return {
      sampleRate: isSet(object.sampleRate) ? Number(object.sampleRate) : 0,
      bitDepth: isSet(object.bitDepth) ? Number(object.bitDepth) : 0,
      type: isSet(object.type) ? digitalAudio_Device_Format_TypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: DigitalAudio_Device_Format): unknown {
    const obj: any = {};
    message.sampleRate !== undefined && (obj.sampleRate = Math.round(message.sampleRate));
    message.bitDepth !== undefined && (obj.bitDepth = Math.round(message.bitDepth));
    message.type !== undefined && (obj.type = digitalAudio_Device_Format_TypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DigitalAudio_Device_Format>, I>>(object: I): DigitalAudio_Device_Format {
    const message = createBaseDigitalAudio_Device_Format();
    message.sampleRate = object.sampleRate ?? 0;
    message.bitDepth = object.bitDepth ?? 0;
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseDigitalAudio_Device_Map(): DigitalAudio_Device_Map {
  return { channelIndex: 0, mappedIndices: [] };
}

export const DigitalAudio_Device_Map = {
  encode(message: DigitalAudio_Device_Map, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelIndex !== 0) {
      writer.uint32(8).uint32(message.channelIndex);
    }
    writer.uint32(18).fork();
    for (const v of message.mappedIndices) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigitalAudio_Device_Map {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio_Device_Map();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelIndex = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.mappedIndices.push(reader.uint32());
            }
          } else {
            message.mappedIndices.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DigitalAudio_Device_Map {
    return {
      channelIndex: isSet(object.channelIndex) ? Number(object.channelIndex) : 0,
      mappedIndices: Array.isArray(object?.mappedIndices) ? object.mappedIndices.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: DigitalAudio_Device_Map): unknown {
    const obj: any = {};
    message.channelIndex !== undefined && (obj.channelIndex = Math.round(message.channelIndex));
    if (message.mappedIndices) {
      obj.mappedIndices = message.mappedIndices.map((e) => Math.round(e));
    } else {
      obj.mappedIndices = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DigitalAudio_Device_Map>, I>>(object: I): DigitalAudio_Device_Map {
    const message = createBaseDigitalAudio_Device_Map();
    message.channelIndex = object.channelIndex ?? 0;
    message.mappedIndices = object.mappedIndices?.map((e) => e) || [];
    return message;
  },
};

function createBaseDigitalAudio_Device_Channel(): DigitalAudio_Device_Channel {
  return { muteEnable: false, soloEnable: false, toneEnable: false, audioDelay: 0, level: 0 };
}

export const DigitalAudio_Device_Channel = {
  encode(message: DigitalAudio_Device_Channel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.muteEnable === true) {
      writer.uint32(8).bool(message.muteEnable);
    }
    if (message.soloEnable === true) {
      writer.uint32(16).bool(message.soloEnable);
    }
    if (message.toneEnable === true) {
      writer.uint32(24).bool(message.toneEnable);
    }
    if (message.audioDelay !== 0) {
      writer.uint32(33).double(message.audioDelay);
    }
    if (message.level !== 0) {
      writer.uint32(41).double(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigitalAudio_Device_Channel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio_Device_Channel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.muteEnable = reader.bool();
          break;
        case 2:
          message.soloEnable = reader.bool();
          break;
        case 3:
          message.toneEnable = reader.bool();
          break;
        case 4:
          message.audioDelay = reader.double();
          break;
        case 5:
          message.level = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DigitalAudio_Device_Channel {
    return {
      muteEnable: isSet(object.muteEnable) ? Boolean(object.muteEnable) : false,
      soloEnable: isSet(object.soloEnable) ? Boolean(object.soloEnable) : false,
      toneEnable: isSet(object.toneEnable) ? Boolean(object.toneEnable) : false,
      audioDelay: isSet(object.audioDelay) ? Number(object.audioDelay) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
    };
  },

  toJSON(message: DigitalAudio_Device_Channel): unknown {
    const obj: any = {};
    message.muteEnable !== undefined && (obj.muteEnable = message.muteEnable);
    message.soloEnable !== undefined && (obj.soloEnable = message.soloEnable);
    message.toneEnable !== undefined && (obj.toneEnable = message.toneEnable);
    message.audioDelay !== undefined && (obj.audioDelay = message.audioDelay);
    message.level !== undefined && (obj.level = message.level);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DigitalAudio_Device_Channel>, I>>(object: I): DigitalAudio_Device_Channel {
    const message = createBaseDigitalAudio_Device_Channel();
    message.muteEnable = object.muteEnable ?? false;
    message.soloEnable = object.soloEnable ?? false;
    message.toneEnable = object.toneEnable ?? false;
    message.audioDelay = object.audioDelay ?? 0;
    message.level = object.level ?? 0;
    return message;
  },
};

function createBaseDigitalAudio_Device_Routing(): DigitalAudio_Device_Routing {
  return { channels: [], map: [], isCustomMap: false, masterChannel: undefined };
}

export const DigitalAudio_Device_Routing = {
  encode(message: DigitalAudio_Device_Routing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.channels) {
      DigitalAudio_Device_Channel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.map) {
      DigitalAudio_Device_Map.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.isCustomMap === true) {
      writer.uint32(24).bool(message.isCustomMap);
    }
    if (message.masterChannel !== undefined) {
      DigitalAudio_Device_Channel.encode(message.masterChannel, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigitalAudio_Device_Routing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio_Device_Routing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(DigitalAudio_Device_Channel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.map.push(DigitalAudio_Device_Map.decode(reader, reader.uint32()));
          break;
        case 3:
          message.isCustomMap = reader.bool();
          break;
        case 4:
          message.masterChannel = DigitalAudio_Device_Channel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DigitalAudio_Device_Routing {
    return {
      channels: Array.isArray(object?.channels)
        ? object.channels.map((e: any) => DigitalAudio_Device_Channel.fromJSON(e))
        : [],
      map: Array.isArray(object?.map) ? object.map.map((e: any) => DigitalAudio_Device_Map.fromJSON(e)) : [],
      isCustomMap: isSet(object.isCustomMap) ? Boolean(object.isCustomMap) : false,
      masterChannel: isSet(object.masterChannel)
        ? DigitalAudio_Device_Channel.fromJSON(object.masterChannel)
        : undefined,
    };
  },

  toJSON(message: DigitalAudio_Device_Routing): unknown {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map((e) => e ? DigitalAudio_Device_Channel.toJSON(e) : undefined);
    } else {
      obj.channels = [];
    }
    if (message.map) {
      obj.map = message.map.map((e) => e ? DigitalAudio_Device_Map.toJSON(e) : undefined);
    } else {
      obj.map = [];
    }
    message.isCustomMap !== undefined && (obj.isCustomMap = message.isCustomMap);
    message.masterChannel !== undefined &&
      (obj.masterChannel = message.masterChannel
        ? DigitalAudio_Device_Channel.toJSON(message.masterChannel)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DigitalAudio_Device_Routing>, I>>(object: I): DigitalAudio_Device_Routing {
    const message = createBaseDigitalAudio_Device_Routing();
    message.channels = object.channels?.map((e) => DigitalAudio_Device_Channel.fromPartial(e)) || [];
    message.map = object.map?.map((e) => DigitalAudio_Device_Map.fromPartial(e)) || [];
    message.isCustomMap = object.isCustomMap ?? false;
    message.masterChannel = (object.masterChannel !== undefined && object.masterChannel !== null)
      ? DigitalAudio_Device_Channel.fromPartial(object.masterChannel)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
