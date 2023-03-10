/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { AlignmentGuide } from "./alignmentGuide";
import { URL } from "./basicTypes";
import { Transition } from "./effects";
import { Graphics_Text_Attributes } from "./graphicsData";
import { Slide } from "./slide";

export const protobufPackage = "rv.data";

export interface PresentationSlide {
  baseSlide: Slide | undefined;
  notes: PresentationSlide_Notes | undefined;
  templateGuidelines: AlignmentGuide[];
  chordChart: URL | undefined;
  transition: Transition | undefined;
}

export interface PresentationSlide_Notes {
  rtfData: Uint8Array;
  attributes: Graphics_Text_Attributes | undefined;
}

function createBasePresentationSlide(): PresentationSlide {
  return {
    baseSlide: undefined,
    notes: undefined,
    templateGuidelines: [],
    chordChart: undefined,
    transition: undefined,
  };
}

export const PresentationSlide = {
  encode(message: PresentationSlide, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseSlide !== undefined) {
      Slide.encode(message.baseSlide, writer.uint32(10).fork()).ldelim();
    }
    if (message.notes !== undefined) {
      PresentationSlide_Notes.encode(message.notes, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.templateGuidelines) {
      AlignmentGuide.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.chordChart !== undefined) {
      URL.encode(message.chordChart, writer.uint32(34).fork()).ldelim();
    }
    if (message.transition !== undefined) {
      Transition.encode(message.transition, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PresentationSlide {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentationSlide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseSlide = Slide.decode(reader, reader.uint32());
          break;
        case 2:
          message.notes = PresentationSlide_Notes.decode(reader, reader.uint32());
          break;
        case 3:
          message.templateGuidelines.push(AlignmentGuide.decode(reader, reader.uint32()));
          break;
        case 4:
          message.chordChart = URL.decode(reader, reader.uint32());
          break;
        case 5:
          message.transition = Transition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PresentationSlide {
    return {
      baseSlide: isSet(object.baseSlide) ? Slide.fromJSON(object.baseSlide) : undefined,
      notes: isSet(object.notes) ? PresentationSlide_Notes.fromJSON(object.notes) : undefined,
      templateGuidelines: Array.isArray(object?.templateGuidelines)
        ? object.templateGuidelines.map((e: any) => AlignmentGuide.fromJSON(e))
        : [],
      chordChart: isSet(object.chordChart) ? URL.fromJSON(object.chordChart) : undefined,
      transition: isSet(object.transition) ? Transition.fromJSON(object.transition) : undefined,
    };
  },

  toJSON(message: PresentationSlide): unknown {
    const obj: any = {};
    message.baseSlide !== undefined &&
      (obj.baseSlide = message.baseSlide ? Slide.toJSON(message.baseSlide) : undefined);
    message.notes !== undefined &&
      (obj.notes = message.notes ? PresentationSlide_Notes.toJSON(message.notes) : undefined);
    if (message.templateGuidelines) {
      obj.templateGuidelines = message.templateGuidelines.map((e) => e ? AlignmentGuide.toJSON(e) : undefined);
    } else {
      obj.templateGuidelines = [];
    }
    message.chordChart !== undefined &&
      (obj.chordChart = message.chordChart ? URL.toJSON(message.chordChart) : undefined);
    message.transition !== undefined &&
      (obj.transition = message.transition ? Transition.toJSON(message.transition) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PresentationSlide>, I>>(object: I): PresentationSlide {
    const message = createBasePresentationSlide();
    message.baseSlide = (object.baseSlide !== undefined && object.baseSlide !== null)
      ? Slide.fromPartial(object.baseSlide)
      : undefined;
    message.notes = (object.notes !== undefined && object.notes !== null)
      ? PresentationSlide_Notes.fromPartial(object.notes)
      : undefined;
    message.templateGuidelines = object.templateGuidelines?.map((e) => AlignmentGuide.fromPartial(e)) || [];
    message.chordChart = (object.chordChart !== undefined && object.chordChart !== null)
      ? URL.fromPartial(object.chordChart)
      : undefined;
    message.transition = (object.transition !== undefined && object.transition !== null)
      ? Transition.fromPartial(object.transition)
      : undefined;
    return message;
  },
};

function createBasePresentationSlide_Notes(): PresentationSlide_Notes {
  return { rtfData: new Uint8Array(), attributes: undefined };
}

export const PresentationSlide_Notes = {
  encode(message: PresentationSlide_Notes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rtfData.length !== 0) {
      writer.uint32(10).bytes(message.rtfData);
    }
    if (message.attributes !== undefined) {
      Graphics_Text_Attributes.encode(message.attributes, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PresentationSlide_Notes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentationSlide_Notes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rtfData = reader.bytes();
          break;
        case 2:
          message.attributes = Graphics_Text_Attributes.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PresentationSlide_Notes {
    return {
      rtfData: isSet(object.rtfData) ? bytesFromBase64(object.rtfData) : new Uint8Array(),
      attributes: isSet(object.attributes) ? Graphics_Text_Attributes.fromJSON(object.attributes) : undefined,
    };
  },

  toJSON(message: PresentationSlide_Notes): unknown {
    const obj: any = {};
    message.rtfData !== undefined &&
      (obj.rtfData = base64FromBytes(message.rtfData !== undefined ? message.rtfData : new Uint8Array()));
    message.attributes !== undefined &&
      (obj.attributes = message.attributes ? Graphics_Text_Attributes.toJSON(message.attributes) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PresentationSlide_Notes>, I>>(object: I): PresentationSlide_Notes {
    const message = createBasePresentationSlide_Notes();
    message.rtfData = object.rtfData ?? new Uint8Array();
    message.attributes = (object.attributes !== undefined && object.attributes !== null)
      ? Graphics_Text_Attributes.fromPartial(object.attributes)
      : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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
