/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Color } from "./basicTypes";

export const protobufPackage = "rv.data";

export interface TestPattern {
  type: TestPattern_Type;
  blendGrid?: TestPattern_BlendGrid | undefined;
  customColor?: TestPattern_CustomColor | undefined;
  intensity?: TestPattern_IntensityColor | undefined;
}

export enum TestPattern_Type {
  TYPE_UNKNOWN = 0,
  TYPE_BLEND_GRID = 1,
  TYPE_COLOR_BARS = 2,
  TYPE_FOCUS = 3,
  TYPE_GRAY_SCALE = 4,
  TYPE_BLACK_COLOR = 5,
  TYPE_WHITE_COLOR = 6,
  TYPE_CUSTOM_COLOR = 7,
  UNRECOGNIZED = -1,
}

export function testPattern_TypeFromJSON(object: any): TestPattern_Type {
  switch (object) {
    case 0:
    case "TYPE_UNKNOWN":
      return TestPattern_Type.TYPE_UNKNOWN;
    case 1:
    case "TYPE_BLEND_GRID":
      return TestPattern_Type.TYPE_BLEND_GRID;
    case 2:
    case "TYPE_COLOR_BARS":
      return TestPattern_Type.TYPE_COLOR_BARS;
    case 3:
    case "TYPE_FOCUS":
      return TestPattern_Type.TYPE_FOCUS;
    case 4:
    case "TYPE_GRAY_SCALE":
      return TestPattern_Type.TYPE_GRAY_SCALE;
    case 5:
    case "TYPE_BLACK_COLOR":
      return TestPattern_Type.TYPE_BLACK_COLOR;
    case 6:
    case "TYPE_WHITE_COLOR":
      return TestPattern_Type.TYPE_WHITE_COLOR;
    case 7:
    case "TYPE_CUSTOM_COLOR":
      return TestPattern_Type.TYPE_CUSTOM_COLOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TestPattern_Type.UNRECOGNIZED;
  }
}

