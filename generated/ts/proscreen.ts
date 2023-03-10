/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Color, UUID } from "./basicTypes";
import { EdgeBlend, Screen } from "./screens";

export const protobufPackage = "rv.data";

export interface ProPresenterScreen {
  name: string;
  screenType: ProPresenterScreen_ScreenType;
  backgroundColor: Color | undefined;
  uuid: UUID | undefined;
  backgroundColorEnabled: boolean;
  arrangementSingle?: ProPresenterScreen_SingleArrangement | undefined;
  arrangementCombined?: ProPresenterScreen_CombinedArrangement | undefined;
  arrangementEdgeBlend?: ProPresenterScreen_EdgeBlendArrangement | undefined;
}

export enum ProPresenterScreen_ScreenType {
  SCREEN_TYPE_UNKNOWN = 0,
  SCREEN_TYPE_AUDIENCE = 1,
  SCREEN_TYPE_STAGE = 2,
  UNRECOGNIZED = -1,
}

export function proPresenterScreen_ScreenTypeFromJSON(object: any): ProPresenterScreen_ScreenType {
  switch (object) {
    case 0:
    case "SCREEN_TYPE_UNKNOWN":
      return ProPresenterScreen_ScreenType.SCREEN_TYPE_UNKNOWN;
    case 1:
    case "SCREEN_TYPE_AUDIENCE":
      return ProPresenterScreen_ScreenType.SCREEN_TYPE_AUDIENCE;
    case 2:
    case "SCREEN_TYPE_STAGE":
      return ProPresenterScreen_ScreenType.SCREEN_TYPE_STAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProPresenterScreen_ScreenType.UNRECOGNIZED;
  }
}

