/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { UUID } from "./basicTypes";

export const protobufPackage = "rv.data";

export interface AlignmentGuide {
  uuid: UUID | undefined;
  orientation: AlignmentGuide_GuidelineOrientation;
  location: number;
}

export enum AlignmentGuide_GuidelineOrientation {
  GUIDELINE_ORIENTATION_HORIZONTAL = 0,
  GUIDELINE_ORIENTATION_VERTICAL = 1,
  UNRECOGNIZED = -1,
}

export function alignmentGuide_GuidelineOrientationFromJSON(object: any): AlignmentGuide_GuidelineOrientation {
  switch (object) {
    case 0:
    case "GUIDELINE_ORIENTATION_HORIZONTAL":
      return AlignmentGuide_GuidelineOrientation.GUIDELINE_ORIENTATION_HORIZONTAL;
    case 1:
    case "GUIDELINE_ORIENTATION_VERTICAL":
      return AlignmentGuide_GuidelineOrientation.GUIDELINE_ORIENTATION_VERTICAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AlignmentGuide_GuidelineOrientation.UNRECOGNIZED;
  }
}

export function alignmentGuide_GuidelineOrientationToJSON(object: AlignmentGuide_GuidelineOrientation): string {
  switch (object) {
    case AlignmentGuide_GuidelineOrientation.GUIDELINE_ORIENTATION_HORIZONTAL:
      return "GUIDELINE_ORIENTATION_HORIZONTAL";
    case AlignmentGuide_GuidelineOrientation.GUIDELINE_ORIENTATION_VERTICAL:
      return "GUIDELINE_ORIENTATION_VERTICAL";
    case AlignmentGuide_GuidelineOrientation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAlignmentGuide(): AlignmentGuide {
  return { uuid: undefined, orientation: 0, location: 0 };
}

export const AlignmentGuide = {
  encode(message: AlignmentGuide, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.orientation !== 0) {
      writer.uint32(16).int32(message.orientation);
    }
    if (message.location !== 0) {
      writer.uint32(25).double(message.location);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AlignmentGuide {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlignmentGuide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = UUID.decode(reader, reader.uint32());
          break;
        case 2:
          message.orientation = reader.int32() as any;
          break;
        case 3:
          message.location = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AlignmentGuide {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      orientation: isSet(object.orientation) ? alignmentGuide_GuidelineOrientationFromJSON(object.orientation) : 0,
      location: isSet(object.location) ? Number(object.location) : 0,
    };
  },

  toJSON(message: AlignmentGuide): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.orientation !== undefined &&
      (obj.orientation = alignmentGuide_GuidelineOrientationToJSON(message.orientation));
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AlignmentGuide>, I>>(object: I): AlignmentGuide {
    const message = createBaseAlignmentGuide();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.orientation = object.orientation ?? 0;
    message.location = object.location ?? 0;
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
