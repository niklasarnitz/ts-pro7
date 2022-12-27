/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Color, UUID } from "./basicTypes";
import { HotKey } from "./hotKey";

export const protobufPackage = "rv.data";

export interface Group {
  uuid: UUID | undefined;
  name: string;
  color: Color | undefined;
  hotKey: HotKey | undefined;
  applicationGroupIdentifier: UUID | undefined;
  applicationGroupName: string;
}

export interface ProGroupsDocument {
  groups: Group[];
}

function createBaseGroup(): Group {
  return {
    uuid: undefined,
    name: "",
    color: undefined,
    hotKey: undefined,
    applicationGroupIdentifier: undefined,
    applicationGroupName: "",
  };
}

export const Group = {
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(26).fork()).ldelim();
    }
    if (message.hotKey !== undefined) {
      HotKey.encode(message.hotKey, writer.uint32(34).fork()).ldelim();
    }
    if (message.applicationGroupIdentifier !== undefined) {
      UUID.encode(message.applicationGroupIdentifier, writer.uint32(42).fork()).ldelim();
    }
    if (message.applicationGroupName !== "") {
      writer.uint32(50).string(message.applicationGroupName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Group {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = UUID.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.color = Color.decode(reader, reader.uint32());
          break;
        case 4:
          message.hotKey = HotKey.decode(reader, reader.uint32());
          break;
        case 5:
          message.applicationGroupIdentifier = UUID.decode(reader, reader.uint32());
          break;
        case 6:
          message.applicationGroupName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Group {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      hotKey: isSet(object.hotKey) ? HotKey.fromJSON(object.hotKey) : undefined,
      applicationGroupIdentifier: isSet(object.applicationGroupIdentifier)
        ? UUID.fromJSON(object.applicationGroupIdentifier)
        : undefined,
      applicationGroupName: isSet(object.applicationGroupName) ? String(object.applicationGroupName) : "",
    };
  },

  toJSON(message: Group): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.hotKey !== undefined && (obj.hotKey = message.hotKey ? HotKey.toJSON(message.hotKey) : undefined);
    message.applicationGroupIdentifier !== undefined &&
      (obj.applicationGroupIdentifier = message.applicationGroupIdentifier
        ? UUID.toJSON(message.applicationGroupIdentifier)
        : undefined);
    message.applicationGroupName !== undefined && (obj.applicationGroupName = message.applicationGroupName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Group>, I>>(object: I): Group {
    const message = createBaseGroup();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    message.hotKey = (object.hotKey !== undefined && object.hotKey !== null)
      ? HotKey.fromPartial(object.hotKey)
      : undefined;
    message.applicationGroupIdentifier =
      (object.applicationGroupIdentifier !== undefined && object.applicationGroupIdentifier !== null)
        ? UUID.fromPartial(object.applicationGroupIdentifier)
        : undefined;
    message.applicationGroupName = object.applicationGroupName ?? "";
    return message;
  },
};

function createBaseProGroupsDocument(): ProGroupsDocument {
  return { groups: [] };
}

export const ProGroupsDocument = {
  encode(message: ProGroupsDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProGroupsDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProGroupsDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(Group.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProGroupsDocument {
    return { groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [] };
  },

  toJSON(message: ProGroupsDocument): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? Group.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProGroupsDocument>, I>>(object: I): ProGroupsDocument {
    const message = createBaseProGroupsDocument();
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
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