export function proPresenterScreen_ScreenTypeToJSON(object: ProPresenterScreen_ScreenType): string {
  switch (object) {
    case ProPresenterScreen_ScreenType.SCREEN_TYPE_UNKNOWN:
      return "SCREEN_TYPE_UNKNOWN";
    case ProPresenterScreen_ScreenType.SCREEN_TYPE_AUDIENCE:
      return "SCREEN_TYPE_AUDIENCE";
    case ProPresenterScreen_ScreenType.SCREEN_TYPE_STAGE:
      return "SCREEN_TYPE_STAGE";
    case ProPresenterScreen_ScreenType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ProPresenterScreen_SingleArrangement {
  screens: Screen[];
}

export interface ProPresenterScreen_CombinedArrangement {
  screens: Screen[];
  rows: number;
  columns: number;
}

export interface ProPresenterScreen_EdgeBlendArrangement {
  screenCount: number;
  screens: Screen[];
  edgeBlends: EdgeBlend[];
}

function createBaseProPresenterScreen(): ProPresenterScreen {
  return {
    name: "",
    screenType: 0,
    backgroundColor: undefined,
    uuid: undefined,
    backgroundColorEnabled: false,
    arrangementSingle: undefined,
    arrangementCombined: undefined,
    arrangementEdgeBlend: undefined,
  };
}

export const ProPresenterScreen = {
  encode(message: ProPresenterScreen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.screenType !== 0) {
      writer.uint32(16).int32(message.screenType);
    }
    if (message.backgroundColor !== undefined) {
      Color.encode(message.backgroundColor, writer.uint32(50).fork()).ldelim();
    }
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(58).fork()).ldelim();
    }
    if (message.backgroundColorEnabled === true) {
      writer.uint32(64).bool(message.backgroundColorEnabled);
    }
    if (message.arrangementSingle !== undefined) {
      ProPresenterScreen_SingleArrangement.encode(message.arrangementSingle, writer.uint32(26).fork()).ldelim();
    }
    if (message.arrangementCombined !== undefined) {
      ProPresenterScreen_CombinedArrangement.encode(message.arrangementCombined, writer.uint32(34).fork()).ldelim();
    }
    if (message.arrangementEdgeBlend !== undefined) {
      ProPresenterScreen_EdgeBlendArrangement.encode(message.arrangementEdgeBlend, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProPresenterScreen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProPresenterScreen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.screenType = reader.int32() as any;
          break;
        case 6:
          message.backgroundColor = Color.decode(reader, reader.uint32());
          break;
        case 7:
          message.uuid = UUID.decode(reader, reader.uint32());
          break;
        case 8:
          message.backgroundColorEnabled = reader.bool();
          break;
        case 3:
          message.arrangementSingle = ProPresenterScreen_SingleArrangement.decode(reader, reader.uint32());
          break;
        case 4:
          message.arrangementCombined = ProPresenterScreen_CombinedArrangement.decode(reader, reader.uint32());
          break;
        case 5:
          message.arrangementEdgeBlend = ProPresenterScreen_EdgeBlendArrangement.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProPresenterScreen {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      screenType: isSet(object.screenType) ? proPresenterScreen_ScreenTypeFromJSON(object.screenType) : 0,
      backgroundColor: isSet(object.backgroundColor) ? Color.fromJSON(object.backgroundColor) : undefined,
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      backgroundColorEnabled: isSet(object.backgroundColorEnabled) ? Boolean(object.backgroundColorEnabled) : false,
      arrangementSingle: isSet(object.arrangementSingle)
        ? ProPresenterScreen_SingleArrangement.fromJSON(object.arrangementSingle)
        : undefined,
      arrangementCombined: isSet(object.arrangementCombined)
        ? ProPresenterScreen_CombinedArrangement.fromJSON(object.arrangementCombined)
        : undefined,
      arrangementEdgeBlend: isSet(object.arrangementEdgeBlend)
        ? ProPresenterScreen_EdgeBlendArrangement.fromJSON(object.arrangementEdgeBlend)
        : undefined,
    };
  },

  toJSON(message: ProPresenterScreen): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.screenType !== undefined && (obj.screenType = proPresenterScreen_ScreenTypeToJSON(message.screenType));
    message.backgroundColor !== undefined &&
      (obj.backgroundColor = message.backgroundColor ? Color.toJSON(message.backgroundColor) : undefined);
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.backgroundColorEnabled !== undefined && (obj.backgroundColorEnabled = message.backgroundColorEnabled);
    message.arrangementSingle !== undefined && (obj.arrangementSingle = message.arrangementSingle
      ? ProPresenterScreen_SingleArrangement.toJSON(message.arrangementSingle)
      : undefined);
    message.arrangementCombined !== undefined && (obj.arrangementCombined = message.arrangementCombined
      ? ProPresenterScreen_CombinedArrangement.toJSON(message.arrangementCombined)
      : undefined);
    message.arrangementEdgeBlend !== undefined && (obj.arrangementEdgeBlend = message.arrangementEdgeBlend
      ? ProPresenterScreen_EdgeBlendArrangement.toJSON(message.arrangementEdgeBlend)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProPresenterScreen>, I>>(object: I): ProPresenterScreen {
    const message = createBaseProPresenterScreen();
    message.name = object.name ?? "";
    message.screenType = object.screenType ?? 0;
    message.backgroundColor = (object.backgroundColor !== undefined && object.backgroundColor !== null)
      ? Color.fromPartial(object.backgroundColor)
      : undefined;
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.backgroundColorEnabled = object.backgroundColorEnabled ?? false;
    message.arrangementSingle = (object.arrangementSingle !== undefined && object.arrangementSingle !== null)
      ? ProPresenterScreen_SingleArrangement.fromPartial(object.arrangementSingle)
      : undefined;
    message.arrangementCombined = (object.arrangementCombined !== undefined && object.arrangementCombined !== null)
      ? ProPresenterScreen_CombinedArrangement.fromPartial(object.arrangementCombined)
      : undefined;
    message.arrangementEdgeBlend = (object.arrangementEdgeBlend !== undefined && object.arrangementEdgeBlend !== null)
      ? ProPresenterScreen_EdgeBlendArrangement.fromPartial(object.arrangementEdgeBlend)
      : undefined;
    return message;
  },
};

function createBaseProPresenterScreen_SingleArrangement(): ProPresenterScreen_SingleArrangement {
  return { screens: [] };
}

export const ProPresenterScreen_SingleArrangement = {
  encode(message: ProPresenterScreen_SingleArrangement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.screens) {
      Screen.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProPresenterScreen_SingleArrangement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProPresenterScreen_SingleArrangement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.screens.push(Screen.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProPresenterScreen_SingleArrangement {
    return { screens: Array.isArray(object?.screens) ? object.screens.map((e: any) => Screen.fromJSON(e)) : [] };
  },

  toJSON(message: ProPresenterScreen_SingleArrangement): unknown {
    const obj: any = {};
    if (message.screens) {
      obj.screens = message.screens.map((e) => e ? Screen.toJSON(e) : undefined);
    } else {
      obj.screens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProPresenterScreen_SingleArrangement>, I>>(
    object: I,
  ): ProPresenterScreen_SingleArrangement {
    const message = createBaseProPresenterScreen_SingleArrangement();
    message.screens = object.screens?.map((e) => Screen.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProPresenterScreen_CombinedArrangement(): ProPresenterScreen_CombinedArrangement {
  return { screens: [], rows: 0, columns: 0 };
}

export const ProPresenterScreen_CombinedArrangement = {
  encode(message: ProPresenterScreen_CombinedArrangement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.screens) {
      Screen.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.rows !== 0) {
      writer.uint32(16).uint32(message.rows);
    }
    if (message.columns !== 0) {
      writer.uint32(24).uint32(message.columns);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProPresenterScreen_CombinedArrangement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProPresenterScreen_CombinedArrangement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.screens.push(Screen.decode(reader, reader.uint32()));
          break;
        case 2:
          message.rows = reader.uint32();
          break;
        case 3:
          message.columns = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProPresenterScreen_CombinedArrangement {
    return {
      screens: Array.isArray(object?.screens) ? object.screens.map((e: any) => Screen.fromJSON(e)) : [],
      rows: isSet(object.rows) ? Number(object.rows) : 0,
      columns: isSet(object.columns) ? Number(object.columns) : 0,
    };
  },

  toJSON(message: ProPresenterScreen_CombinedArrangement): unknown {
    const obj: any = {};
    if (message.screens) {
      obj.screens = message.screens.map((e) => e ? Screen.toJSON(e) : undefined);
    } else {
      obj.screens = [];
    }
    message.rows !== undefined && (obj.rows = Math.round(message.rows));
    message.columns !== undefined && (obj.columns = Math.round(message.columns));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProPresenterScreen_CombinedArrangement>, I>>(
    object: I,
  ): ProPresenterScreen_CombinedArrangement {
    const message = createBaseProPresenterScreen_CombinedArrangement();
    message.screens = object.screens?.map((e) => Screen.fromPartial(e)) || [];
    message.rows = object.rows ?? 0;
    message.columns = object.columns ?? 0;
    return message;
  },
};

function createBaseProPresenterScreen_EdgeBlendArrangement(): ProPresenterScreen_EdgeBlendArrangement {
  return { screenCount: 0, screens: [], edgeBlends: [] };
}

export const ProPresenterScreen_EdgeBlendArrangement = {
  encode(message: ProPresenterScreen_EdgeBlendArrangement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.screenCount !== 0) {
      writer.uint32(8).uint32(message.screenCount);
    }
    for (const v of message.screens) {
      Screen.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.edgeBlends) {
      EdgeBlend.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProPresenterScreen_EdgeBlendArrangement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProPresenterScreen_EdgeBlendArrangement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.screenCount = reader.uint32();
          break;
        case 2:
          message.screens.push(Screen.decode(reader, reader.uint32()));
          break;
        case 3:
          message.edgeBlends.push(EdgeBlend.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProPresenterScreen_EdgeBlendArrangement {
    return {
      screenCount: isSet(object.screenCount) ? Number(object.screenCount) : 0,
      screens: Array.isArray(object?.screens) ? object.screens.map((e: any) => Screen.fromJSON(e)) : [],
      edgeBlends: Array.isArray(object?.edgeBlends) ? object.edgeBlends.map((e: any) => EdgeBlend.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProPresenterScreen_EdgeBlendArrangement): unknown {
    const obj: any = {};
    message.screenCount !== undefined && (obj.screenCount = Math.round(message.screenCount));
    if (message.screens) {
      obj.screens = message.screens.map((e) => e ? Screen.toJSON(e) : undefined);
    } else {
      obj.screens = [];
    }
    if (message.edgeBlends) {
      obj.edgeBlends = message.edgeBlends.map((e) => e ? EdgeBlend.toJSON(e) : undefined);
    } else {
      obj.edgeBlends = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProPresenterScreen_EdgeBlendArrangement>, I>>(
    object: I,
  ): ProPresenterScreen_EdgeBlendArrangement {
    const message = createBaseProPresenterScreen_EdgeBlendArrangement();
    message.screenCount = object.screenCount ?? 0;
    message.screens = object.screens?.map((e) => Screen.fromPartial(e)) || [];
    message.edgeBlends = object.edgeBlends?.map((e) => EdgeBlend.fromPartial(e)) || [];
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