export function testPattern_TypeToJSON(object: TestPattern_Type): string {
  switch (object) {
    case TestPattern_Type.TYPE_UNKNOWN:
      return "TYPE_UNKNOWN";
    case TestPattern_Type.TYPE_BLEND_GRID:
      return "TYPE_BLEND_GRID";
    case TestPattern_Type.TYPE_COLOR_BARS:
      return "TYPE_COLOR_BARS";
    case TestPattern_Type.TYPE_FOCUS:
      return "TYPE_FOCUS";
    case TestPattern_Type.TYPE_GRAY_SCALE:
      return "TYPE_GRAY_SCALE";
    case TestPattern_Type.TYPE_BLACK_COLOR:
      return "TYPE_BLACK_COLOR";
    case TestPattern_Type.TYPE_WHITE_COLOR:
      return "TYPE_WHITE_COLOR";
    case TestPattern_Type.TYPE_CUSTOM_COLOR:
      return "TYPE_CUSTOM_COLOR";
    case TestPattern_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TestPattern_BlendGrid {
  drawGrid: boolean;
  drawCircles: boolean;
  drawLines: boolean;
  invertColors: boolean;
  gridSpacing: number;
}

export interface TestPattern_CustomColor {
  color: Color | undefined;
}

export interface TestPattern_IntensityColor {
  intensity: number;
}

function createBaseTestPattern(): TestPattern {
  return { type: 0, blendGrid: undefined, customColor: undefined, intensity: undefined };
}

export const TestPattern = {
  encode(message: TestPattern, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.blendGrid !== undefined) {
      TestPattern_BlendGrid.encode(message.blendGrid, writer.uint32(18).fork()).ldelim();
    }
    if (message.customColor !== undefined) {
      TestPattern_CustomColor.encode(message.customColor, writer.uint32(26).fork()).ldelim();
    }
    if (message.intensity !== undefined) {
      TestPattern_IntensityColor.encode(message.intensity, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPattern {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPattern();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.blendGrid = TestPattern_BlendGrid.decode(reader, reader.uint32());
          break;
        case 3:
          message.customColor = TestPattern_CustomColor.decode(reader, reader.uint32());
          break;
        case 4:
          message.intensity = TestPattern_IntensityColor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestPattern {
    return {
      type: isSet(object.type) ? testPattern_TypeFromJSON(object.type) : 0,
      blendGrid: isSet(object.blendGrid) ? TestPattern_BlendGrid.fromJSON(object.blendGrid) : undefined,
      customColor: isSet(object.customColor) ? TestPattern_CustomColor.fromJSON(object.customColor) : undefined,
      intensity: isSet(object.intensity) ? TestPattern_IntensityColor.fromJSON(object.intensity) : undefined,
    };
  },

  toJSON(message: TestPattern): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = testPattern_TypeToJSON(message.type));
    message.blendGrid !== undefined &&
      (obj.blendGrid = message.blendGrid ? TestPattern_BlendGrid.toJSON(message.blendGrid) : undefined);
    message.customColor !== undefined &&
      (obj.customColor = message.customColor ? TestPattern_CustomColor.toJSON(message.customColor) : undefined);
    message.intensity !== undefined &&
      (obj.intensity = message.intensity ? TestPattern_IntensityColor.toJSON(message.intensity) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TestPattern>, I>>(object: I): TestPattern {
    const message = createBaseTestPattern();
    message.type = object.type ?? 0;
    message.blendGrid = (object.blendGrid !== undefined && object.blendGrid !== null)
      ? TestPattern_BlendGrid.fromPartial(object.blendGrid)
      : undefined;
    message.customColor = (object.customColor !== undefined && object.customColor !== null)
      ? TestPattern_CustomColor.fromPartial(object.customColor)
      : undefined;
    message.intensity = (object.intensity !== undefined && object.intensity !== null)
      ? TestPattern_IntensityColor.fromPartial(object.intensity)
      : undefined;
    return message;
  },
};

function createBaseTestPattern_BlendGrid(): TestPattern_BlendGrid {
  return { drawGrid: false, drawCircles: false, drawLines: false, invertColors: false, gridSpacing: 0 };
}

export const TestPattern_BlendGrid = {
  encode(message: TestPattern_BlendGrid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.drawGrid === true) {
      writer.uint32(8).bool(message.drawGrid);
    }
    if (message.drawCircles === true) {
      writer.uint32(16).bool(message.drawCircles);
    }
    if (message.drawLines === true) {
      writer.uint32(24).bool(message.drawLines);
    }
    if (message.invertColors === true) {
      writer.uint32(32).bool(message.invertColors);
    }
    if (message.gridSpacing !== 0) {
      writer.uint32(41).double(message.gridSpacing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPattern_BlendGrid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPattern_BlendGrid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.drawGrid = reader.bool();
          break;
        case 2:
          message.drawCircles = reader.bool();
          break;
        case 3:
          message.drawLines = reader.bool();
          break;
        case 4:
          message.invertColors = reader.bool();
          break;
        case 5:
          message.gridSpacing = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestPattern_BlendGrid {
    return {
      drawGrid: isSet(object.drawGrid) ? Boolean(object.drawGrid) : false,
      drawCircles: isSet(object.drawCircles) ? Boolean(object.drawCircles) : false,
      drawLines: isSet(object.drawLines) ? Boolean(object.drawLines) : false,
      invertColors: isSet(object.invertColors) ? Boolean(object.invertColors) : false,
      gridSpacing: isSet(object.gridSpacing) ? Number(object.gridSpacing) : 0,
    };
  },

  toJSON(message: TestPattern_BlendGrid): unknown {
    const obj: any = {};
    message.drawGrid !== undefined && (obj.drawGrid = message.drawGrid);
    message.drawCircles !== undefined && (obj.drawCircles = message.drawCircles);
    message.drawLines !== undefined && (obj.drawLines = message.drawLines);
    message.invertColors !== undefined && (obj.invertColors = message.invertColors);
    message.gridSpacing !== undefined && (obj.gridSpacing = message.gridSpacing);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TestPattern_BlendGrid>, I>>(object: I): TestPattern_BlendGrid {
    const message = createBaseTestPattern_BlendGrid();
    message.drawGrid = object.drawGrid ?? false;
    message.drawCircles = object.drawCircles ?? false;
    message.drawLines = object.drawLines ?? false;
    message.invertColors = object.invertColors ?? false;
    message.gridSpacing = object.gridSpacing ?? 0;
    return message;
  },
};

function createBaseTestPattern_CustomColor(): TestPattern_CustomColor {
  return { color: undefined };
}

export const TestPattern_CustomColor = {
  encode(message: TestPattern_CustomColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPattern_CustomColor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPattern_CustomColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.color = Color.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestPattern_CustomColor {
    return { color: isSet(object.color) ? Color.fromJSON(object.color) : undefined };
  },

  toJSON(message: TestPattern_CustomColor): unknown {
    const obj: any = {};
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TestPattern_CustomColor>, I>>(object: I): TestPattern_CustomColor {
    const message = createBaseTestPattern_CustomColor();
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    return message;
  },
};

function createBaseTestPattern_IntensityColor(): TestPattern_IntensityColor {
  return { intensity: 0 };
}

export const TestPattern_IntensityColor = {
  encode(message: TestPattern_IntensityColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.intensity !== 0) {
      writer.uint32(9).double(message.intensity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPattern_IntensityColor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPattern_IntensityColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.intensity = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TestPattern_IntensityColor {
    return { intensity: isSet(object.intensity) ? Number(object.intensity) : 0 };
  },

  toJSON(message: TestPattern_IntensityColor): unknown {
    const obj: any = {};
    message.intensity !== undefined && (obj.intensity = message.intensity);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TestPattern_IntensityColor>, I>>(object: I): TestPattern_IntensityColor {
    const message = createBaseTestPattern_IntensityColor();
    message.intensity = object.intensity ?? 0;
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
