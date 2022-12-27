/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Color } from "./basicTypes";
import { Graphics_Gradient } from "./graphicsData";

export const protobufPackage = "rv.data";

export interface Background {
  isEnabled: boolean;
  color?: Color | undefined;
  gradient?: Graphics_Gradient | undefined;
}

function createBaseBackground(): Background {
  return { isEnabled: false, color: undefined, gradient: undefined };
}

export const Background = {
  encode(message: Background, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isEnabled === true) {
      writer.uint32(24).bool(message.isEnabled);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    if (message.gradient !== undefined) {
      Graphics_Gradient.encode(message.gradient, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Background {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackground();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.isEnabled = reader.bool();
          break;
        case 1:
          message.color = Color.decode(reader, reader.uint32());
          break;
        case 2:
          message.gradient = Graphics_Gradient.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Background {
    return {
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      gradient: isSet(object.gradient) ? Graphics_Gradient.fromJSON(object.gradient) : undefined,
    };
  },

  toJSON(message: Background): unknown {
    const obj: any = {};
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.gradient !== undefined &&
      (obj.gradient = message.gradient ? Graphics_Gradient.toJSON(message.gradient) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Background>, I>>(object: I): Background {
    const message = createBaseBackground();
    message.isEnabled = object.isEnabled ?? false;
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    message.gradient = (object.gradient !== undefined && object.gradient !== null)
      ? Graphics_Gradient.fromPartial(object.gradient)
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
