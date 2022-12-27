/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ApplicationInfo, UUID } from "./basicTypes";
import { Slide } from "./slide";

export const protobufPackage = "rv.data";

export interface Template {
}

export interface Template_Slide {
  baseSlide: Slide | undefined;
  name: string;
}

export interface Template_Document {
  applicationInfo: ApplicationInfo | undefined;
  slides: Template_Slide[];
}

export interface Template_Identification {
  uuid: UUID | undefined;
  name: string;
  slideUuid: UUID | undefined;
  slideName: string;
  slideIndex: number;
}

function createBaseTemplate(): Template {
  return {};
}

export const Template = {
  encode(_: Template, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Template {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplate();
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

  fromJSON(_: any): Template {
    return {};
  },

  toJSON(_: Template): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Template>, I>>(_: I): Template {
    const message = createBaseTemplate();
    return message;
  },
};

function createBaseTemplate_Slide(): Template_Slide {
  return { baseSlide: undefined, name: "" };
}

export const Template_Slide = {
  encode(message: Template_Slide, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseSlide !== undefined) {
      Slide.encode(message.baseSlide, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Template_Slide {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplate_Slide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseSlide = Slide.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Template_Slide {
    return {
      baseSlide: isSet(object.baseSlide) ? Slide.fromJSON(object.baseSlide) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: Template_Slide): unknown {
    const obj: any = {};
    message.baseSlide !== undefined &&
      (obj.baseSlide = message.baseSlide ? Slide.toJSON(message.baseSlide) : undefined);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Template_Slide>, I>>(object: I): Template_Slide {
    const message = createBaseTemplate_Slide();
    message.baseSlide = (object.baseSlide !== undefined && object.baseSlide !== null)
      ? Slide.fromPartial(object.baseSlide)
      : undefined;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseTemplate_Document(): Template_Document {
  return { applicationInfo: undefined, slides: [] };
}

export const Template_Document = {
  encode(message: Template_Document, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(message.applicationInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.slides) {
      Template_Slide.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Template_Document {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplate_Document();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicationInfo = ApplicationInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.slides.push(Template_Slide.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Template_Document {
    return {
      applicationInfo: isSet(object.applicationInfo) ? ApplicationInfo.fromJSON(object.applicationInfo) : undefined,
      slides: Array.isArray(object?.slides) ? object.slides.map((e: any) => Template_Slide.fromJSON(e)) : [],
    };
  },

  toJSON(message: Template_Document): unknown {
    const obj: any = {};
    message.applicationInfo !== undefined &&
      (obj.applicationInfo = message.applicationInfo ? ApplicationInfo.toJSON(message.applicationInfo) : undefined);
    if (message.slides) {
      obj.slides = message.slides.map((e) => e ? Template_Slide.toJSON(e) : undefined);
    } else {
      obj.slides = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Template_Document>, I>>(object: I): Template_Document {
    const message = createBaseTemplate_Document();
    message.applicationInfo = (object.applicationInfo !== undefined && object.applicationInfo !== null)
      ? ApplicationInfo.fromPartial(object.applicationInfo)
      : undefined;
    message.slides = object.slides?.map((e) => Template_Slide.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTemplate_Identification(): Template_Identification {
  return { uuid: undefined, name: "", slideUuid: undefined, slideName: "", slideIndex: 0 };
}

export const Template_Identification = {
  encode(message: Template_Identification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.slideUuid !== undefined) {
      UUID.encode(message.slideUuid, writer.uint32(26).fork()).ldelim();
    }
    if (message.slideName !== "") {
      writer.uint32(34).string(message.slideName);
    }
    if (message.slideIndex !== 0) {
      writer.uint32(40).uint32(message.slideIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Template_Identification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplate_Identification();
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
          message.slideUuid = UUID.decode(reader, reader.uint32());
          break;
        case 4:
          message.slideName = reader.string();
          break;
        case 5:
          message.slideIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Template_Identification {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      slideUuid: isSet(object.slideUuid) ? UUID.fromJSON(object.slideUuid) : undefined,
      slideName: isSet(object.slideName) ? String(object.slideName) : "",
      slideIndex: isSet(object.slideIndex) ? Number(object.slideIndex) : 0,
    };
  },

  toJSON(message: Template_Identification): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.slideUuid !== undefined && (obj.slideUuid = message.slideUuid ? UUID.toJSON(message.slideUuid) : undefined);
    message.slideName !== undefined && (obj.slideName = message.slideName);
    message.slideIndex !== undefined && (obj.slideIndex = Math.round(message.slideIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Template_Identification>, I>>(object: I): Template_Identification {
    const message = createBaseTemplate_Identification();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    message.slideUuid = (object.slideUuid !== undefined && object.slideUuid !== null)
      ? UUID.fromPartial(object.slideUuid)
      : undefined;
    message.slideName = object.slideName ?? "";
    message.slideIndex = object.slideIndex ?? 0;
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
