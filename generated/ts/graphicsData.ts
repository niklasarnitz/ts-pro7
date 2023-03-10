/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Color, IntRange, URL, UUID } from "./basicTypes";
import { DigitalAudio_Device_Routing } from "./digitalAudio";
import { Effect } from "./effects";

export const protobufPackage = "rv.data";

export interface Graphics {
}

export interface Graphics_Element {
  uuid: UUID | undefined;
  name: string;
  bounds: Graphics_Rect | undefined;
  rotation: number;
  opacity: number;
  locked: boolean;
  aspectRatioLocked: boolean;
  path: Graphics_Path | undefined;
  fill: Graphics_Fill | undefined;
  stroke: Graphics_Stroke | undefined;
  shadow: Graphics_Shadow | undefined;
  feather: Graphics_Feather | undefined;
  text: Graphics_Text | undefined;
  flipMode: Graphics_Element_FlipMode;
  hidden: boolean;
  textLineMask?: Graphics_Text_LineFillMask | undefined;
}

export enum Graphics_Element_FlipMode {
  FLIP_MODE_NONE = 0,
  FLIP_MODE_VERTICAL = 1,
  FLIP_MODE_HORIZONTAL = 2,
  FLIP_MODE_BOTH = 3,
  UNRECOGNIZED = -1,
}

export function graphics_Element_FlipModeFromJSON(object: any): Graphics_Element_FlipMode {
  switch (object) {
    case 0:
    case "FLIP_MODE_NONE":
      return Graphics_Element_FlipMode.FLIP_MODE_NONE;
    case 1:
    case "FLIP_MODE_VERTICAL":
      return Graphics_Element_FlipMode.FLIP_MODE_VERTICAL;
    case 2:
    case "FLIP_MODE_HORIZONTAL":
      return Graphics_Element_FlipMode.FLIP_MODE_HORIZONTAL;
    case 3:
    case "FLIP_MODE_BOTH":
      return Graphics_Element_FlipMode.FLIP_MODE_BOTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Element_FlipMode.UNRECOGNIZED;
  }
}

export function graphics_Element_FlipModeToJSON(object: Graphics_Element_FlipMode): string {
  switch (object) {
    case Graphics_Element_FlipMode.FLIP_MODE_NONE:
      return "FLIP_MODE_NONE";
    case Graphics_Element_FlipMode.FLIP_MODE_VERTICAL:
      return "FLIP_MODE_VERTICAL";
    case Graphics_Element_FlipMode.FLIP_MODE_HORIZONTAL:
      return "FLIP_MODE_HORIZONTAL";
    case Graphics_Element_FlipMode.FLIP_MODE_BOTH:
      return "FLIP_MODE_BOTH";
    case Graphics_Element_FlipMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Graphics_Rect {
  origin: Graphics_Point | undefined;
  size: Graphics_Size | undefined;
}

export interface Graphics_Point {
  x: number;
  y: number;
}

export interface Graphics_Size {
  width: number;
  height: number;
}

export interface Graphics_EdgeInsets {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

export interface Graphics_Path {
  closed: boolean;
  points: Graphics_Path_BezierPoint[];
  shape: Graphics_Path_Shape | undefined;
}

export interface Graphics_Path_BezierPoint {
  point: Graphics_Point | undefined;
  q0: Graphics_Point | undefined;
  q1: Graphics_Point | undefined;
  curved: boolean;
}

export interface Graphics_Path_Shape {
  type: Graphics_Path_Shape_Type;
  roundedRectangle?: Graphics_Path_Shape_RoundedRectangle | undefined;
  polygon?: Graphics_Path_Shape_Polygon | undefined;
  star?: Graphics_Path_Shape_Star | undefined;
  arrow?: Graphics_Path_Shape_Arrow | undefined;
}

export enum Graphics_Path_Shape_Type {
  TYPE_UNKNOWN = 0,
  TYPE_RECTANGLE = 1,
  TYPE_ELLIPSE = 2,
  TYPE_ISOSCELES_TRIANGLE = 3,
  TYPE_RIGHT_TRIANGLE = 4,
  TYPE_RHOMBUS = 5,
  TYPE_STAR = 6,
  TYPE_POLYGON = 7,
  TYPE_CUSTOM = 8,
  TYPE_RIGHT_ARROW = 9,
  TYPE_DOUBLE_ARROW = 10,
  TYPE_ROUNDED_RECTANGLE = 11,
  UNRECOGNIZED = -1,
}

export function graphics_Path_Shape_TypeFromJSON(object: any): Graphics_Path_Shape_Type {
  switch (object) {
    case 0:
    case "TYPE_UNKNOWN":
      return Graphics_Path_Shape_Type.TYPE_UNKNOWN;
    case 1:
    case "TYPE_RECTANGLE":
      return Graphics_Path_Shape_Type.TYPE_RECTANGLE;
    case 2:
    case "TYPE_ELLIPSE":
      return Graphics_Path_Shape_Type.TYPE_ELLIPSE;
    case 3:
    case "TYPE_ISOSCELES_TRIANGLE":
      return Graphics_Path_Shape_Type.TYPE_ISOSCELES_TRIANGLE;
    case 4:
    case "TYPE_RIGHT_TRIANGLE":
      return Graphics_Path_Shape_Type.TYPE_RIGHT_TRIANGLE;
    case 5:
    case "TYPE_RHOMBUS":
      return Graphics_Path_Shape_Type.TYPE_RHOMBUS;
    case 6:
    case "TYPE_STAR":
      return Graphics_Path_Shape_Type.TYPE_STAR;
    case 7:
    case "TYPE_POLYGON":
      return Graphics_Path_Shape_Type.TYPE_POLYGON;
    case 8:
    case "TYPE_CUSTOM":
      return Graphics_Path_Shape_Type.TYPE_CUSTOM;
    case 9:
    case "TYPE_RIGHT_ARROW":
      return Graphics_Path_Shape_Type.TYPE_RIGHT_ARROW;
    case 10:
    case "TYPE_DOUBLE_ARROW":
      return Graphics_Path_Shape_Type.TYPE_DOUBLE_ARROW;
    case 11:
    case "TYPE_ROUNDED_RECTANGLE":
      return Graphics_Path_Shape_Type.TYPE_ROUNDED_RECTANGLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Path_Shape_Type.UNRECOGNIZED;
  }
}

export function graphics_Path_Shape_TypeToJSON(object: Graphics_Path_Shape_Type): string {
  switch (object) {
    case Graphics_Path_Shape_Type.TYPE_UNKNOWN:
      return "TYPE_UNKNOWN";
    case Graphics_Path_Shape_Type.TYPE_RECTANGLE:
      return "TYPE_RECTANGLE";
    case Graphics_Path_Shape_Type.TYPE_ELLIPSE:
      return "TYPE_ELLIPSE";
    case Graphics_Path_Shape_Type.TYPE_ISOSCELES_TRIANGLE:
      return "TYPE_ISOSCELES_TRIANGLE";
    case Graphics_Path_Shape_Type.TYPE_RIGHT_TRIANGLE:
      return "TYPE_RIGHT_TRIANGLE";
    case Graphics_Path_Shape_Type.TYPE_RHOMBUS:
      return "TYPE_RHOMBUS";
    case Graphics_Path_Shape_Type.TYPE_STAR:
      return "TYPE_STAR";
    case Graphics_Path_Shape_Type.TYPE_POLYGON:
      return "TYPE_POLYGON";
    case Graphics_Path_Shape_Type.TYPE_CUSTOM:
      return "TYPE_CUSTOM";
    case Graphics_Path_Shape_Type.TYPE_RIGHT_ARROW:
      return "TYPE_RIGHT_ARROW";
    case Graphics_Path_Shape_Type.TYPE_DOUBLE_ARROW:
      return "TYPE_DOUBLE_ARROW";
    case Graphics_Path_Shape_Type.TYPE_ROUNDED_RECTANGLE:
      return "TYPE_ROUNDED_RECTANGLE";
    case Graphics_Path_Shape_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Graphics_Path_Shape_RoundedRectangle {
  roundness: number;
}

export interface Graphics_Path_Shape_Arrow {
  corner: Graphics_Point | undefined;
}

export interface Graphics_Path_Shape_Polygon {
  numberSides: number;
}

export interface Graphics_Path_Shape_Star {
  innerRadius: number;
  numberPoints: number;
}

export interface Graphics_Fill {
  enable: boolean;
  color?: Color | undefined;
  gradient?: Graphics_Gradient | undefined;
  media?: Media | undefined;
}

export interface Graphics_Gradient {
  type: Graphics_Gradient_Type;
  angle: number;
  length: number;
  stops: Graphics_Gradient_ColorStop[];
}

export enum Graphics_Gradient_Type {
  TYPE_LINEAR = 0,
  TYPE_RADIAL = 1,
  TYPE_ANGLE = 2,
  UNRECOGNIZED = -1,
}

export function graphics_Gradient_TypeFromJSON(object: any): Graphics_Gradient_Type {
  switch (object) {
    case 0:
    case "TYPE_LINEAR":
      return Graphics_Gradient_Type.TYPE_LINEAR;
    case 1:
    case "TYPE_RADIAL":
      return Graphics_Gradient_Type.TYPE_RADIAL;
    case 2:
    case "TYPE_ANGLE":
      return Graphics_Gradient_Type.TYPE_ANGLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Gradient_Type.UNRECOGNIZED;
  }
}

export function graphics_Gradient_TypeToJSON(object: Graphics_Gradient_Type): string {
  switch (object) {
    case Graphics_Gradient_Type.TYPE_LINEAR:
      return "TYPE_LINEAR";
    case Graphics_Gradient_Type.TYPE_RADIAL:
      return "TYPE_RADIAL";
    case Graphics_Gradient_Type.TYPE_ANGLE:
      return "TYPE_ANGLE";
    case Graphics_Gradient_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Graphics_Gradient_ColorStop {
  color: Color | undefined;
  position: number;
  blendPoint: number;
}

export interface Graphics_Shadow {
  style: Graphics_Shadow_Style;
  angle: number;
  offset: number;
  radius: number;
  color: Color | undefined;
  opacity: number;
  enable: boolean;
}

export enum Graphics_Shadow_Style {
  STYLE_DROP = 0,
  UNRECOGNIZED = -1,
}

export function graphics_Shadow_StyleFromJSON(object: any): Graphics_Shadow_Style {
  switch (object) {
    case 0:
    case "STYLE_DROP":
      return Graphics_Shadow_Style.STYLE_DROP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Shadow_Style.UNRECOGNIZED;
  }
}

export function graphics_Shadow_StyleToJSON(object: Graphics_Shadow_Style): string {
  switch (object) {
    case Graphics_Shadow_Style.STYLE_DROP:
      return "STYLE_DROP";
    case Graphics_Shadow_Style.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Graphics_Stroke {
  style: Graphics_Stroke_Style;
  width: number;
  color: Color | undefined;
  pattern: number[];
  enable: boolean;
}

export enum Graphics_Stroke_Style {
  STYLE_SOLID_LINE = 0,
  STYLE_SQUARE_DASH = 1,
  STYLE_SHORT_DASH = 2,
  STYLE_LONG_DASH = 3,
  UNRECOGNIZED = -1,
}

export function graphics_Stroke_StyleFromJSON(object: any): Graphics_Stroke_Style {
  switch (object) {
    case 0:
    case "STYLE_SOLID_LINE":
      return Graphics_Stroke_Style.STYLE_SOLID_LINE;
    case 1:
    case "STYLE_SQUARE_DASH":
      return Graphics_Stroke_Style.STYLE_SQUARE_DASH;
    case 2:
    case "STYLE_SHORT_DASH":
      return Graphics_Stroke_Style.STYLE_SHORT_DASH;
    case 3:
    case "STYLE_LONG_DASH":
      return Graphics_Stroke_Style.STYLE_LONG_DASH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Stroke_Style.UNRECOGNIZED;
  }
}

export function graphics_Stroke_StyleToJSON(object: Graphics_Stroke_Style): string {
  switch (object) {
    case Graphics_Stroke_Style.STYLE_SOLID_LINE:
      return "STYLE_SOLID_LINE";
    case Graphics_Stroke_Style.STYLE_SQUARE_DASH:
      return "STYLE_SQUARE_DASH";
    case Graphics_Stroke_Style.STYLE_SHORT_DASH:
      return "STYLE_SHORT_DASH";
    case Graphics_Stroke_Style.STYLE_LONG_DASH:
      return "STYLE_LONG_DASH";
    case Graphics_Stroke_Style.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Graphics_Feather {
  style: Graphics_Feather_Style;
  radius: number;
  enable: boolean;
}

export enum Graphics_Feather_Style {
  STYLE_INSIDE = 0,
  STYLE_CENTER = 1,
  STYLE_OUTSIDE = 2,
  UNRECOGNIZED = -1,
}

export function graphics_Feather_StyleFromJSON(object: any): Graphics_Feather_Style {
  switch (object) {
    case 0:
    case "STYLE_INSIDE":
      return Graphics_Feather_Style.STYLE_INSIDE;
    case 1:
    case "STYLE_CENTER":
      return Graphics_Feather_Style.STYLE_CENTER;
    case 2:
    case "STYLE_OUTSIDE":
      return Graphics_Feather_Style.STYLE_OUTSIDE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Feather_Style.UNRECOGNIZED;
  }
}

export function graphics_Feather_StyleToJSON(object: Graphics_Feather_Style): string {
  switch (object) {
    case Graphics_Feather_Style.STYLE_INSIDE:
      return "STYLE_INSIDE";
    case Graphics_Feather_Style.STYLE_CENTER:
      return "STYLE_CENTER";
    case Graphics_Feather_Style.STYLE_OUTSIDE:
      return "STYLE_OUTSIDE";
    case Graphics_Feather_Style.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Graphics_Text {
  attributes: Graphics_Text_Attributes | undefined;
  shadow: Graphics_Shadow | undefined;
  rtfData: Uint8Array;
  verticalAlignment: Graphics_Text_VerticalAlignment;
  scaleBehavior: Graphics_Text_ScaleBehavior;
  margins: Graphics_EdgeInsets | undefined;
  isSuperscriptStandardized: boolean;
  transform: Graphics_Text_Transform;
  transformDelimiter: string;
  chordPro: Graphics_Text_ChordPro | undefined;
}

export enum Graphics_Text_VerticalAlignment {
  VERTICAL_ALIGNMENT_TOP = 0,
  VERTICAL_ALIGNMENT_MIDDLE = 1,
  VERTICAL_ALIGNMENT_BOTTOM = 2,
  UNRECOGNIZED = -1,
}

export function graphics_Text_VerticalAlignmentFromJSON(object: any): Graphics_Text_VerticalAlignment {
  switch (object) {
    case 0:
    case "VERTICAL_ALIGNMENT_TOP":
      return Graphics_Text_VerticalAlignment.VERTICAL_ALIGNMENT_TOP;
    case 1:
    case "VERTICAL_ALIGNMENT_MIDDLE":
      return Graphics_Text_VerticalAlignment.VERTICAL_ALIGNMENT_MIDDLE;
    case 2:
    case "VERTICAL_ALIGNMENT_BOTTOM":
      return Graphics_Text_VerticalAlignment.VERTICAL_ALIGNMENT_BOTTOM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Text_VerticalAlignment.UNRECOGNIZED;
  }
}

export function graphics_Text_VerticalAlignmentToJSON(object: Graphics_Text_VerticalAlignment): string {
  switch (object) {
    case Graphics_Text_VerticalAlignment.VERTICAL_ALIGNMENT_TOP:
      return "VERTICAL_ALIGNMENT_TOP";
    case Graphics_Text_VerticalAlignment.VERTICAL_ALIGNMENT_MIDDLE:
      return "VERTICAL_ALIGNMENT_MIDDLE";
    case Graphics_Text_VerticalAlignment.VERTICAL_ALIGNMENT_BOTTOM:
      return "VERTICAL_ALIGNMENT_BOTTOM";
    case Graphics_Text_VerticalAlignment.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Graphics_Text_ScaleBehavior {
  SCALE_BEHAVIOR_NONE = 0,
  SCALE_BEHAVIOR_ADJUST_CONTAINER_HEIGHT = 1,
  SCALE_BEHAVIOR_SCALE_FONT_DOWN = 2,
  SCALE_BEHAVIOR_SCALE_FONT_UP = 3,
  SCALE_BEHAVIOR_SCALE_FONT_UP_DOWN = 4,
  UNRECOGNIZED = -1,
}

export function graphics_Text_ScaleBehaviorFromJSON(object: any): Graphics_Text_ScaleBehavior {
  switch (object) {
    case 0:
    case "SCALE_BEHAVIOR_NONE":
      return Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_NONE;
    case 1:
    case "SCALE_BEHAVIOR_ADJUST_CONTAINER_HEIGHT":
      return Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_ADJUST_CONTAINER_HEIGHT;
    case 2:
    case "SCALE_BEHAVIOR_SCALE_FONT_DOWN":
      return Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_SCALE_FONT_DOWN;
    case 3:
    case "SCALE_BEHAVIOR_SCALE_FONT_UP":
      return Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_SCALE_FONT_UP;
    case 4:
    case "SCALE_BEHAVIOR_SCALE_FONT_UP_DOWN":
      return Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_SCALE_FONT_UP_DOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Text_ScaleBehavior.UNRECOGNIZED;
  }
}

export function graphics_Text_ScaleBehaviorToJSON(object: Graphics_Text_ScaleBehavior): string {
  switch (object) {
    case Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_NONE:
      return "SCALE_BEHAVIOR_NONE";
    case Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_ADJUST_CONTAINER_HEIGHT:
      return "SCALE_BEHAVIOR_ADJUST_CONTAINER_HEIGHT";
    case Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_SCALE_FONT_DOWN:
      return "SCALE_BEHAVIOR_SCALE_FONT_DOWN";
    case Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_SCALE_FONT_UP:
      return "SCALE_BEHAVIOR_SCALE_FONT_UP";
    case Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_SCALE_FONT_UP_DOWN:
      return "SCALE_BEHAVIOR_SCALE_FONT_UP_DOWN";
    case Graphics_Text_ScaleBehavior.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Graphics_Text_Transform {
  TRANSFORM_NONE = 0,
  TRANSFORM_SINGLE_LINE = 1,
  TRANSFORM_ONE_WORD_PER_LINE = 2,
  TRANSFORM_ONE_CHARACTER_PER_LINE = 3,
  TRANSFORM_REPLACE_LINE_RETURNS = 4,
  UNRECOGNIZED = -1,
}

export function graphics_Text_TransformFromJSON(object: any): Graphics_Text_Transform {
  switch (object) {
    case 0:
    case "TRANSFORM_NONE":
      return Graphics_Text_Transform.TRANSFORM_NONE;
    case 1:
    case "TRANSFORM_SINGLE_LINE":
      return Graphics_Text_Transform.TRANSFORM_SINGLE_LINE;
    case 2:
    case "TRANSFORM_ONE_WORD_PER_LINE":
      return Graphics_Text_Transform.TRANSFORM_ONE_WORD_PER_LINE;
    case 3:
    case "TRANSFORM_ONE_CHARACTER_PER_LINE":
      return Graphics_Text_Transform.TRANSFORM_ONE_CHARACTER_PER_LINE;
    case 4:
    case "TRANSFORM_REPLACE_LINE_RETURNS":
      return Graphics_Text_Transform.TRANSFORM_REPLACE_LINE_RETURNS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Text_Transform.UNRECOGNIZED;
  }
}

export function graphics_Text_TransformToJSON(object: Graphics_Text_Transform): string {
  switch (object) {
    case Graphics_Text_Transform.TRANSFORM_NONE:
      return "TRANSFORM_NONE";
    case Graphics_Text_Transform.TRANSFORM_SINGLE_LINE:
      return "TRANSFORM_SINGLE_LINE";
    case Graphics_Text_Transform.TRANSFORM_ONE_WORD_PER_LINE:
      return "TRANSFORM_ONE_WORD_PER_LINE";
    case Graphics_Text_Transform.TRANSFORM_ONE_CHARACTER_PER_LINE:
      return "TRANSFORM_ONE_CHARACTER_PER_LINE";
    case Graphics_Text_Transform.TRANSFORM_REPLACE_LINE_RETURNS:
      return "TRANSFORM_REPLACE_LINE_RETURNS";
    case Graphics_Text_Transform.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Graphics_Text_LineFillMask {
  enabled: boolean;
  heightOffset: number;
  verticalOffset: number;
  maskStyle: Graphics_Text_LineFillMask_LineMaskStyle;
  widthOffset: number;
  horizontalOffset: number;
}

export enum Graphics_Text_LineFillMask_LineMaskStyle {
  LINE_MASK_STYLE_FULL_WIDTH = 0,
  LINE_MASK_STYLE_LINE_WIDTH = 1,
  LINE_MASK_STYLE_MAX_LINE_WIDTH = 2,
  UNRECOGNIZED = -1,
}

export function graphics_Text_LineFillMask_LineMaskStyleFromJSON(
  object: any,
): Graphics_Text_LineFillMask_LineMaskStyle {
  switch (object) {
    case 0:
    case "LINE_MASK_STYLE_FULL_WIDTH":
      return Graphics_Text_LineFillMask_LineMaskStyle.LINE_MASK_STYLE_FULL_WIDTH;
    case 1:
    case "LINE_MASK_STYLE_LINE_WIDTH":
      return Graphics_Text_LineFillMask_LineMaskStyle.LINE_MASK_STYLE_LINE_WIDTH;
    case 2:
    case "LINE_MASK_STYLE_MAX_LINE_WIDTH":
      return Graphics_Text_LineFillMask_LineMaskStyle.LINE_MASK_STYLE_MAX_LINE_WIDTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Text_LineFillMask_LineMaskStyle.UNRECOGNIZED;
  }
}

export function graphics_Text_LineFillMask_LineMaskStyleToJSON(
  object: Graphics_Text_LineFillMask_LineMaskStyle,
): string {
  switch (object) {
    case Graphics_Text_LineFillMask_LineMaskStyle.LINE_MASK_STYLE_FULL_WIDTH:
      return "LINE_MASK_STYLE_FULL_WIDTH";
    case Graphics_Text_LineFillMask_LineMaskStyle.LINE_MASK_STYLE_LINE_WIDTH:
      return "LINE_MASK_STYLE_LINE_WIDTH";
    case Graphics_Text_LineFillMask_LineMaskStyle.LINE_MASK_STYLE_MAX_LINE_WIDTH:
      return "LINE_MASK_STYLE_MAX_LINE_WIDTH";
    case Graphics_Text_LineFillMask_LineMaskStyle.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Graphics_Text_GradientFill {
  gradient: Graphics_Gradient | undefined;
  stretchToDocumentBounds: boolean;
}

export interface Graphics_Text_ChordPro {
  enabled: boolean;
  notation: Graphics_Text_ChordPro_Notation;
  color: Color | undefined;
}

export enum Graphics_Text_ChordPro_Notation {
  NOTATION_CHORDS = 0,
  NOTATION_NUMBERS = 1,
  NOTATION_NUMERALS = 2,
  NOTATION_DO_RE_MI = 3,
  UNRECOGNIZED = -1,
}

export function graphics_Text_ChordPro_NotationFromJSON(object: any): Graphics_Text_ChordPro_Notation {
  switch (object) {
    case 0:
    case "NOTATION_CHORDS":
      return Graphics_Text_ChordPro_Notation.NOTATION_CHORDS;
    case 1:
    case "NOTATION_NUMBERS":
      return Graphics_Text_ChordPro_Notation.NOTATION_NUMBERS;
    case 2:
    case "NOTATION_NUMERALS":
      return Graphics_Text_ChordPro_Notation.NOTATION_NUMERALS;
    case 3:
    case "NOTATION_DO_RE_MI":
      return Graphics_Text_ChordPro_Notation.NOTATION_DO_RE_MI;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Text_ChordPro_Notation.UNRECOGNIZED;
  }
}

export function graphics_Text_ChordPro_NotationToJSON(object: Graphics_Text_ChordPro_Notation): string {
  switch (object) {
    case Graphics_Text_ChordPro_Notation.NOTATION_CHORDS:
      return "NOTATION_CHORDS";
    case Graphics_Text_ChordPro_Notation.NOTATION_NUMBERS:
      return "NOTATION_NUMBERS";
    case Graphics_Text_ChordPro_Notation.NOTATION_NUMERALS:
      return "NOTATION_NUMERALS";
    case Graphics_Text_ChordPro_Notation.NOTATION_DO_RE_MI:
      return "NOTATION_DO_RE_MI";
    case Graphics_Text_ChordPro_Notation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Graphics_Text_Attributes {
  font: Graphics_Text_Attributes_Font | undefined;
  capitalization: Graphics_Text_Attributes_Capitalization;
  underlineStyle: Graphics_Text_Attributes_Underline | undefined;
  underlineColor: Color | undefined;
  paragraphStyle: Graphics_Text_Attributes_Paragraph | undefined;
  kerning: number;
  superscript: number;
  strikethroughStyle: Graphics_Text_Attributes_Underline | undefined;
  strikethroughColor: Color | undefined;
  strokeWidth: number;
  strokeColor: Color | undefined;
  customAttributes: Graphics_Text_Attributes_CustomAttribute[];
  backgroundColor: Color | undefined;
  textSolidFill?: Color | undefined;
  textGradientFill?: Graphics_Text_GradientFill | undefined;
}

export enum Graphics_Text_Attributes_Capitalization {
  CAPITALIZATION_NONE = 0,
  CAPITALIZATION_ALL_CAPS = 1,
  CAPITALIZATION_SMALL_CAPS = 2,
  CAPITALIZATION_TITLE_CASE = 3,
  CAPITALIZATION_START_CASE = 4,
  UNRECOGNIZED = -1,
}

export function graphics_Text_Attributes_CapitalizationFromJSON(object: any): Graphics_Text_Attributes_Capitalization {
  switch (object) {
    case 0:
    case "CAPITALIZATION_NONE":
      return Graphics_Text_Attributes_Capitalization.CAPITALIZATION_NONE;
    case 1:
    case "CAPITALIZATION_ALL_CAPS":
      return Graphics_Text_Attributes_Capitalization.CAPITALIZATION_ALL_CAPS;
    case 2:
    case "CAPITALIZATION_SMALL_CAPS":
      return Graphics_Text_Attributes_Capitalization.CAPITALIZATION_SMALL_CAPS;
    case 3:
    case "CAPITALIZATION_TITLE_CASE":
      return Graphics_Text_Attributes_Capitalization.CAPITALIZATION_TITLE_CASE;
    case 4:
    case "CAPITALIZATION_START_CASE":
      return Graphics_Text_Attributes_Capitalization.CAPITALIZATION_START_CASE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Text_Attributes_Capitalization.UNRECOGNIZED;
  }
}

export function graphics_Text_Attributes_CapitalizationToJSON(object: Graphics_Text_Attributes_Capitalization): string {
  switch (object) {
    case Graphics_Text_Attributes_Capitalization.CAPITALIZATION_NONE:
      return "CAPITALIZATION_NONE";
    case Graphics_Text_Attributes_Capitalization.CAPITALIZATION_ALL_CAPS:
      return "CAPITALIZATION_ALL_CAPS";
    case Graphics_Text_Attributes_Capitalization.CAPITALIZATION_SMALL_CAPS:
      return "CAPITALIZATION_SMALL_CAPS";
    case Graphics_Text_Attributes_Capitalization.CAPITALIZATION_TITLE_CASE:
      return "CAPITALIZATION_TITLE_CASE";
    case Graphics_Text_Attributes_Capitalization.CAPITALIZATION_START_CASE:
      return "CAPITALIZATION_START_CASE";
    case Graphics_Text_Attributes_Capitalization.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Graphics_Text_Attributes_Font {
  name: string;
  size: number;
  italic: boolean;
  bold: boolean;
  family: string;
  face: string;
}

export interface Graphics_Text_Attributes_Underline {
  style: Graphics_Text_Attributes_Underline_Style;
  pattern: Graphics_Text_Attributes_Underline_Pattern;
  byWord: boolean;
}

export enum Graphics_Text_Attributes_Underline_Style {
  STYLE_NONE = 0,
  STYLE_SINGLE = 1,
  STYLE_THICK = 2,
  STYLE_DOUBLE = 3,
  UNRECOGNIZED = -1,
}

export function graphics_Text_Attributes_Underline_StyleFromJSON(
  object: any,
): Graphics_Text_Attributes_Underline_Style {
  switch (object) {
    case 0:
    case "STYLE_NONE":
      return Graphics_Text_Attributes_Underline_Style.STYLE_NONE;
    case 1:
    case "STYLE_SINGLE":
      return Graphics_Text_Attributes_Underline_Style.STYLE_SINGLE;
    case 2:
    case "STYLE_THICK":
      return Graphics_Text_Attributes_Underline_Style.STYLE_THICK;
    case 3:
    case "STYLE_DOUBLE":
      return Graphics_Text_Attributes_Underline_Style.STYLE_DOUBLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Text_Attributes_Underline_Style.UNRECOGNIZED;
  }
}

export function graphics_Text_Attributes_Underline_StyleToJSON(
  object: Graphics_Text_Attributes_Underline_Style,
): string {
  switch (object) {
    case Graphics_Text_Attributes_Underline_Style.STYLE_NONE:
      return "STYLE_NONE";
    case Graphics_Text_Attributes_Underline_Style.STYLE_SINGLE:
      return "STYLE_SINGLE";
    case Graphics_Text_Attributes_Underline_Style.STYLE_THICK:
      return "STYLE_THICK";
    case Graphics_Text_Attributes_Underline_Style.STYLE_DOUBLE:
      return "STYLE_DOUBLE";
    case Graphics_Text_Attributes_Underline_Style.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Graphics_Text_Attributes_Underline_Pattern {
  PATTERN_SOLID = 0,
  PATTERN_DOT = 1,
  PATTERN_DASH = 2,
  PATTERN_DASH_DOT = 3,
  PATTERN_DASH_DOT_DOT = 4,
  UNRECOGNIZED = -1,
}

export function graphics_Text_Attributes_Underline_PatternFromJSON(
  object: any,
): Graphics_Text_Attributes_Underline_Pattern {
  switch (object) {
    case 0:
    case "PATTERN_SOLID":
      return Graphics_Text_Attributes_Underline_Pattern.PATTERN_SOLID;
    case 1:
    case "PATTERN_DOT":
      return Graphics_Text_Attributes_Underline_Pattern.PATTERN_DOT;
    case 2:
    case "PATTERN_DASH":
      return Graphics_Text_Attributes_Underline_Pattern.PATTERN_DASH;
    case 3:
    case "PATTERN_DASH_DOT":
      return Graphics_Text_Attributes_Underline_Pattern.PATTERN_DASH_DOT;
    case 4:
    case "PATTERN_DASH_DOT_DOT":
      return Graphics_Text_Attributes_Underline_Pattern.PATTERN_DASH_DOT_DOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Text_Attributes_Underline_Pattern.UNRECOGNIZED;
  }
}

export function graphics_Text_Attributes_Underline_PatternToJSON(
  object: Graphics_Text_Attributes_Underline_Pattern,
): string {
  switch (object) {
    case Graphics_Text_Attributes_Underline_Pattern.PATTERN_SOLID:
      return "PATTERN_SOLID";
    case Graphics_Text_Attributes_Underline_Pattern.PATTERN_DOT:
      return "PATTERN_DOT";
    case Graphics_Text_Attributes_Underline_Pattern.PATTERN_DASH:
      return "PATTERN_DASH";
    case Graphics_Text_Attributes_Underline_Pattern.PATTERN_DASH_DOT:
      return "PATTERN_DASH_DOT";
    case Graphics_Text_Attributes_Underline_Pattern.PATTERN_DASH_DOT_DOT:
      return "PATTERN_DASH_DOT_DOT";
    case Graphics_Text_Attributes_Underline_Pattern.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Graphics_Text_Attributes_Paragraph {
  alignment: Graphics_Text_Attributes_Paragraph_Alignment;
  firstLineHeadIndent: number;
  headIndent: number;
  tailIndent: number;
  lineHeightMultiple: number;
  maximumLineHeight: number;
  minimumLineHeight: number;
  lineSpacing: number;
  paragraphSpacing: number;
  paragraphSpacingBefore: number;
  tabStops: Graphics_Text_Attributes_Paragraph_TabStop[];
  defaultTabInterval: number;
  textList: Graphics_Text_Attributes_Paragraph_TextList | undefined;
  textLists: Graphics_Text_Attributes_Paragraph_TextList[];
}

export enum Graphics_Text_Attributes_Paragraph_Alignment {
  ALIGNMENT_LEFT = 0,
  ALIGNMENT_RIGHT = 1,
  ALIGNMENT_CENTER = 2,
  ALIGNMENT_JUSTIFIED = 3,
  ALIGNMENT_NATURAL = 4,
  UNRECOGNIZED = -1,
}

export function graphics_Text_Attributes_Paragraph_AlignmentFromJSON(
  object: any,
): Graphics_Text_Attributes_Paragraph_Alignment {
  switch (object) {
    case 0:
    case "ALIGNMENT_LEFT":
      return Graphics_Text_Attributes_Paragraph_Alignment.ALIGNMENT_LEFT;
    case 1:
    case "ALIGNMENT_RIGHT":
      return Graphics_Text_Attributes_Paragraph_Alignment.ALIGNMENT_RIGHT;
    case 2:
    case "ALIGNMENT_CENTER":
      return Graphics_Text_Attributes_Paragraph_Alignment.ALIGNMENT_CENTER;
    case 3:
    case "ALIGNMENT_JUSTIFIED":
      return Graphics_Text_Attributes_Paragraph_Alignment.ALIGNMENT_JUSTIFIED;
    case 4:
    case "ALIGNMENT_NATURAL":
      return Graphics_Text_Attributes_Paragraph_Alignment.ALIGNMENT_NATURAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Text_Attributes_Paragraph_Alignment.UNRECOGNIZED;
  }
}

export function graphics_Text_Attributes_Paragraph_AlignmentToJSON(
  object: Graphics_Text_Attributes_Paragraph_Alignment,
): string {
  switch (object) {
    case Graphics_Text_Attributes_Paragraph_Alignment.ALIGNMENT_LEFT:
      return "ALIGNMENT_LEFT";
    case Graphics_Text_Attributes_Paragraph_Alignment.ALIGNMENT_RIGHT:
      return "ALIGNMENT_RIGHT";
    case Graphics_Text_Attributes_Paragraph_Alignment.ALIGNMENT_CENTER:
      return "ALIGNMENT_CENTER";
    case Graphics_Text_Attributes_Paragraph_Alignment.ALIGNMENT_JUSTIFIED:
      return "ALIGNMENT_JUSTIFIED";
    case Graphics_Text_Attributes_Paragraph_Alignment.ALIGNMENT_NATURAL:
      return "ALIGNMENT_NATURAL";
    case Graphics_Text_Attributes_Paragraph_Alignment.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Graphics_Text_Attributes_Paragraph_TabStop {
  location: number;
  alignment: Graphics_Text_Attributes_Paragraph_TabStop_Alignment;
}

export enum Graphics_Text_Attributes_Paragraph_TabStop_Alignment {
  ALIGNMENT_LEFT = 0,
  ALIGNMENT_RIGHT = 1,
  ALIGNMENT_CENTER = 2,
  ALIGNMENT_JUSTIFIED = 3,
  ALIGNMENT_NATURAL = 4,
  UNRECOGNIZED = -1,
}

export function graphics_Text_Attributes_Paragraph_TabStop_AlignmentFromJSON(
  object: any,
): Graphics_Text_Attributes_Paragraph_TabStop_Alignment {
  switch (object) {
    case 0:
    case "ALIGNMENT_LEFT":
      return Graphics_Text_Attributes_Paragraph_TabStop_Alignment.ALIGNMENT_LEFT;
    case 1:
    case "ALIGNMENT_RIGHT":
      return Graphics_Text_Attributes_Paragraph_TabStop_Alignment.ALIGNMENT_RIGHT;
    case 2:
    case "ALIGNMENT_CENTER":
      return Graphics_Text_Attributes_Paragraph_TabStop_Alignment.ALIGNMENT_CENTER;
    case 3:
    case "ALIGNMENT_JUSTIFIED":
      return Graphics_Text_Attributes_Paragraph_TabStop_Alignment.ALIGNMENT_JUSTIFIED;
    case 4:
    case "ALIGNMENT_NATURAL":
      return Graphics_Text_Attributes_Paragraph_TabStop_Alignment.ALIGNMENT_NATURAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Text_Attributes_Paragraph_TabStop_Alignment.UNRECOGNIZED;
  }
}

export function graphics_Text_Attributes_Paragraph_TabStop_AlignmentToJSON(
  object: Graphics_Text_Attributes_Paragraph_TabStop_Alignment,
): string {
  switch (object) {
    case Graphics_Text_Attributes_Paragraph_TabStop_Alignment.ALIGNMENT_LEFT:
      return "ALIGNMENT_LEFT";
    case Graphics_Text_Attributes_Paragraph_TabStop_Alignment.ALIGNMENT_RIGHT:
      return "ALIGNMENT_RIGHT";
    case Graphics_Text_Attributes_Paragraph_TabStop_Alignment.ALIGNMENT_CENTER:
      return "ALIGNMENT_CENTER";
    case Graphics_Text_Attributes_Paragraph_TabStop_Alignment.ALIGNMENT_JUSTIFIED:
      return "ALIGNMENT_JUSTIFIED";
    case Graphics_Text_Attributes_Paragraph_TabStop_Alignment.ALIGNMENT_NATURAL:
      return "ALIGNMENT_NATURAL";
    case Graphics_Text_Attributes_Paragraph_TabStop_Alignment.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Graphics_Text_Attributes_Paragraph_TextList {
  isEnabled: boolean;
  numberType: Graphics_Text_Attributes_Paragraph_TextList_NumberType;
  prefix: string;
  postfix: string;
  startingNumber: number;
}

export enum Graphics_Text_Attributes_Paragraph_TextList_NumberType {
  NUMBER_TYPE_BOX = 0,
  NUMBER_TYPE_CHECK = 1,
  NUMBER_TYPE_CIRCLE = 2,
  NUMBER_TYPE_DIAMOND = 3,
  NUMBER_TYPE_DISC = 4,
  NUMBER_TYPE_HYPHEN = 5,
  NUMBER_TYPE_SQUARE = 6,
  NUMBER_TYPE_DECIMAL = 7,
  NUMBER_TYPE_LOWERCASE_ALPHA = 8,
  NUMBER_TYPE_UPPERCASE_ALPHA = 9,
  NUMBER_TYPE_LOWERCASE_ROMAN = 10,
  NUMBER_TYPE_UPPERCASE_ROMAN = 11,
  UNRECOGNIZED = -1,
}

export function graphics_Text_Attributes_Paragraph_TextList_NumberTypeFromJSON(
  object: any,
): Graphics_Text_Attributes_Paragraph_TextList_NumberType {
  switch (object) {
    case 0:
    case "NUMBER_TYPE_BOX":
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_BOX;
    case 1:
    case "NUMBER_TYPE_CHECK":
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_CHECK;
    case 2:
    case "NUMBER_TYPE_CIRCLE":
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_CIRCLE;
    case 3:
    case "NUMBER_TYPE_DIAMOND":
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_DIAMOND;
    case 4:
    case "NUMBER_TYPE_DISC":
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_DISC;
    case 5:
    case "NUMBER_TYPE_HYPHEN":
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_HYPHEN;
    case 6:
    case "NUMBER_TYPE_SQUARE":
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_SQUARE;
    case 7:
    case "NUMBER_TYPE_DECIMAL":
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_DECIMAL;
    case 8:
    case "NUMBER_TYPE_LOWERCASE_ALPHA":
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_LOWERCASE_ALPHA;
    case 9:
    case "NUMBER_TYPE_UPPERCASE_ALPHA":
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_UPPERCASE_ALPHA;
    case 10:
    case "NUMBER_TYPE_LOWERCASE_ROMAN":
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_LOWERCASE_ROMAN;
    case 11:
    case "NUMBER_TYPE_UPPERCASE_ROMAN":
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_UPPERCASE_ROMAN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.UNRECOGNIZED;
  }
}

export function graphics_Text_Attributes_Paragraph_TextList_NumberTypeToJSON(
  object: Graphics_Text_Attributes_Paragraph_TextList_NumberType,
): string {
  switch (object) {
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_BOX:
      return "NUMBER_TYPE_BOX";
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_CHECK:
      return "NUMBER_TYPE_CHECK";
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_CIRCLE:
      return "NUMBER_TYPE_CIRCLE";
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_DIAMOND:
      return "NUMBER_TYPE_DIAMOND";
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_DISC:
      return "NUMBER_TYPE_DISC";
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_HYPHEN:
      return "NUMBER_TYPE_HYPHEN";
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_SQUARE:
      return "NUMBER_TYPE_SQUARE";
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_DECIMAL:
      return "NUMBER_TYPE_DECIMAL";
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_LOWERCASE_ALPHA:
      return "NUMBER_TYPE_LOWERCASE_ALPHA";
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_UPPERCASE_ALPHA:
      return "NUMBER_TYPE_UPPERCASE_ALPHA";
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_LOWERCASE_ROMAN:
      return "NUMBER_TYPE_LOWERCASE_ROMAN";
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_UPPERCASE_ROMAN:
      return "NUMBER_TYPE_UPPERCASE_ROMAN";
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Graphics_Text_Attributes_CustomAttribute {
  range: IntRange | undefined;
  capitalization?: Graphics_Text_Attributes_CustomAttribute_Capitalization | undefined;
  originalFontSize?: number | undefined;
  fontScaleFactor?: number | undefined;
  textGradientFill?: Graphics_Text_GradientFill | undefined;
  shouldPreserveForegroundColor?: boolean | undefined;
  chord?: string | undefined;
}

export enum Graphics_Text_Attributes_CustomAttribute_Capitalization {
  CAPITALIZATION_NONE = 0,
  CAPITALIZATION_ALL_CAPS = 1,
  CAPITALIZATION_SMALL_CAPS = 2,
  CAPITALIZATION_TITLE_CASE = 3,
  CAPITALIZATION_START_CASE = 4,
  UNRECOGNIZED = -1,
}

export function graphics_Text_Attributes_CustomAttribute_CapitalizationFromJSON(
  object: any,
): Graphics_Text_Attributes_CustomAttribute_Capitalization {
  switch (object) {
    case 0:
    case "CAPITALIZATION_NONE":
      return Graphics_Text_Attributes_CustomAttribute_Capitalization.CAPITALIZATION_NONE;
    case 1:
    case "CAPITALIZATION_ALL_CAPS":
      return Graphics_Text_Attributes_CustomAttribute_Capitalization.CAPITALIZATION_ALL_CAPS;
    case 2:
    case "CAPITALIZATION_SMALL_CAPS":
      return Graphics_Text_Attributes_CustomAttribute_Capitalization.CAPITALIZATION_SMALL_CAPS;
    case 3:
    case "CAPITALIZATION_TITLE_CASE":
      return Graphics_Text_Attributes_CustomAttribute_Capitalization.CAPITALIZATION_TITLE_CASE;
    case 4:
    case "CAPITALIZATION_START_CASE":
      return Graphics_Text_Attributes_CustomAttribute_Capitalization.CAPITALIZATION_START_CASE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Graphics_Text_Attributes_CustomAttribute_Capitalization.UNRECOGNIZED;
  }
}

export function graphics_Text_Attributes_CustomAttribute_CapitalizationToJSON(
  object: Graphics_Text_Attributes_CustomAttribute_Capitalization,
): string {
  switch (object) {
    case Graphics_Text_Attributes_CustomAttribute_Capitalization.CAPITALIZATION_NONE:
      return "CAPITALIZATION_NONE";
    case Graphics_Text_Attributes_CustomAttribute_Capitalization.CAPITALIZATION_ALL_CAPS:
      return "CAPITALIZATION_ALL_CAPS";
    case Graphics_Text_Attributes_CustomAttribute_Capitalization.CAPITALIZATION_SMALL_CAPS:
      return "CAPITALIZATION_SMALL_CAPS";
    case Graphics_Text_Attributes_CustomAttribute_Capitalization.CAPITALIZATION_TITLE_CASE:
      return "CAPITALIZATION_TITLE_CASE";
    case Graphics_Text_Attributes_CustomAttribute_Capitalization.CAPITALIZATION_START_CASE:
      return "CAPITALIZATION_START_CASE";
    case Graphics_Text_Attributes_CustomAttribute_Capitalization.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Media {
  uuid: UUID | undefined;
  url: URL | undefined;
  metadata: Media_Metadata | undefined;
  audio?: Media_AudioTypeProperties | undefined;
  image?: Media_ImageTypeProperties | undefined;
  video?: Media_VideoTypeProperties | undefined;
  liveVideo?: Media_LiveVideoTypeProperties | undefined;
  webContent?: Media_WebContentTypeProperties | undefined;
}

export interface Media_Metadata {
  manufactureName: string;
  manufactureUrl: URL | undefined;
  information: string;
  artist: string;
  format: string;
}

export interface Media_VideoDevice {
  type: Media_VideoDevice_Type;
  name: string;
  uniqueId: string;
  modelId: string;
  formatIndex: number;
  audioRouting: DigitalAudio_Device_Routing | undefined;
}

export enum Media_VideoDevice_Type {
  TYPE_GENERIC = 0,
  TYPE_DIRECTSHOW = 1,
  TYPE_BLACKMAGIC = 2,
  TYPE_AJA = 3,
  TYPE_AV = 4,
  TYPE_SYPHON = 5,
  TYPE_NDI = 6,
  TYPE_BLUEFISH = 7,
  UNRECOGNIZED = -1,
}

export function media_VideoDevice_TypeFromJSON(object: any): Media_VideoDevice_Type {
  switch (object) {
    case 0:
    case "TYPE_GENERIC":
      return Media_VideoDevice_Type.TYPE_GENERIC;
    case 1:
    case "TYPE_DIRECTSHOW":
      return Media_VideoDevice_Type.TYPE_DIRECTSHOW;
    case 2:
    case "TYPE_BLACKMAGIC":
      return Media_VideoDevice_Type.TYPE_BLACKMAGIC;
    case 3:
    case "TYPE_AJA":
      return Media_VideoDevice_Type.TYPE_AJA;
    case 4:
    case "TYPE_AV":
      return Media_VideoDevice_Type.TYPE_AV;
    case 5:
    case "TYPE_SYPHON":
      return Media_VideoDevice_Type.TYPE_SYPHON;
    case 6:
    case "TYPE_NDI":
      return Media_VideoDevice_Type.TYPE_NDI;
    case 7:
    case "TYPE_BLUEFISH":
      return Media_VideoDevice_Type.TYPE_BLUEFISH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Media_VideoDevice_Type.UNRECOGNIZED;
  }
}

export function media_VideoDevice_TypeToJSON(object: Media_VideoDevice_Type): string {
  switch (object) {
    case Media_VideoDevice_Type.TYPE_GENERIC:
      return "TYPE_GENERIC";
    case Media_VideoDevice_Type.TYPE_DIRECTSHOW:
      return "TYPE_DIRECTSHOW";
    case Media_VideoDevice_Type.TYPE_BLACKMAGIC:
      return "TYPE_BLACKMAGIC";
    case Media_VideoDevice_Type.TYPE_AJA:
      return "TYPE_AJA";
    case Media_VideoDevice_Type.TYPE_AV:
      return "TYPE_AV";
    case Media_VideoDevice_Type.TYPE_SYPHON:
      return "TYPE_SYPHON";
    case Media_VideoDevice_Type.TYPE_NDI:
      return "TYPE_NDI";
    case Media_VideoDevice_Type.TYPE_BLUEFISH:
      return "TYPE_BLUEFISH";
    case Media_VideoDevice_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Media_AudioDevice {
  name: string;
  uniqueId: string;
  modelId: string;
  channelCount: number;
}

export interface Media_Audio {
}

export interface Media_Audio_Channel {
  index: number;
  muted: boolean;
  volume: number;
  compressLimit: boolean;
  outputs: Media_Audio_Channel_Output[];
}

export interface Media_Audio_Channel_Output {
  channelIndex: number;
}

export interface Media_AudioProperties {
  volume: number;
  audioChannels: Media_Audio_Channel[];
  isCustomMapping: boolean;
}

export interface Media_TransportProperties {
  playRate: number;
  inPoint: number;
  outPoint: number;
  fadeInDuration: number;
  fadeOutDuration: number;
  shouldFadeIn: boolean;
  shouldFadeOut: boolean;
  endPoint: number;
  playbackBehavior: Media_TransportProperties_PlaybackBehavior;
  loopTime: number;
  timesToLoop: number;
}

export enum Media_TransportProperties_PlaybackBehavior {
  PLAYBACK_BEHAVIOR_STOP = 0,
  PLAYBACK_BEHAVIOR_LOOP = 1,
  PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT = 2,
  PLAYBACK_BEHAVIOR_LOOP_FOR_TIME = 3,
  UNRECOGNIZED = -1,
}

export function media_TransportProperties_PlaybackBehaviorFromJSON(
  object: any,
): Media_TransportProperties_PlaybackBehavior {
  switch (object) {
    case 0:
    case "PLAYBACK_BEHAVIOR_STOP":
      return Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_STOP;
    case 1:
    case "PLAYBACK_BEHAVIOR_LOOP":
      return Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP;
    case 2:
    case "PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT":
      return Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT;
    case 3:
    case "PLAYBACK_BEHAVIOR_LOOP_FOR_TIME":
      return Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Media_TransportProperties_PlaybackBehavior.UNRECOGNIZED;
  }
}

export function media_TransportProperties_PlaybackBehaviorToJSON(
  object: Media_TransportProperties_PlaybackBehavior,
): string {
  switch (object) {
    case Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_STOP:
      return "PLAYBACK_BEHAVIOR_STOP";
    case Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP:
      return "PLAYBACK_BEHAVIOR_LOOP";
    case Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT:
      return "PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT";
    case Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_TIME:
      return "PLAYBACK_BEHAVIOR_LOOP_FOR_TIME";
    case Media_TransportProperties_PlaybackBehavior.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Media_DrawingProperties {
  scaleBehavior: Media_DrawingProperties_ScaleBehavior;
  scaleAlignment: Media_DrawingProperties_ScaleAlignment;
  flippedHorizontally: boolean;
  flippedVertically: boolean;
  naturalSize: Graphics_Size | undefined;
  customImageRotation: number;
  customImageBounds: Graphics_Rect | undefined;
  customImageAspectLocked: boolean;
  alphaInverted: boolean;
  nativeRotation: Media_DrawingProperties_NativeRotationType;
  selectedEffectPresetUuid: UUID | undefined;
  effects: Effect[];
  cropEnable: boolean;
  cropInsets: Graphics_EdgeInsets | undefined;
}

export enum Media_DrawingProperties_ScaleBehavior {
  SCALE_BEHAVIOR_FIT = 0,
  SCALE_BEHAVIOR_FILL = 1,
  SCALE_BEHAVIOR_STRETCH = 2,
  SCALE_BEHAVIOR_CUSTOM = 3,
  UNRECOGNIZED = -1,
}

export function media_DrawingProperties_ScaleBehaviorFromJSON(object: any): Media_DrawingProperties_ScaleBehavior {
  switch (object) {
    case 0:
    case "SCALE_BEHAVIOR_FIT":
      return Media_DrawingProperties_ScaleBehavior.SCALE_BEHAVIOR_FIT;
    case 1:
    case "SCALE_BEHAVIOR_FILL":
      return Media_DrawingProperties_ScaleBehavior.SCALE_BEHAVIOR_FILL;
    case 2:
    case "SCALE_BEHAVIOR_STRETCH":
      return Media_DrawingProperties_ScaleBehavior.SCALE_BEHAVIOR_STRETCH;
    case 3:
    case "SCALE_BEHAVIOR_CUSTOM":
      return Media_DrawingProperties_ScaleBehavior.SCALE_BEHAVIOR_CUSTOM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Media_DrawingProperties_ScaleBehavior.UNRECOGNIZED;
  }
}

export function media_DrawingProperties_ScaleBehaviorToJSON(object: Media_DrawingProperties_ScaleBehavior): string {
  switch (object) {
    case Media_DrawingProperties_ScaleBehavior.SCALE_BEHAVIOR_FIT:
      return "SCALE_BEHAVIOR_FIT";
    case Media_DrawingProperties_ScaleBehavior.SCALE_BEHAVIOR_FILL:
      return "SCALE_BEHAVIOR_FILL";
    case Media_DrawingProperties_ScaleBehavior.SCALE_BEHAVIOR_STRETCH:
      return "SCALE_BEHAVIOR_STRETCH";
    case Media_DrawingProperties_ScaleBehavior.SCALE_BEHAVIOR_CUSTOM:
      return "SCALE_BEHAVIOR_CUSTOM";
    case Media_DrawingProperties_ScaleBehavior.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Media_DrawingProperties_ScaleAlignment {
  SCALE_ALIGNMENT_MIDDLE_CENTER = 0,
  SCALE_ALIGNMENT_TOP_LEFT = 1,
  SCALE_ALIGNMENT_TOP_CENTER = 2,
  SCALE_ALIGNMENT_TOP_RIGHT = 3,
  SCALE_ALIGNMENT_MIDDLE_RIGHT = 4,
  SCALE_ALIGNMENT_BOTTOM_RIGHT = 5,
  SCALE_ALIGNMENT_BOTTOM_CENTER = 6,
  SCALE_ALIGNMENT_BOTTOM_LEFT = 7,
  SCALE_ALIGNMENT_MIDDLE_LEFT = 8,
  UNRECOGNIZED = -1,
}

export function media_DrawingProperties_ScaleAlignmentFromJSON(object: any): Media_DrawingProperties_ScaleAlignment {
  switch (object) {
    case 0:
    case "SCALE_ALIGNMENT_MIDDLE_CENTER":
      return Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_CENTER;
    case 1:
    case "SCALE_ALIGNMENT_TOP_LEFT":
      return Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_TOP_LEFT;
    case 2:
    case "SCALE_ALIGNMENT_TOP_CENTER":
      return Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_TOP_CENTER;
    case 3:
    case "SCALE_ALIGNMENT_TOP_RIGHT":
      return Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_TOP_RIGHT;
    case 4:
    case "SCALE_ALIGNMENT_MIDDLE_RIGHT":
      return Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_RIGHT;
    case 5:
    case "SCALE_ALIGNMENT_BOTTOM_RIGHT":
      return Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_RIGHT;
    case 6:
    case "SCALE_ALIGNMENT_BOTTOM_CENTER":
      return Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_CENTER;
    case 7:
    case "SCALE_ALIGNMENT_BOTTOM_LEFT":
      return Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_LEFT;
    case 8:
    case "SCALE_ALIGNMENT_MIDDLE_LEFT":
      return Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_LEFT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Media_DrawingProperties_ScaleAlignment.UNRECOGNIZED;
  }
}

export function media_DrawingProperties_ScaleAlignmentToJSON(object: Media_DrawingProperties_ScaleAlignment): string {
  switch (object) {
    case Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_CENTER:
      return "SCALE_ALIGNMENT_MIDDLE_CENTER";
    case Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_TOP_LEFT:
      return "SCALE_ALIGNMENT_TOP_LEFT";
    case Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_TOP_CENTER:
      return "SCALE_ALIGNMENT_TOP_CENTER";
    case Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_TOP_RIGHT:
      return "SCALE_ALIGNMENT_TOP_RIGHT";
    case Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_RIGHT:
      return "SCALE_ALIGNMENT_MIDDLE_RIGHT";
    case Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_RIGHT:
      return "SCALE_ALIGNMENT_BOTTOM_RIGHT";
    case Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_CENTER:
      return "SCALE_ALIGNMENT_BOTTOM_CENTER";
    case Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_LEFT:
      return "SCALE_ALIGNMENT_BOTTOM_LEFT";
    case Media_DrawingProperties_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_LEFT:
      return "SCALE_ALIGNMENT_MIDDLE_LEFT";
    case Media_DrawingProperties_ScaleAlignment.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Media_DrawingProperties_NativeRotationType {
  NATIVE_ROTATION_TYPE_ROTATE_STANDARD = 0,
  NATIVE_ROTATION_TYPE_ROTATE_90 = 90,
  NATIVE_ROTATION_TYPE_ROTATE_180 = 180,
  NATIVE_ROTATION_TYPE_ROTATE_270 = 270,
  UNRECOGNIZED = -1,
}

export function media_DrawingProperties_NativeRotationTypeFromJSON(
  object: any,
): Media_DrawingProperties_NativeRotationType {
  switch (object) {
    case 0:
    case "NATIVE_ROTATION_TYPE_ROTATE_STANDARD":
      return Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_STANDARD;
    case 90:
    case "NATIVE_ROTATION_TYPE_ROTATE_90":
      return Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_90;
    case 180:
    case "NATIVE_ROTATION_TYPE_ROTATE_180":
      return Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_180;
    case 270:
    case "NATIVE_ROTATION_TYPE_ROTATE_270":
      return Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_270;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Media_DrawingProperties_NativeRotationType.UNRECOGNIZED;
  }
}

export function media_DrawingProperties_NativeRotationTypeToJSON(
  object: Media_DrawingProperties_NativeRotationType,
): string {
  switch (object) {
    case Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_STANDARD:
      return "NATIVE_ROTATION_TYPE_ROTATE_STANDARD";
    case Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_90:
      return "NATIVE_ROTATION_TYPE_ROTATE_90";
    case Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_180:
      return "NATIVE_ROTATION_TYPE_ROTATE_180";
    case Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_270:
      return "NATIVE_ROTATION_TYPE_ROTATE_270";
    case Media_DrawingProperties_NativeRotationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Media_VideoProperties {
  frameRate: number;
  fieldType: Media_VideoProperties_FieldType;
  thumbnailPosition: number;
  endBehavior: Media_VideoProperties_EndBehavior;
  softLoop: boolean;
  softLoopDuration: number;
}

export enum Media_VideoProperties_FieldType {
  FIELD_TYPE_UNKNOWN = 0,
  FIELD_TYPE_PROGRESSIVE = 1,
  FIELD_TYPE_INTERLACED_UPPER_FIRST = 2,
  FIELD_TYPE_INTERLACED_LOWER_FIRST = 3,
  UNRECOGNIZED = -1,
}

export function media_VideoProperties_FieldTypeFromJSON(object: any): Media_VideoProperties_FieldType {
  switch (object) {
    case 0:
    case "FIELD_TYPE_UNKNOWN":
      return Media_VideoProperties_FieldType.FIELD_TYPE_UNKNOWN;
    case 1:
    case "FIELD_TYPE_PROGRESSIVE":
      return Media_VideoProperties_FieldType.FIELD_TYPE_PROGRESSIVE;
    case 2:
    case "FIELD_TYPE_INTERLACED_UPPER_FIRST":
      return Media_VideoProperties_FieldType.FIELD_TYPE_INTERLACED_UPPER_FIRST;
    case 3:
    case "FIELD_TYPE_INTERLACED_LOWER_FIRST":
      return Media_VideoProperties_FieldType.FIELD_TYPE_INTERLACED_LOWER_FIRST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Media_VideoProperties_FieldType.UNRECOGNIZED;
  }
}

export function media_VideoProperties_FieldTypeToJSON(object: Media_VideoProperties_FieldType): string {
  switch (object) {
    case Media_VideoProperties_FieldType.FIELD_TYPE_UNKNOWN:
      return "FIELD_TYPE_UNKNOWN";
    case Media_VideoProperties_FieldType.FIELD_TYPE_PROGRESSIVE:
      return "FIELD_TYPE_PROGRESSIVE";
    case Media_VideoProperties_FieldType.FIELD_TYPE_INTERLACED_UPPER_FIRST:
      return "FIELD_TYPE_INTERLACED_UPPER_FIRST";
    case Media_VideoProperties_FieldType.FIELD_TYPE_INTERLACED_LOWER_FIRST:
      return "FIELD_TYPE_INTERLACED_LOWER_FIRST";
    case Media_VideoProperties_FieldType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Media_VideoProperties_EndBehavior {
  END_BEHAVIOR_STOP = 0,
  END_BEHAVIOR_STOP_ON_BLACK = 1,
  END_BEHAVIOR_STOP_ON_CLEAR = 2,
  END_BEHAVIOR_FADE_TO_BLACK = 3,
  END_BEHAVIOR_FADE_TO_CLEAR = 4,
  UNRECOGNIZED = -1,
}

export function media_VideoProperties_EndBehaviorFromJSON(object: any): Media_VideoProperties_EndBehavior {
  switch (object) {
    case 0:
    case "END_BEHAVIOR_STOP":
      return Media_VideoProperties_EndBehavior.END_BEHAVIOR_STOP;
    case 1:
    case "END_BEHAVIOR_STOP_ON_BLACK":
      return Media_VideoProperties_EndBehavior.END_BEHAVIOR_STOP_ON_BLACK;
    case 2:
    case "END_BEHAVIOR_STOP_ON_CLEAR":
      return Media_VideoProperties_EndBehavior.END_BEHAVIOR_STOP_ON_CLEAR;
    case 3:
    case "END_BEHAVIOR_FADE_TO_BLACK":
      return Media_VideoProperties_EndBehavior.END_BEHAVIOR_FADE_TO_BLACK;
    case 4:
    case "END_BEHAVIOR_FADE_TO_CLEAR":
      return Media_VideoProperties_EndBehavior.END_BEHAVIOR_FADE_TO_CLEAR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Media_VideoProperties_EndBehavior.UNRECOGNIZED;
  }
}

export function media_VideoProperties_EndBehaviorToJSON(object: Media_VideoProperties_EndBehavior): string {
  switch (object) {
    case Media_VideoProperties_EndBehavior.END_BEHAVIOR_STOP:
      return "END_BEHAVIOR_STOP";
    case Media_VideoProperties_EndBehavior.END_BEHAVIOR_STOP_ON_BLACK:
      return "END_BEHAVIOR_STOP_ON_BLACK";
    case Media_VideoProperties_EndBehavior.END_BEHAVIOR_STOP_ON_CLEAR:
      return "END_BEHAVIOR_STOP_ON_CLEAR";
    case Media_VideoProperties_EndBehavior.END_BEHAVIOR_FADE_TO_BLACK:
      return "END_BEHAVIOR_FADE_TO_BLACK";
    case Media_VideoProperties_EndBehavior.END_BEHAVIOR_FADE_TO_CLEAR:
      return "END_BEHAVIOR_FADE_TO_CLEAR";
    case Media_VideoProperties_EndBehavior.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Media_LiveVideoProperties {
  videoDevice: Media_VideoDevice | undefined;
  audioDevice: Media_AudioDevice | undefined;
  liveVideoIndex: number;
}

export interface Media_AudioTypeProperties {
  audio: Media_AudioProperties | undefined;
  transport: Media_TransportProperties | undefined;
}

export interface Media_ImageTypeProperties {
  drawing: Media_DrawingProperties | undefined;
}

export interface Media_VideoTypeProperties {
  drawing: Media_DrawingProperties | undefined;
  audio: Media_AudioProperties | undefined;
  transport: Media_TransportProperties | undefined;
  video: Media_VideoProperties | undefined;
}

export interface Media_LiveVideoTypeProperties {
  drawing: Media_DrawingProperties | undefined;
  audio: Media_AudioProperties | undefined;
  liveVideo: Media_LiveVideoProperties | undefined;
}

export interface Media_WebContentTypeProperties {
  drawing: Media_DrawingProperties | undefined;
  url: URL | undefined;
}

function createBaseGraphics(): Graphics {
  return {};
}

export const Graphics = {
  encode(_: Graphics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics();
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

  fromJSON(_: any): Graphics {
    return {};
  },

  toJSON(_: Graphics): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics>, I>>(_: I): Graphics {
    const message = createBaseGraphics();
    return message;
  },
};

function createBaseGraphics_Element(): Graphics_Element {
  return {
    uuid: undefined,
    name: "",
    bounds: undefined,
    rotation: 0,
    opacity: 0,
    locked: false,
    aspectRatioLocked: false,
    path: undefined,
    fill: undefined,
    stroke: undefined,
    shadow: undefined,
    feather: undefined,
    text: undefined,
    flipMode: 0,
    hidden: false,
    textLineMask: undefined,
  };
}

export const Graphics_Element = {
  encode(message: Graphics_Element, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.bounds !== undefined) {
      Graphics_Rect.encode(message.bounds, writer.uint32(26).fork()).ldelim();
    }
    if (message.rotation !== 0) {
      writer.uint32(33).double(message.rotation);
    }
    if (message.opacity !== 0) {
      writer.uint32(41).double(message.opacity);
    }
    if (message.locked === true) {
      writer.uint32(48).bool(message.locked);
    }
    if (message.aspectRatioLocked === true) {
      writer.uint32(56).bool(message.aspectRatioLocked);
    }
    if (message.path !== undefined) {
      Graphics_Path.encode(message.path, writer.uint32(66).fork()).ldelim();
    }
    if (message.fill !== undefined) {
      Graphics_Fill.encode(message.fill, writer.uint32(74).fork()).ldelim();
    }
    if (message.stroke !== undefined) {
      Graphics_Stroke.encode(message.stroke, writer.uint32(82).fork()).ldelim();
    }
    if (message.shadow !== undefined) {
      Graphics_Shadow.encode(message.shadow, writer.uint32(90).fork()).ldelim();
    }
    if (message.feather !== undefined) {
      Graphics_Feather.encode(message.feather, writer.uint32(98).fork()).ldelim();
    }
    if (message.text !== undefined) {
      Graphics_Text.encode(message.text, writer.uint32(106).fork()).ldelim();
    }
    if (message.flipMode !== 0) {
      writer.uint32(120).int32(message.flipMode);
    }
    if (message.hidden === true) {
      writer.uint32(128).bool(message.hidden);
    }
    if (message.textLineMask !== undefined) {
      Graphics_Text_LineFillMask.encode(message.textLineMask, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Element {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Element();
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
          message.bounds = Graphics_Rect.decode(reader, reader.uint32());
          break;
        case 4:
          message.rotation = reader.double();
          break;
        case 5:
          message.opacity = reader.double();
          break;
        case 6:
          message.locked = reader.bool();
          break;
        case 7:
          message.aspectRatioLocked = reader.bool();
          break;
        case 8:
          message.path = Graphics_Path.decode(reader, reader.uint32());
          break;
        case 9:
          message.fill = Graphics_Fill.decode(reader, reader.uint32());
          break;
        case 10:
          message.stroke = Graphics_Stroke.decode(reader, reader.uint32());
          break;
        case 11:
          message.shadow = Graphics_Shadow.decode(reader, reader.uint32());
          break;
        case 12:
          message.feather = Graphics_Feather.decode(reader, reader.uint32());
          break;
        case 13:
          message.text = Graphics_Text.decode(reader, reader.uint32());
          break;
        case 15:
          message.flipMode = reader.int32() as any;
          break;
        case 16:
          message.hidden = reader.bool();
          break;
        case 14:
          message.textLineMask = Graphics_Text_LineFillMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Element {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      bounds: isSet(object.bounds) ? Graphics_Rect.fromJSON(object.bounds) : undefined,
      rotation: isSet(object.rotation) ? Number(object.rotation) : 0,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
      locked: isSet(object.locked) ? Boolean(object.locked) : false,
      aspectRatioLocked: isSet(object.aspectRatioLocked) ? Boolean(object.aspectRatioLocked) : false,
      path: isSet(object.path) ? Graphics_Path.fromJSON(object.path) : undefined,
      fill: isSet(object.fill) ? Graphics_Fill.fromJSON(object.fill) : undefined,
      stroke: isSet(object.stroke) ? Graphics_Stroke.fromJSON(object.stroke) : undefined,
      shadow: isSet(object.shadow) ? Graphics_Shadow.fromJSON(object.shadow) : undefined,
      feather: isSet(object.feather) ? Graphics_Feather.fromJSON(object.feather) : undefined,
      text: isSet(object.text) ? Graphics_Text.fromJSON(object.text) : undefined,
      flipMode: isSet(object.flipMode) ? graphics_Element_FlipModeFromJSON(object.flipMode) : 0,
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
      textLineMask: isSet(object.textLineMask) ? Graphics_Text_LineFillMask.fromJSON(object.textLineMask) : undefined,
    };
  },

  toJSON(message: Graphics_Element): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.bounds !== undefined && (obj.bounds = message.bounds ? Graphics_Rect.toJSON(message.bounds) : undefined);
    message.rotation !== undefined && (obj.rotation = message.rotation);
    message.opacity !== undefined && (obj.opacity = message.opacity);
    message.locked !== undefined && (obj.locked = message.locked);
    message.aspectRatioLocked !== undefined && (obj.aspectRatioLocked = message.aspectRatioLocked);
    message.path !== undefined && (obj.path = message.path ? Graphics_Path.toJSON(message.path) : undefined);
    message.fill !== undefined && (obj.fill = message.fill ? Graphics_Fill.toJSON(message.fill) : undefined);
    message.stroke !== undefined && (obj.stroke = message.stroke ? Graphics_Stroke.toJSON(message.stroke) : undefined);
    message.shadow !== undefined && (obj.shadow = message.shadow ? Graphics_Shadow.toJSON(message.shadow) : undefined);
    message.feather !== undefined &&
      (obj.feather = message.feather ? Graphics_Feather.toJSON(message.feather) : undefined);
    message.text !== undefined && (obj.text = message.text ? Graphics_Text.toJSON(message.text) : undefined);
    message.flipMode !== undefined && (obj.flipMode = graphics_Element_FlipModeToJSON(message.flipMode));
    message.hidden !== undefined && (obj.hidden = message.hidden);
    message.textLineMask !== undefined &&
      (obj.textLineMask = message.textLineMask ? Graphics_Text_LineFillMask.toJSON(message.textLineMask) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Element>, I>>(object: I): Graphics_Element {
    const message = createBaseGraphics_Element();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    message.bounds = (object.bounds !== undefined && object.bounds !== null)
      ? Graphics_Rect.fromPartial(object.bounds)
      : undefined;
    message.rotation = object.rotation ?? 0;
    message.opacity = object.opacity ?? 0;
    message.locked = object.locked ?? false;
    message.aspectRatioLocked = object.aspectRatioLocked ?? false;
    message.path = (object.path !== undefined && object.path !== null)
      ? Graphics_Path.fromPartial(object.path)
      : undefined;
    message.fill = (object.fill !== undefined && object.fill !== null)
      ? Graphics_Fill.fromPartial(object.fill)
      : undefined;
    message.stroke = (object.stroke !== undefined && object.stroke !== null)
      ? Graphics_Stroke.fromPartial(object.stroke)
      : undefined;
    message.shadow = (object.shadow !== undefined && object.shadow !== null)
      ? Graphics_Shadow.fromPartial(object.shadow)
      : undefined;
    message.feather = (object.feather !== undefined && object.feather !== null)
      ? Graphics_Feather.fromPartial(object.feather)
      : undefined;
    message.text = (object.text !== undefined && object.text !== null)
      ? Graphics_Text.fromPartial(object.text)
      : undefined;
    message.flipMode = object.flipMode ?? 0;
    message.hidden = object.hidden ?? false;
    message.textLineMask = (object.textLineMask !== undefined && object.textLineMask !== null)
      ? Graphics_Text_LineFillMask.fromPartial(object.textLineMask)
      : undefined;
    return message;
  },
};

function createBaseGraphics_Rect(): Graphics_Rect {
  return { origin: undefined, size: undefined };
}

export const Graphics_Rect = {
  encode(message: Graphics_Rect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      Graphics_Point.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.size !== undefined) {
      Graphics_Size.encode(message.size, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Rect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Rect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.origin = Graphics_Point.decode(reader, reader.uint32());
          break;
        case 2:
          message.size = Graphics_Size.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Rect {
    return {
      origin: isSet(object.origin) ? Graphics_Point.fromJSON(object.origin) : undefined,
      size: isSet(object.size) ? Graphics_Size.fromJSON(object.size) : undefined,
    };
  },

  toJSON(message: Graphics_Rect): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? Graphics_Point.toJSON(message.origin) : undefined);
    message.size !== undefined && (obj.size = message.size ? Graphics_Size.toJSON(message.size) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Rect>, I>>(object: I): Graphics_Rect {
    const message = createBaseGraphics_Rect();
    message.origin = (object.origin !== undefined && object.origin !== null)
      ? Graphics_Point.fromPartial(object.origin)
      : undefined;
    message.size = (object.size !== undefined && object.size !== null)
      ? Graphics_Size.fromPartial(object.size)
      : undefined;
    return message;
  },
};

function createBaseGraphics_Point(): Graphics_Point {
  return { x: 0, y: 0 };
}

export const Graphics_Point = {
  encode(message: Graphics_Point, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(9).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(17).double(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Point {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Point();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.double();
          break;
        case 2:
          message.y = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Point {
    return { x: isSet(object.x) ? Number(object.x) : 0, y: isSet(object.y) ? Number(object.y) : 0 };
  },

  toJSON(message: Graphics_Point): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Point>, I>>(object: I): Graphics_Point {
    const message = createBaseGraphics_Point();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseGraphics_Size(): Graphics_Size {
  return { width: 0, height: 0 };
}

export const Graphics_Size = {
  encode(message: Graphics_Size, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(9).double(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(17).double(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Size {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Size();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.width = reader.double();
          break;
        case 2:
          message.height = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Size {
    return {
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: Graphics_Size): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Size>, I>>(object: I): Graphics_Size {
    const message = createBaseGraphics_Size();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseGraphics_EdgeInsets(): Graphics_EdgeInsets {
  return { left: 0, right: 0, top: 0, bottom: 0 };
}

export const Graphics_EdgeInsets = {
  encode(message: Graphics_EdgeInsets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.left !== 0) {
      writer.uint32(9).double(message.left);
    }
    if (message.right !== 0) {
      writer.uint32(17).double(message.right);
    }
    if (message.top !== 0) {
      writer.uint32(25).double(message.top);
    }
    if (message.bottom !== 0) {
      writer.uint32(33).double(message.bottom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_EdgeInsets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_EdgeInsets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.left = reader.double();
          break;
        case 2:
          message.right = reader.double();
          break;
        case 3:
          message.top = reader.double();
          break;
        case 4:
          message.bottom = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_EdgeInsets {
    return {
      left: isSet(object.left) ? Number(object.left) : 0,
      right: isSet(object.right) ? Number(object.right) : 0,
      top: isSet(object.top) ? Number(object.top) : 0,
      bottom: isSet(object.bottom) ? Number(object.bottom) : 0,
    };
  },

  toJSON(message: Graphics_EdgeInsets): unknown {
    const obj: any = {};
    message.left !== undefined && (obj.left = message.left);
    message.right !== undefined && (obj.right = message.right);
    message.top !== undefined && (obj.top = message.top);
    message.bottom !== undefined && (obj.bottom = message.bottom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_EdgeInsets>, I>>(object: I): Graphics_EdgeInsets {
    const message = createBaseGraphics_EdgeInsets();
    message.left = object.left ?? 0;
    message.right = object.right ?? 0;
    message.top = object.top ?? 0;
    message.bottom = object.bottom ?? 0;
    return message;
  },
};

function createBaseGraphics_Path(): Graphics_Path {
  return { closed: false, points: [], shape: undefined };
}

export const Graphics_Path = {
  encode(message: Graphics_Path, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.closed === true) {
      writer.uint32(8).bool(message.closed);
    }
    for (const v of message.points) {
      Graphics_Path_BezierPoint.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.shape !== undefined) {
      Graphics_Path_Shape.encode(message.shape, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Path {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Path();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.closed = reader.bool();
          break;
        case 2:
          message.points.push(Graphics_Path_BezierPoint.decode(reader, reader.uint32()));
          break;
        case 3:
          message.shape = Graphics_Path_Shape.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Path {
    return {
      closed: isSet(object.closed) ? Boolean(object.closed) : false,
      points: Array.isArray(object?.points) ? object.points.map((e: any) => Graphics_Path_BezierPoint.fromJSON(e)) : [],
      shape: isSet(object.shape) ? Graphics_Path_Shape.fromJSON(object.shape) : undefined,
    };
  },

  toJSON(message: Graphics_Path): unknown {
    const obj: any = {};
    message.closed !== undefined && (obj.closed = message.closed);
    if (message.points) {
      obj.points = message.points.map((e) => e ? Graphics_Path_BezierPoint.toJSON(e) : undefined);
    } else {
      obj.points = [];
    }
    message.shape !== undefined && (obj.shape = message.shape ? Graphics_Path_Shape.toJSON(message.shape) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Path>, I>>(object: I): Graphics_Path {
    const message = createBaseGraphics_Path();
    message.closed = object.closed ?? false;
    message.points = object.points?.map((e) => Graphics_Path_BezierPoint.fromPartial(e)) || [];
    message.shape = (object.shape !== undefined && object.shape !== null)
      ? Graphics_Path_Shape.fromPartial(object.shape)
      : undefined;
    return message;
  },
};

function createBaseGraphics_Path_BezierPoint(): Graphics_Path_BezierPoint {
  return { point: undefined, q0: undefined, q1: undefined, curved: false };
}

export const Graphics_Path_BezierPoint = {
  encode(message: Graphics_Path_BezierPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.point !== undefined) {
      Graphics_Point.encode(message.point, writer.uint32(10).fork()).ldelim();
    }
    if (message.q0 !== undefined) {
      Graphics_Point.encode(message.q0, writer.uint32(18).fork()).ldelim();
    }
    if (message.q1 !== undefined) {
      Graphics_Point.encode(message.q1, writer.uint32(26).fork()).ldelim();
    }
    if (message.curved === true) {
      writer.uint32(32).bool(message.curved);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Path_BezierPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Path_BezierPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.point = Graphics_Point.decode(reader, reader.uint32());
          break;
        case 2:
          message.q0 = Graphics_Point.decode(reader, reader.uint32());
          break;
        case 3:
          message.q1 = Graphics_Point.decode(reader, reader.uint32());
          break;
        case 4:
          message.curved = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Path_BezierPoint {
    return {
      point: isSet(object.point) ? Graphics_Point.fromJSON(object.point) : undefined,
      q0: isSet(object.q0) ? Graphics_Point.fromJSON(object.q0) : undefined,
      q1: isSet(object.q1) ? Graphics_Point.fromJSON(object.q1) : undefined,
      curved: isSet(object.curved) ? Boolean(object.curved) : false,
    };
  },

  toJSON(message: Graphics_Path_BezierPoint): unknown {
    const obj: any = {};
    message.point !== undefined && (obj.point = message.point ? Graphics_Point.toJSON(message.point) : undefined);
    message.q0 !== undefined && (obj.q0 = message.q0 ? Graphics_Point.toJSON(message.q0) : undefined);
    message.q1 !== undefined && (obj.q1 = message.q1 ? Graphics_Point.toJSON(message.q1) : undefined);
    message.curved !== undefined && (obj.curved = message.curved);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Path_BezierPoint>, I>>(object: I): Graphics_Path_BezierPoint {
    const message = createBaseGraphics_Path_BezierPoint();
    message.point = (object.point !== undefined && object.point !== null)
      ? Graphics_Point.fromPartial(object.point)
      : undefined;
    message.q0 = (object.q0 !== undefined && object.q0 !== null) ? Graphics_Point.fromPartial(object.q0) : undefined;
    message.q1 = (object.q1 !== undefined && object.q1 !== null) ? Graphics_Point.fromPartial(object.q1) : undefined;
    message.curved = object.curved ?? false;
    return message;
  },
};

function createBaseGraphics_Path_Shape(): Graphics_Path_Shape {
  return { type: 0, roundedRectangle: undefined, polygon: undefined, star: undefined, arrow: undefined };
}

export const Graphics_Path_Shape = {
  encode(message: Graphics_Path_Shape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.roundedRectangle !== undefined) {
      Graphics_Path_Shape_RoundedRectangle.encode(message.roundedRectangle, writer.uint32(18).fork()).ldelim();
    }
    if (message.polygon !== undefined) {
      Graphics_Path_Shape_Polygon.encode(message.polygon, writer.uint32(26).fork()).ldelim();
    }
    if (message.star !== undefined) {
      Graphics_Path_Shape_Star.encode(message.star, writer.uint32(34).fork()).ldelim();
    }
    if (message.arrow !== undefined) {
      Graphics_Path_Shape_Arrow.encode(message.arrow, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Path_Shape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Path_Shape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.roundedRectangle = Graphics_Path_Shape_RoundedRectangle.decode(reader, reader.uint32());
          break;
        case 3:
          message.polygon = Graphics_Path_Shape_Polygon.decode(reader, reader.uint32());
          break;
        case 4:
          message.star = Graphics_Path_Shape_Star.decode(reader, reader.uint32());
          break;
        case 5:
          message.arrow = Graphics_Path_Shape_Arrow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Path_Shape {
    return {
      type: isSet(object.type) ? graphics_Path_Shape_TypeFromJSON(object.type) : 0,
      roundedRectangle: isSet(object.roundedRectangle)
        ? Graphics_Path_Shape_RoundedRectangle.fromJSON(object.roundedRectangle)
        : undefined,
      polygon: isSet(object.polygon) ? Graphics_Path_Shape_Polygon.fromJSON(object.polygon) : undefined,
      star: isSet(object.star) ? Graphics_Path_Shape_Star.fromJSON(object.star) : undefined,
      arrow: isSet(object.arrow) ? Graphics_Path_Shape_Arrow.fromJSON(object.arrow) : undefined,
    };
  },

  toJSON(message: Graphics_Path_Shape): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = graphics_Path_Shape_TypeToJSON(message.type));
    message.roundedRectangle !== undefined && (obj.roundedRectangle = message.roundedRectangle
      ? Graphics_Path_Shape_RoundedRectangle.toJSON(message.roundedRectangle)
      : undefined);
    message.polygon !== undefined &&
      (obj.polygon = message.polygon ? Graphics_Path_Shape_Polygon.toJSON(message.polygon) : undefined);
    message.star !== undefined && (obj.star = message.star ? Graphics_Path_Shape_Star.toJSON(message.star) : undefined);
    message.arrow !== undefined &&
      (obj.arrow = message.arrow ? Graphics_Path_Shape_Arrow.toJSON(message.arrow) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Path_Shape>, I>>(object: I): Graphics_Path_Shape {
    const message = createBaseGraphics_Path_Shape();
    message.type = object.type ?? 0;
    message.roundedRectangle = (object.roundedRectangle !== undefined && object.roundedRectangle !== null)
      ? Graphics_Path_Shape_RoundedRectangle.fromPartial(object.roundedRectangle)
      : undefined;
    message.polygon = (object.polygon !== undefined && object.polygon !== null)
      ? Graphics_Path_Shape_Polygon.fromPartial(object.polygon)
      : undefined;
    message.star = (object.star !== undefined && object.star !== null)
      ? Graphics_Path_Shape_Star.fromPartial(object.star)
      : undefined;
    message.arrow = (object.arrow !== undefined && object.arrow !== null)
      ? Graphics_Path_Shape_Arrow.fromPartial(object.arrow)
      : undefined;
    return message;
  },
};

function createBaseGraphics_Path_Shape_RoundedRectangle(): Graphics_Path_Shape_RoundedRectangle {
  return { roundness: 0 };
}

export const Graphics_Path_Shape_RoundedRectangle = {
  encode(message: Graphics_Path_Shape_RoundedRectangle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roundness !== 0) {
      writer.uint32(9).double(message.roundness);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Path_Shape_RoundedRectangle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Path_Shape_RoundedRectangle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roundness = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Path_Shape_RoundedRectangle {
    return { roundness: isSet(object.roundness) ? Number(object.roundness) : 0 };
  },

  toJSON(message: Graphics_Path_Shape_RoundedRectangle): unknown {
    const obj: any = {};
    message.roundness !== undefined && (obj.roundness = message.roundness);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Path_Shape_RoundedRectangle>, I>>(
    object: I,
  ): Graphics_Path_Shape_RoundedRectangle {
    const message = createBaseGraphics_Path_Shape_RoundedRectangle();
    message.roundness = object.roundness ?? 0;
    return message;
  },
};

function createBaseGraphics_Path_Shape_Arrow(): Graphics_Path_Shape_Arrow {
  return { corner: undefined };
}

export const Graphics_Path_Shape_Arrow = {
  encode(message: Graphics_Path_Shape_Arrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.corner !== undefined) {
      Graphics_Point.encode(message.corner, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Path_Shape_Arrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Path_Shape_Arrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.corner = Graphics_Point.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Path_Shape_Arrow {
    return { corner: isSet(object.corner) ? Graphics_Point.fromJSON(object.corner) : undefined };
  },

  toJSON(message: Graphics_Path_Shape_Arrow): unknown {
    const obj: any = {};
    message.corner !== undefined && (obj.corner = message.corner ? Graphics_Point.toJSON(message.corner) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Path_Shape_Arrow>, I>>(object: I): Graphics_Path_Shape_Arrow {
    const message = createBaseGraphics_Path_Shape_Arrow();
    message.corner = (object.corner !== undefined && object.corner !== null)
      ? Graphics_Point.fromPartial(object.corner)
      : undefined;
    return message;
  },
};

function createBaseGraphics_Path_Shape_Polygon(): Graphics_Path_Shape_Polygon {
  return { numberSides: 0 };
}

export const Graphics_Path_Shape_Polygon = {
  encode(message: Graphics_Path_Shape_Polygon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numberSides !== 0) {
      writer.uint32(8).uint32(message.numberSides);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Path_Shape_Polygon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Path_Shape_Polygon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numberSides = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Path_Shape_Polygon {
    return { numberSides: isSet(object.numberSides) ? Number(object.numberSides) : 0 };
  },

  toJSON(message: Graphics_Path_Shape_Polygon): unknown {
    const obj: any = {};
    message.numberSides !== undefined && (obj.numberSides = Math.round(message.numberSides));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Path_Shape_Polygon>, I>>(object: I): Graphics_Path_Shape_Polygon {
    const message = createBaseGraphics_Path_Shape_Polygon();
    message.numberSides = object.numberSides ?? 0;
    return message;
  },
};

function createBaseGraphics_Path_Shape_Star(): Graphics_Path_Shape_Star {
  return { innerRadius: 0, numberPoints: 0 };
}

export const Graphics_Path_Shape_Star = {
  encode(message: Graphics_Path_Shape_Star, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.innerRadius !== 0) {
      writer.uint32(9).double(message.innerRadius);
    }
    if (message.numberPoints !== 0) {
      writer.uint32(16).uint32(message.numberPoints);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Path_Shape_Star {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Path_Shape_Star();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.innerRadius = reader.double();
          break;
        case 2:
          message.numberPoints = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Path_Shape_Star {
    return {
      innerRadius: isSet(object.innerRadius) ? Number(object.innerRadius) : 0,
      numberPoints: isSet(object.numberPoints) ? Number(object.numberPoints) : 0,
    };
  },

  toJSON(message: Graphics_Path_Shape_Star): unknown {
    const obj: any = {};
    message.innerRadius !== undefined && (obj.innerRadius = message.innerRadius);
    message.numberPoints !== undefined && (obj.numberPoints = Math.round(message.numberPoints));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Path_Shape_Star>, I>>(object: I): Graphics_Path_Shape_Star {
    const message = createBaseGraphics_Path_Shape_Star();
    message.innerRadius = object.innerRadius ?? 0;
    message.numberPoints = object.numberPoints ?? 0;
    return message;
  },
};

function createBaseGraphics_Fill(): Graphics_Fill {
  return { enable: false, color: undefined, gradient: undefined, media: undefined };
}

export const Graphics_Fill = {
  encode(message: Graphics_Fill, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable === true) {
      writer.uint32(32).bool(message.enable);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    if (message.gradient !== undefined) {
      Graphics_Gradient.encode(message.gradient, writer.uint32(18).fork()).ldelim();
    }
    if (message.media !== undefined) {
      Media.encode(message.media, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Fill {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Fill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.enable = reader.bool();
          break;
        case 1:
          message.color = Color.decode(reader, reader.uint32());
          break;
        case 2:
          message.gradient = Graphics_Gradient.decode(reader, reader.uint32());
          break;
        case 3:
          message.media = Media.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Fill {
    return {
      enable: isSet(object.enable) ? Boolean(object.enable) : false,
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      gradient: isSet(object.gradient) ? Graphics_Gradient.fromJSON(object.gradient) : undefined,
      media: isSet(object.media) ? Media.fromJSON(object.media) : undefined,
    };
  },

  toJSON(message: Graphics_Fill): unknown {
    const obj: any = {};
    message.enable !== undefined && (obj.enable = message.enable);
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.gradient !== undefined &&
      (obj.gradient = message.gradient ? Graphics_Gradient.toJSON(message.gradient) : undefined);
    message.media !== undefined && (obj.media = message.media ? Media.toJSON(message.media) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Fill>, I>>(object: I): Graphics_Fill {
    const message = createBaseGraphics_Fill();
    message.enable = object.enable ?? false;
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    message.gradient = (object.gradient !== undefined && object.gradient !== null)
      ? Graphics_Gradient.fromPartial(object.gradient)
      : undefined;
    message.media = (object.media !== undefined && object.media !== null) ? Media.fromPartial(object.media) : undefined;
    return message;
  },
};

function createBaseGraphics_Gradient(): Graphics_Gradient {
  return { type: 0, angle: 0, length: 0, stops: [] };
}

export const Graphics_Gradient = {
  encode(message: Graphics_Gradient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.angle !== 0) {
      writer.uint32(17).double(message.angle);
    }
    if (message.length !== 0) {
      writer.uint32(25).double(message.length);
    }
    for (const v of message.stops) {
      Graphics_Gradient_ColorStop.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Gradient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Gradient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.angle = reader.double();
          break;
        case 3:
          message.length = reader.double();
          break;
        case 4:
          message.stops.push(Graphics_Gradient_ColorStop.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Gradient {
    return {
      type: isSet(object.type) ? graphics_Gradient_TypeFromJSON(object.type) : 0,
      angle: isSet(object.angle) ? Number(object.angle) : 0,
      length: isSet(object.length) ? Number(object.length) : 0,
      stops: Array.isArray(object?.stops) ? object.stops.map((e: any) => Graphics_Gradient_ColorStop.fromJSON(e)) : [],
    };
  },

  toJSON(message: Graphics_Gradient): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = graphics_Gradient_TypeToJSON(message.type));
    message.angle !== undefined && (obj.angle = message.angle);
    message.length !== undefined && (obj.length = message.length);
    if (message.stops) {
      obj.stops = message.stops.map((e) => e ? Graphics_Gradient_ColorStop.toJSON(e) : undefined);
    } else {
      obj.stops = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Gradient>, I>>(object: I): Graphics_Gradient {
    const message = createBaseGraphics_Gradient();
    message.type = object.type ?? 0;
    message.angle = object.angle ?? 0;
    message.length = object.length ?? 0;
    message.stops = object.stops?.map((e) => Graphics_Gradient_ColorStop.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGraphics_Gradient_ColorStop(): Graphics_Gradient_ColorStop {
  return { color: undefined, position: 0, blendPoint: 0 };
}

export const Graphics_Gradient_ColorStop = {
  encode(message: Graphics_Gradient_ColorStop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    if (message.position !== 0) {
      writer.uint32(17).double(message.position);
    }
    if (message.blendPoint !== 0) {
      writer.uint32(25).double(message.blendPoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Gradient_ColorStop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Gradient_ColorStop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.color = Color.decode(reader, reader.uint32());
          break;
        case 2:
          message.position = reader.double();
          break;
        case 3:
          message.blendPoint = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Gradient_ColorStop {
    return {
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      position: isSet(object.position) ? Number(object.position) : 0,
      blendPoint: isSet(object.blendPoint) ? Number(object.blendPoint) : 0,
    };
  },

  toJSON(message: Graphics_Gradient_ColorStop): unknown {
    const obj: any = {};
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.position !== undefined && (obj.position = message.position);
    message.blendPoint !== undefined && (obj.blendPoint = message.blendPoint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Gradient_ColorStop>, I>>(object: I): Graphics_Gradient_ColorStop {
    const message = createBaseGraphics_Gradient_ColorStop();
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    message.position = object.position ?? 0;
    message.blendPoint = object.blendPoint ?? 0;
    return message;
  },
};

function createBaseGraphics_Shadow(): Graphics_Shadow {
  return { style: 0, angle: 0, offset: 0, radius: 0, color: undefined, opacity: 0, enable: false };
}

export const Graphics_Shadow = {
  encode(message: Graphics_Shadow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.style !== 0) {
      writer.uint32(8).int32(message.style);
    }
    if (message.angle !== 0) {
      writer.uint32(17).double(message.angle);
    }
    if (message.offset !== 0) {
      writer.uint32(25).double(message.offset);
    }
    if (message.radius !== 0) {
      writer.uint32(33).double(message.radius);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(42).fork()).ldelim();
    }
    if (message.opacity !== 0) {
      writer.uint32(49).double(message.opacity);
    }
    if (message.enable === true) {
      writer.uint32(56).bool(message.enable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Shadow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Shadow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.style = reader.int32() as any;
          break;
        case 2:
          message.angle = reader.double();
          break;
        case 3:
          message.offset = reader.double();
          break;
        case 4:
          message.radius = reader.double();
          break;
        case 5:
          message.color = Color.decode(reader, reader.uint32());
          break;
        case 6:
          message.opacity = reader.double();
          break;
        case 7:
          message.enable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Shadow {
    return {
      style: isSet(object.style) ? graphics_Shadow_StyleFromJSON(object.style) : 0,
      angle: isSet(object.angle) ? Number(object.angle) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
      enable: isSet(object.enable) ? Boolean(object.enable) : false,
    };
  },

  toJSON(message: Graphics_Shadow): unknown {
    const obj: any = {};
    message.style !== undefined && (obj.style = graphics_Shadow_StyleToJSON(message.style));
    message.angle !== undefined && (obj.angle = message.angle);
    message.offset !== undefined && (obj.offset = message.offset);
    message.radius !== undefined && (obj.radius = message.radius);
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.opacity !== undefined && (obj.opacity = message.opacity);
    message.enable !== undefined && (obj.enable = message.enable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Shadow>, I>>(object: I): Graphics_Shadow {
    const message = createBaseGraphics_Shadow();
    message.style = object.style ?? 0;
    message.angle = object.angle ?? 0;
    message.offset = object.offset ?? 0;
    message.radius = object.radius ?? 0;
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    message.opacity = object.opacity ?? 0;
    message.enable = object.enable ?? false;
    return message;
  },
};

function createBaseGraphics_Stroke(): Graphics_Stroke {
  return { style: 0, width: 0, color: undefined, pattern: [], enable: false };
}

export const Graphics_Stroke = {
  encode(message: Graphics_Stroke, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.style !== 0) {
      writer.uint32(8).int32(message.style);
    }
    if (message.width !== 0) {
      writer.uint32(17).double(message.width);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.pattern) {
      writer.double(v);
    }
    writer.ldelim();
    if (message.enable === true) {
      writer.uint32(40).bool(message.enable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Stroke {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Stroke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.style = reader.int32() as any;
          break;
        case 2:
          message.width = reader.double();
          break;
        case 3:
          message.color = Color.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pattern.push(reader.double());
            }
          } else {
            message.pattern.push(reader.double());
          }
          break;
        case 5:
          message.enable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Stroke {
    return {
      style: isSet(object.style) ? graphics_Stroke_StyleFromJSON(object.style) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      pattern: Array.isArray(object?.pattern) ? object.pattern.map((e: any) => Number(e)) : [],
      enable: isSet(object.enable) ? Boolean(object.enable) : false,
    };
  },

  toJSON(message: Graphics_Stroke): unknown {
    const obj: any = {};
    message.style !== undefined && (obj.style = graphics_Stroke_StyleToJSON(message.style));
    message.width !== undefined && (obj.width = message.width);
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    if (message.pattern) {
      obj.pattern = message.pattern.map((e) => e);
    } else {
      obj.pattern = [];
    }
    message.enable !== undefined && (obj.enable = message.enable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Stroke>, I>>(object: I): Graphics_Stroke {
    const message = createBaseGraphics_Stroke();
    message.style = object.style ?? 0;
    message.width = object.width ?? 0;
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    message.pattern = object.pattern?.map((e) => e) || [];
    message.enable = object.enable ?? false;
    return message;
  },
};

function createBaseGraphics_Feather(): Graphics_Feather {
  return { style: 0, radius: 0, enable: false };
}

export const Graphics_Feather = {
  encode(message: Graphics_Feather, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.style !== 0) {
      writer.uint32(8).int32(message.style);
    }
    if (message.radius !== 0) {
      writer.uint32(17).double(message.radius);
    }
    if (message.enable === true) {
      writer.uint32(24).bool(message.enable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Feather {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Feather();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.style = reader.int32() as any;
          break;
        case 2:
          message.radius = reader.double();
          break;
        case 3:
          message.enable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Feather {
    return {
      style: isSet(object.style) ? graphics_Feather_StyleFromJSON(object.style) : 0,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      enable: isSet(object.enable) ? Boolean(object.enable) : false,
    };
  },

  toJSON(message: Graphics_Feather): unknown {
    const obj: any = {};
    message.style !== undefined && (obj.style = graphics_Feather_StyleToJSON(message.style));
    message.radius !== undefined && (obj.radius = message.radius);
    message.enable !== undefined && (obj.enable = message.enable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Feather>, I>>(object: I): Graphics_Feather {
    const message = createBaseGraphics_Feather();
    message.style = object.style ?? 0;
    message.radius = object.radius ?? 0;
    message.enable = object.enable ?? false;
    return message;
  },
};

function createBaseGraphics_Text(): Graphics_Text {
  return {
    attributes: undefined,
    shadow: undefined,
    rtfData: new Uint8Array(),
    verticalAlignment: 0,
    scaleBehavior: 0,
    margins: undefined,
    isSuperscriptStandardized: false,
    transform: 0,
    transformDelimiter: "",
    chordPro: undefined,
  };
}

export const Graphics_Text = {
  encode(message: Graphics_Text, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attributes !== undefined) {
      Graphics_Text_Attributes.encode(message.attributes, writer.uint32(26).fork()).ldelim();
    }
    if (message.shadow !== undefined) {
      Graphics_Shadow.encode(message.shadow, writer.uint32(34).fork()).ldelim();
    }
    if (message.rtfData.length !== 0) {
      writer.uint32(42).bytes(message.rtfData);
    }
    if (message.verticalAlignment !== 0) {
      writer.uint32(48).int32(message.verticalAlignment);
    }
    if (message.scaleBehavior !== 0) {
      writer.uint32(56).int32(message.scaleBehavior);
    }
    if (message.margins !== undefined) {
      Graphics_EdgeInsets.encode(message.margins, writer.uint32(66).fork()).ldelim();
    }
    if (message.isSuperscriptStandardized === true) {
      writer.uint32(72).bool(message.isSuperscriptStandardized);
    }
    if (message.transform !== 0) {
      writer.uint32(80).int32(message.transform);
    }
    if (message.transformDelimiter !== "") {
      writer.uint32(90).string(message.transformDelimiter);
    }
    if (message.chordPro !== undefined) {
      Graphics_Text_ChordPro.encode(message.chordPro, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Text {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.attributes = Graphics_Text_Attributes.decode(reader, reader.uint32());
          break;
        case 4:
          message.shadow = Graphics_Shadow.decode(reader, reader.uint32());
          break;
        case 5:
          message.rtfData = reader.bytes();
          break;
        case 6:
          message.verticalAlignment = reader.int32() as any;
          break;
        case 7:
          message.scaleBehavior = reader.int32() as any;
          break;
        case 8:
          message.margins = Graphics_EdgeInsets.decode(reader, reader.uint32());
          break;
        case 9:
          message.isSuperscriptStandardized = reader.bool();
          break;
        case 10:
          message.transform = reader.int32() as any;
          break;
        case 11:
          message.transformDelimiter = reader.string();
          break;
        case 12:
          message.chordPro = Graphics_Text_ChordPro.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text {
    return {
      attributes: isSet(object.attributes) ? Graphics_Text_Attributes.fromJSON(object.attributes) : undefined,
      shadow: isSet(object.shadow) ? Graphics_Shadow.fromJSON(object.shadow) : undefined,
      rtfData: isSet(object.rtfData) ? bytesFromBase64(object.rtfData) : new Uint8Array(),
      verticalAlignment: isSet(object.verticalAlignment)
        ? graphics_Text_VerticalAlignmentFromJSON(object.verticalAlignment)
        : 0,
      scaleBehavior: isSet(object.scaleBehavior) ? graphics_Text_ScaleBehaviorFromJSON(object.scaleBehavior) : 0,
      margins: isSet(object.margins) ? Graphics_EdgeInsets.fromJSON(object.margins) : undefined,
      isSuperscriptStandardized: isSet(object.isSuperscriptStandardized)
        ? Boolean(object.isSuperscriptStandardized)
        : false,
      transform: isSet(object.transform) ? graphics_Text_TransformFromJSON(object.transform) : 0,
      transformDelimiter: isSet(object.transformDelimiter) ? String(object.transformDelimiter) : "",
      chordPro: isSet(object.chordPro) ? Graphics_Text_ChordPro.fromJSON(object.chordPro) : undefined,
    };
  },

  toJSON(message: Graphics_Text): unknown {
    const obj: any = {};
    message.attributes !== undefined &&
      (obj.attributes = message.attributes ? Graphics_Text_Attributes.toJSON(message.attributes) : undefined);
    message.shadow !== undefined && (obj.shadow = message.shadow ? Graphics_Shadow.toJSON(message.shadow) : undefined);
    message.rtfData !== undefined &&
      (obj.rtfData = base64FromBytes(message.rtfData !== undefined ? message.rtfData : new Uint8Array()));
    message.verticalAlignment !== undefined &&
      (obj.verticalAlignment = graphics_Text_VerticalAlignmentToJSON(message.verticalAlignment));
    message.scaleBehavior !== undefined &&
      (obj.scaleBehavior = graphics_Text_ScaleBehaviorToJSON(message.scaleBehavior));
    message.margins !== undefined &&
      (obj.margins = message.margins ? Graphics_EdgeInsets.toJSON(message.margins) : undefined);
    message.isSuperscriptStandardized !== undefined &&
      (obj.isSuperscriptStandardized = message.isSuperscriptStandardized);
    message.transform !== undefined && (obj.transform = graphics_Text_TransformToJSON(message.transform));
    message.transformDelimiter !== undefined && (obj.transformDelimiter = message.transformDelimiter);
    message.chordPro !== undefined &&
      (obj.chordPro = message.chordPro ? Graphics_Text_ChordPro.toJSON(message.chordPro) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Text>, I>>(object: I): Graphics_Text {
    const message = createBaseGraphics_Text();
    message.attributes = (object.attributes !== undefined && object.attributes !== null)
      ? Graphics_Text_Attributes.fromPartial(object.attributes)
      : undefined;
    message.shadow = (object.shadow !== undefined && object.shadow !== null)
      ? Graphics_Shadow.fromPartial(object.shadow)
      : undefined;
    message.rtfData = object.rtfData ?? new Uint8Array();
    message.verticalAlignment = object.verticalAlignment ?? 0;
    message.scaleBehavior = object.scaleBehavior ?? 0;
    message.margins = (object.margins !== undefined && object.margins !== null)
      ? Graphics_EdgeInsets.fromPartial(object.margins)
      : undefined;
    message.isSuperscriptStandardized = object.isSuperscriptStandardized ?? false;
    message.transform = object.transform ?? 0;
    message.transformDelimiter = object.transformDelimiter ?? "";
    message.chordPro = (object.chordPro !== undefined && object.chordPro !== null)
      ? Graphics_Text_ChordPro.fromPartial(object.chordPro)
      : undefined;
    return message;
  },
};

function createBaseGraphics_Text_LineFillMask(): Graphics_Text_LineFillMask {
  return { enabled: false, heightOffset: 0, verticalOffset: 0, maskStyle: 0, widthOffset: 0, horizontalOffset: 0 };
}

export const Graphics_Text_LineFillMask = {
  encode(message: Graphics_Text_LineFillMask, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.heightOffset !== 0) {
      writer.uint32(17).double(message.heightOffset);
    }
    if (message.verticalOffset !== 0) {
      writer.uint32(25).double(message.verticalOffset);
    }
    if (message.maskStyle !== 0) {
      writer.uint32(32).int32(message.maskStyle);
    }
    if (message.widthOffset !== 0) {
      writer.uint32(41).double(message.widthOffset);
    }
    if (message.horizontalOffset !== 0) {
      writer.uint32(49).double(message.horizontalOffset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Text_LineFillMask {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_LineFillMask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.heightOffset = reader.double();
          break;
        case 3:
          message.verticalOffset = reader.double();
          break;
        case 4:
          message.maskStyle = reader.int32() as any;
          break;
        case 5:
          message.widthOffset = reader.double();
          break;
        case 6:
          message.horizontalOffset = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_LineFillMask {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      heightOffset: isSet(object.heightOffset) ? Number(object.heightOffset) : 0,
      verticalOffset: isSet(object.verticalOffset) ? Number(object.verticalOffset) : 0,
      maskStyle: isSet(object.maskStyle) ? graphics_Text_LineFillMask_LineMaskStyleFromJSON(object.maskStyle) : 0,
      widthOffset: isSet(object.widthOffset) ? Number(object.widthOffset) : 0,
      horizontalOffset: isSet(object.horizontalOffset) ? Number(object.horizontalOffset) : 0,
    };
  },

  toJSON(message: Graphics_Text_LineFillMask): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.heightOffset !== undefined && (obj.heightOffset = message.heightOffset);
    message.verticalOffset !== undefined && (obj.verticalOffset = message.verticalOffset);
    message.maskStyle !== undefined &&
      (obj.maskStyle = graphics_Text_LineFillMask_LineMaskStyleToJSON(message.maskStyle));
    message.widthOffset !== undefined && (obj.widthOffset = message.widthOffset);
    message.horizontalOffset !== undefined && (obj.horizontalOffset = message.horizontalOffset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Text_LineFillMask>, I>>(object: I): Graphics_Text_LineFillMask {
    const message = createBaseGraphics_Text_LineFillMask();
    message.enabled = object.enabled ?? false;
    message.heightOffset = object.heightOffset ?? 0;
    message.verticalOffset = object.verticalOffset ?? 0;
    message.maskStyle = object.maskStyle ?? 0;
    message.widthOffset = object.widthOffset ?? 0;
    message.horizontalOffset = object.horizontalOffset ?? 0;
    return message;
  },
};

function createBaseGraphics_Text_GradientFill(): Graphics_Text_GradientFill {
  return { gradient: undefined, stretchToDocumentBounds: false };
}

export const Graphics_Text_GradientFill = {
  encode(message: Graphics_Text_GradientFill, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gradient !== undefined) {
      Graphics_Gradient.encode(message.gradient, writer.uint32(10).fork()).ldelim();
    }
    if (message.stretchToDocumentBounds === true) {
      writer.uint32(16).bool(message.stretchToDocumentBounds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Text_GradientFill {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_GradientFill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gradient = Graphics_Gradient.decode(reader, reader.uint32());
          break;
        case 2:
          message.stretchToDocumentBounds = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_GradientFill {
    return {
      gradient: isSet(object.gradient) ? Graphics_Gradient.fromJSON(object.gradient) : undefined,
      stretchToDocumentBounds: isSet(object.stretchToDocumentBounds) ? Boolean(object.stretchToDocumentBounds) : false,
    };
  },

  toJSON(message: Graphics_Text_GradientFill): unknown {
    const obj: any = {};
    message.gradient !== undefined &&
      (obj.gradient = message.gradient ? Graphics_Gradient.toJSON(message.gradient) : undefined);
    message.stretchToDocumentBounds !== undefined && (obj.stretchToDocumentBounds = message.stretchToDocumentBounds);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Text_GradientFill>, I>>(object: I): Graphics_Text_GradientFill {
    const message = createBaseGraphics_Text_GradientFill();
    message.gradient = (object.gradient !== undefined && object.gradient !== null)
      ? Graphics_Gradient.fromPartial(object.gradient)
      : undefined;
    message.stretchToDocumentBounds = object.stretchToDocumentBounds ?? false;
    return message;
  },
};

function createBaseGraphics_Text_ChordPro(): Graphics_Text_ChordPro {
  return { enabled: false, notation: 0, color: undefined };
}

export const Graphics_Text_ChordPro = {
  encode(message: Graphics_Text_ChordPro, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.notation !== 0) {
      writer.uint32(16).int32(message.notation);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Text_ChordPro {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_ChordPro();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.notation = reader.int32() as any;
          break;
        case 3:
          message.color = Color.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_ChordPro {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      notation: isSet(object.notation) ? graphics_Text_ChordPro_NotationFromJSON(object.notation) : 0,
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
    };
  },

  toJSON(message: Graphics_Text_ChordPro): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.notation !== undefined && (obj.notation = graphics_Text_ChordPro_NotationToJSON(message.notation));
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Text_ChordPro>, I>>(object: I): Graphics_Text_ChordPro {
    const message = createBaseGraphics_Text_ChordPro();
    message.enabled = object.enabled ?? false;
    message.notation = object.notation ?? 0;
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    return message;
  },
};

function createBaseGraphics_Text_Attributes(): Graphics_Text_Attributes {
  return {
    font: undefined,
    capitalization: 0,
    underlineStyle: undefined,
    underlineColor: undefined,
    paragraphStyle: undefined,
    kerning: 0,
    superscript: 0,
    strikethroughStyle: undefined,
    strikethroughColor: undefined,
    strokeWidth: 0,
    strokeColor: undefined,
    customAttributes: [],
    backgroundColor: undefined,
    textSolidFill: undefined,
    textGradientFill: undefined,
  };
}

export const Graphics_Text_Attributes = {
  encode(message: Graphics_Text_Attributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.font !== undefined) {
      Graphics_Text_Attributes_Font.encode(message.font, writer.uint32(10).fork()).ldelim();
    }
    if (message.capitalization !== 0) {
      writer.uint32(16).int32(message.capitalization);
    }
    if (message.underlineStyle !== undefined) {
      Graphics_Text_Attributes_Underline.encode(message.underlineStyle, writer.uint32(34).fork()).ldelim();
    }
    if (message.underlineColor !== undefined) {
      Color.encode(message.underlineColor, writer.uint32(42).fork()).ldelim();
    }
    if (message.paragraphStyle !== undefined) {
      Graphics_Text_Attributes_Paragraph.encode(message.paragraphStyle, writer.uint32(50).fork()).ldelim();
    }
    if (message.kerning !== 0) {
      writer.uint32(57).double(message.kerning);
    }
    if (message.superscript !== 0) {
      writer.uint32(64).int32(message.superscript);
    }
    if (message.strikethroughStyle !== undefined) {
      Graphics_Text_Attributes_Underline.encode(message.strikethroughStyle, writer.uint32(74).fork()).ldelim();
    }
    if (message.strikethroughColor !== undefined) {
      Color.encode(message.strikethroughColor, writer.uint32(82).fork()).ldelim();
    }
    if (message.strokeWidth !== 0) {
      writer.uint32(89).double(message.strokeWidth);
    }
    if (message.strokeColor !== undefined) {
      Color.encode(message.strokeColor, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.customAttributes) {
      Graphics_Text_Attributes_CustomAttribute.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.backgroundColor !== undefined) {
      Color.encode(message.backgroundColor, writer.uint32(122).fork()).ldelim();
    }
    if (message.textSolidFill !== undefined) {
      Color.encode(message.textSolidFill, writer.uint32(26).fork()).ldelim();
    }
    if (message.textGradientFill !== undefined) {
      Graphics_Text_GradientFill.encode(message.textGradientFill, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Text_Attributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_Attributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.font = Graphics_Text_Attributes_Font.decode(reader, reader.uint32());
          break;
        case 2:
          message.capitalization = reader.int32() as any;
          break;
        case 4:
          message.underlineStyle = Graphics_Text_Attributes_Underline.decode(reader, reader.uint32());
          break;
        case 5:
          message.underlineColor = Color.decode(reader, reader.uint32());
          break;
        case 6:
          message.paragraphStyle = Graphics_Text_Attributes_Paragraph.decode(reader, reader.uint32());
          break;
        case 7:
          message.kerning = reader.double();
          break;
        case 8:
          message.superscript = reader.int32();
          break;
        case 9:
          message.strikethroughStyle = Graphics_Text_Attributes_Underline.decode(reader, reader.uint32());
          break;
        case 10:
          message.strikethroughColor = Color.decode(reader, reader.uint32());
          break;
        case 11:
          message.strokeWidth = reader.double();
          break;
        case 12:
          message.strokeColor = Color.decode(reader, reader.uint32());
          break;
        case 13:
          message.customAttributes.push(Graphics_Text_Attributes_CustomAttribute.decode(reader, reader.uint32()));
          break;
        case 15:
          message.backgroundColor = Color.decode(reader, reader.uint32());
          break;
        case 3:
          message.textSolidFill = Color.decode(reader, reader.uint32());
          break;
        case 14:
          message.textGradientFill = Graphics_Text_GradientFill.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_Attributes {
    return {
      font: isSet(object.font) ? Graphics_Text_Attributes_Font.fromJSON(object.font) : undefined,
      capitalization: isSet(object.capitalization)
        ? graphics_Text_Attributes_CapitalizationFromJSON(object.capitalization)
        : 0,
      underlineStyle: isSet(object.underlineStyle)
        ? Graphics_Text_Attributes_Underline.fromJSON(object.underlineStyle)
        : undefined,
      underlineColor: isSet(object.underlineColor) ? Color.fromJSON(object.underlineColor) : undefined,
      paragraphStyle: isSet(object.paragraphStyle)
        ? Graphics_Text_Attributes_Paragraph.fromJSON(object.paragraphStyle)
        : undefined,
      kerning: isSet(object.kerning) ? Number(object.kerning) : 0,
      superscript: isSet(object.superscript) ? Number(object.superscript) : 0,
      strikethroughStyle: isSet(object.strikethroughStyle)
        ? Graphics_Text_Attributes_Underline.fromJSON(object.strikethroughStyle)
        : undefined,
      strikethroughColor: isSet(object.strikethroughColor) ? Color.fromJSON(object.strikethroughColor) : undefined,
      strokeWidth: isSet(object.strokeWidth) ? Number(object.strokeWidth) : 0,
      strokeColor: isSet(object.strokeColor) ? Color.fromJSON(object.strokeColor) : undefined,
      customAttributes: Array.isArray(object?.customAttributes)
        ? object.customAttributes.map((e: any) => Graphics_Text_Attributes_CustomAttribute.fromJSON(e))
        : [],
      backgroundColor: isSet(object.backgroundColor) ? Color.fromJSON(object.backgroundColor) : undefined,
      textSolidFill: isSet(object.textSolidFill) ? Color.fromJSON(object.textSolidFill) : undefined,
      textGradientFill: isSet(object.textGradientFill)
        ? Graphics_Text_GradientFill.fromJSON(object.textGradientFill)
        : undefined,
    };
  },

  toJSON(message: Graphics_Text_Attributes): unknown {
    const obj: any = {};
    message.font !== undefined &&
      (obj.font = message.font ? Graphics_Text_Attributes_Font.toJSON(message.font) : undefined);
    message.capitalization !== undefined &&
      (obj.capitalization = graphics_Text_Attributes_CapitalizationToJSON(message.capitalization));
    message.underlineStyle !== undefined && (obj.underlineStyle = message.underlineStyle
      ? Graphics_Text_Attributes_Underline.toJSON(message.underlineStyle)
      : undefined);
    message.underlineColor !== undefined &&
      (obj.underlineColor = message.underlineColor ? Color.toJSON(message.underlineColor) : undefined);
    message.paragraphStyle !== undefined && (obj.paragraphStyle = message.paragraphStyle
      ? Graphics_Text_Attributes_Paragraph.toJSON(message.paragraphStyle)
      : undefined);
    message.kerning !== undefined && (obj.kerning = message.kerning);
    message.superscript !== undefined && (obj.superscript = Math.round(message.superscript));
    message.strikethroughStyle !== undefined && (obj.strikethroughStyle = message.strikethroughStyle
      ? Graphics_Text_Attributes_Underline.toJSON(message.strikethroughStyle)
      : undefined);
    message.strikethroughColor !== undefined &&
      (obj.strikethroughColor = message.strikethroughColor ? Color.toJSON(message.strikethroughColor) : undefined);
    message.strokeWidth !== undefined && (obj.strokeWidth = message.strokeWidth);
    message.strokeColor !== undefined &&
      (obj.strokeColor = message.strokeColor ? Color.toJSON(message.strokeColor) : undefined);
    if (message.customAttributes) {
      obj.customAttributes = message.customAttributes.map((e) =>
        e ? Graphics_Text_Attributes_CustomAttribute.toJSON(e) : undefined
      );
    } else {
      obj.customAttributes = [];
    }
    message.backgroundColor !== undefined &&
      (obj.backgroundColor = message.backgroundColor ? Color.toJSON(message.backgroundColor) : undefined);
    message.textSolidFill !== undefined &&
      (obj.textSolidFill = message.textSolidFill ? Color.toJSON(message.textSolidFill) : undefined);
    message.textGradientFill !== undefined && (obj.textGradientFill = message.textGradientFill
      ? Graphics_Text_GradientFill.toJSON(message.textGradientFill)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Text_Attributes>, I>>(object: I): Graphics_Text_Attributes {
    const message = createBaseGraphics_Text_Attributes();
    message.font = (object.font !== undefined && object.font !== null)
      ? Graphics_Text_Attributes_Font.fromPartial(object.font)
      : undefined;
    message.capitalization = object.capitalization ?? 0;
    message.underlineStyle = (object.underlineStyle !== undefined && object.underlineStyle !== null)
      ? Graphics_Text_Attributes_Underline.fromPartial(object.underlineStyle)
      : undefined;
    message.underlineColor = (object.underlineColor !== undefined && object.underlineColor !== null)
      ? Color.fromPartial(object.underlineColor)
      : undefined;
    message.paragraphStyle = (object.paragraphStyle !== undefined && object.paragraphStyle !== null)
      ? Graphics_Text_Attributes_Paragraph.fromPartial(object.paragraphStyle)
      : undefined;
    message.kerning = object.kerning ?? 0;
    message.superscript = object.superscript ?? 0;
    message.strikethroughStyle = (object.strikethroughStyle !== undefined && object.strikethroughStyle !== null)
      ? Graphics_Text_Attributes_Underline.fromPartial(object.strikethroughStyle)
      : undefined;
    message.strikethroughColor = (object.strikethroughColor !== undefined && object.strikethroughColor !== null)
      ? Color.fromPartial(object.strikethroughColor)
      : undefined;
    message.strokeWidth = object.strokeWidth ?? 0;
    message.strokeColor = (object.strokeColor !== undefined && object.strokeColor !== null)
      ? Color.fromPartial(object.strokeColor)
      : undefined;
    message.customAttributes =
      object.customAttributes?.map((e) => Graphics_Text_Attributes_CustomAttribute.fromPartial(e)) || [];
    message.backgroundColor = (object.backgroundColor !== undefined && object.backgroundColor !== null)
      ? Color.fromPartial(object.backgroundColor)
      : undefined;
    message.textSolidFill = (object.textSolidFill !== undefined && object.textSolidFill !== null)
      ? Color.fromPartial(object.textSolidFill)
      : undefined;
    message.textGradientFill = (object.textGradientFill !== undefined && object.textGradientFill !== null)
      ? Graphics_Text_GradientFill.fromPartial(object.textGradientFill)
      : undefined;
    return message;
  },
};

function createBaseGraphics_Text_Attributes_Font(): Graphics_Text_Attributes_Font {
  return { name: "", size: 0, italic: false, bold: false, family: "", face: "" };
}

export const Graphics_Text_Attributes_Font = {
  encode(message: Graphics_Text_Attributes_Font, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.size !== 0) {
      writer.uint32(17).double(message.size);
    }
    if (message.italic === true) {
      writer.uint32(32).bool(message.italic);
    }
    if (message.bold === true) {
      writer.uint32(64).bool(message.bold);
    }
    if (message.family !== "") {
      writer.uint32(74).string(message.family);
    }
    if (message.face !== "") {
      writer.uint32(82).string(message.face);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Text_Attributes_Font {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_Attributes_Font();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.size = reader.double();
          break;
        case 4:
          message.italic = reader.bool();
          break;
        case 8:
          message.bold = reader.bool();
          break;
        case 9:
          message.family = reader.string();
          break;
        case 10:
          message.face = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_Attributes_Font {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      size: isSet(object.size) ? Number(object.size) : 0,
      italic: isSet(object.italic) ? Boolean(object.italic) : false,
      bold: isSet(object.bold) ? Boolean(object.bold) : false,
      family: isSet(object.family) ? String(object.family) : "",
      face: isSet(object.face) ? String(object.face) : "",
    };
  },

  toJSON(message: Graphics_Text_Attributes_Font): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.size !== undefined && (obj.size = message.size);
    message.italic !== undefined && (obj.italic = message.italic);
    message.bold !== undefined && (obj.bold = message.bold);
    message.family !== undefined && (obj.family = message.family);
    message.face !== undefined && (obj.face = message.face);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Text_Attributes_Font>, I>>(
    object: I,
  ): Graphics_Text_Attributes_Font {
    const message = createBaseGraphics_Text_Attributes_Font();
    message.name = object.name ?? "";
    message.size = object.size ?? 0;
    message.italic = object.italic ?? false;
    message.bold = object.bold ?? false;
    message.family = object.family ?? "";
    message.face = object.face ?? "";
    return message;
  },
};

function createBaseGraphics_Text_Attributes_Underline(): Graphics_Text_Attributes_Underline {
  return { style: 0, pattern: 0, byWord: false };
}

export const Graphics_Text_Attributes_Underline = {
  encode(message: Graphics_Text_Attributes_Underline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.style !== 0) {
      writer.uint32(8).int32(message.style);
    }
    if (message.pattern !== 0) {
      writer.uint32(16).int32(message.pattern);
    }
    if (message.byWord === true) {
      writer.uint32(24).bool(message.byWord);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Text_Attributes_Underline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_Attributes_Underline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.style = reader.int32() as any;
          break;
        case 2:
          message.pattern = reader.int32() as any;
          break;
        case 3:
          message.byWord = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_Attributes_Underline {
    return {
      style: isSet(object.style) ? graphics_Text_Attributes_Underline_StyleFromJSON(object.style) : 0,
      pattern: isSet(object.pattern) ? graphics_Text_Attributes_Underline_PatternFromJSON(object.pattern) : 0,
      byWord: isSet(object.byWord) ? Boolean(object.byWord) : false,
    };
  },

  toJSON(message: Graphics_Text_Attributes_Underline): unknown {
    const obj: any = {};
    message.style !== undefined && (obj.style = graphics_Text_Attributes_Underline_StyleToJSON(message.style));
    message.pattern !== undefined && (obj.pattern = graphics_Text_Attributes_Underline_PatternToJSON(message.pattern));
    message.byWord !== undefined && (obj.byWord = message.byWord);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Text_Attributes_Underline>, I>>(
    object: I,
  ): Graphics_Text_Attributes_Underline {
    const message = createBaseGraphics_Text_Attributes_Underline();
    message.style = object.style ?? 0;
    message.pattern = object.pattern ?? 0;
    message.byWord = object.byWord ?? false;
    return message;
  },
};

function createBaseGraphics_Text_Attributes_Paragraph(): Graphics_Text_Attributes_Paragraph {
  return {
    alignment: 0,
    firstLineHeadIndent: 0,
    headIndent: 0,
    tailIndent: 0,
    lineHeightMultiple: 0,
    maximumLineHeight: 0,
    minimumLineHeight: 0,
    lineSpacing: 0,
    paragraphSpacing: 0,
    paragraphSpacingBefore: 0,
    tabStops: [],
    defaultTabInterval: 0,
    textList: undefined,
    textLists: [],
  };
}

export const Graphics_Text_Attributes_Paragraph = {
  encode(message: Graphics_Text_Attributes_Paragraph, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alignment !== 0) {
      writer.uint32(8).int32(message.alignment);
    }
    if (message.firstLineHeadIndent !== 0) {
      writer.uint32(17).double(message.firstLineHeadIndent);
    }
    if (message.headIndent !== 0) {
      writer.uint32(25).double(message.headIndent);
    }
    if (message.tailIndent !== 0) {
      writer.uint32(33).double(message.tailIndent);
    }
    if (message.lineHeightMultiple !== 0) {
      writer.uint32(41).double(message.lineHeightMultiple);
    }
    if (message.maximumLineHeight !== 0) {
      writer.uint32(49).double(message.maximumLineHeight);
    }
    if (message.minimumLineHeight !== 0) {
      writer.uint32(57).double(message.minimumLineHeight);
    }
    if (message.lineSpacing !== 0) {
      writer.uint32(65).double(message.lineSpacing);
    }
    if (message.paragraphSpacing !== 0) {
      writer.uint32(73).double(message.paragraphSpacing);
    }
    if (message.paragraphSpacingBefore !== 0) {
      writer.uint32(81).double(message.paragraphSpacingBefore);
    }
    for (const v of message.tabStops) {
      Graphics_Text_Attributes_Paragraph_TabStop.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.defaultTabInterval !== 0) {
      writer.uint32(97).double(message.defaultTabInterval);
    }
    if (message.textList !== undefined) {
      Graphics_Text_Attributes_Paragraph_TextList.encode(message.textList, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.textLists) {
      Graphics_Text_Attributes_Paragraph_TextList.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Text_Attributes_Paragraph {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_Attributes_Paragraph();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alignment = reader.int32() as any;
          break;
        case 2:
          message.firstLineHeadIndent = reader.double();
          break;
        case 3:
          message.headIndent = reader.double();
          break;
        case 4:
          message.tailIndent = reader.double();
          break;
        case 5:
          message.lineHeightMultiple = reader.double();
          break;
        case 6:
          message.maximumLineHeight = reader.double();
          break;
        case 7:
          message.minimumLineHeight = reader.double();
          break;
        case 8:
          message.lineSpacing = reader.double();
          break;
        case 9:
          message.paragraphSpacing = reader.double();
          break;
        case 10:
          message.paragraphSpacingBefore = reader.double();
          break;
        case 11:
          message.tabStops.push(Graphics_Text_Attributes_Paragraph_TabStop.decode(reader, reader.uint32()));
          break;
        case 12:
          message.defaultTabInterval = reader.double();
          break;
        case 13:
          message.textList = Graphics_Text_Attributes_Paragraph_TextList.decode(reader, reader.uint32());
          break;
        case 14:
          message.textLists.push(Graphics_Text_Attributes_Paragraph_TextList.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_Attributes_Paragraph {
    return {
      alignment: isSet(object.alignment) ? graphics_Text_Attributes_Paragraph_AlignmentFromJSON(object.alignment) : 0,
      firstLineHeadIndent: isSet(object.firstLineHeadIndent) ? Number(object.firstLineHeadIndent) : 0,
      headIndent: isSet(object.headIndent) ? Number(object.headIndent) : 0,
      tailIndent: isSet(object.tailIndent) ? Number(object.tailIndent) : 0,
      lineHeightMultiple: isSet(object.lineHeightMultiple) ? Number(object.lineHeightMultiple) : 0,
      maximumLineHeight: isSet(object.maximumLineHeight) ? Number(object.maximumLineHeight) : 0,
      minimumLineHeight: isSet(object.minimumLineHeight) ? Number(object.minimumLineHeight) : 0,
      lineSpacing: isSet(object.lineSpacing) ? Number(object.lineSpacing) : 0,
      paragraphSpacing: isSet(object.paragraphSpacing) ? Number(object.paragraphSpacing) : 0,
      paragraphSpacingBefore: isSet(object.paragraphSpacingBefore) ? Number(object.paragraphSpacingBefore) : 0,
      tabStops: Array.isArray(object?.tabStops)
        ? object.tabStops.map((e: any) => Graphics_Text_Attributes_Paragraph_TabStop.fromJSON(e))
        : [],
      defaultTabInterval: isSet(object.defaultTabInterval) ? Number(object.defaultTabInterval) : 0,
      textList: isSet(object.textList)
        ? Graphics_Text_Attributes_Paragraph_TextList.fromJSON(object.textList)
        : undefined,
      textLists: Array.isArray(object?.textLists)
        ? object.textLists.map((e: any) => Graphics_Text_Attributes_Paragraph_TextList.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Graphics_Text_Attributes_Paragraph): unknown {
    const obj: any = {};
    message.alignment !== undefined &&
      (obj.alignment = graphics_Text_Attributes_Paragraph_AlignmentToJSON(message.alignment));
    message.firstLineHeadIndent !== undefined && (obj.firstLineHeadIndent = message.firstLineHeadIndent);
    message.headIndent !== undefined && (obj.headIndent = message.headIndent);
    message.tailIndent !== undefined && (obj.tailIndent = message.tailIndent);
    message.lineHeightMultiple !== undefined && (obj.lineHeightMultiple = message.lineHeightMultiple);
    message.maximumLineHeight !== undefined && (obj.maximumLineHeight = message.maximumLineHeight);
    message.minimumLineHeight !== undefined && (obj.minimumLineHeight = message.minimumLineHeight);
    message.lineSpacing !== undefined && (obj.lineSpacing = message.lineSpacing);
    message.paragraphSpacing !== undefined && (obj.paragraphSpacing = message.paragraphSpacing);
    message.paragraphSpacingBefore !== undefined && (obj.paragraphSpacingBefore = message.paragraphSpacingBefore);
    if (message.tabStops) {
      obj.tabStops = message.tabStops.map((e) => e ? Graphics_Text_Attributes_Paragraph_TabStop.toJSON(e) : undefined);
    } else {
      obj.tabStops = [];
    }
    message.defaultTabInterval !== undefined && (obj.defaultTabInterval = message.defaultTabInterval);
    message.textList !== undefined && (obj.textList = message.textList
      ? Graphics_Text_Attributes_Paragraph_TextList.toJSON(message.textList)
      : undefined);
    if (message.textLists) {
      obj.textLists = message.textLists.map((e) =>
        e ? Graphics_Text_Attributes_Paragraph_TextList.toJSON(e) : undefined
      );
    } else {
      obj.textLists = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Text_Attributes_Paragraph>, I>>(
    object: I,
  ): Graphics_Text_Attributes_Paragraph {
    const message = createBaseGraphics_Text_Attributes_Paragraph();
    message.alignment = object.alignment ?? 0;
    message.firstLineHeadIndent = object.firstLineHeadIndent ?? 0;
    message.headIndent = object.headIndent ?? 0;
    message.tailIndent = object.tailIndent ?? 0;
    message.lineHeightMultiple = object.lineHeightMultiple ?? 0;
    message.maximumLineHeight = object.maximumLineHeight ?? 0;
    message.minimumLineHeight = object.minimumLineHeight ?? 0;
    message.lineSpacing = object.lineSpacing ?? 0;
    message.paragraphSpacing = object.paragraphSpacing ?? 0;
    message.paragraphSpacingBefore = object.paragraphSpacingBefore ?? 0;
    message.tabStops = object.tabStops?.map((e) => Graphics_Text_Attributes_Paragraph_TabStop.fromPartial(e)) || [];
    message.defaultTabInterval = object.defaultTabInterval ?? 0;
    message.textList = (object.textList !== undefined && object.textList !== null)
      ? Graphics_Text_Attributes_Paragraph_TextList.fromPartial(object.textList)
      : undefined;
    message.textLists = object.textLists?.map((e) => Graphics_Text_Attributes_Paragraph_TextList.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGraphics_Text_Attributes_Paragraph_TabStop(): Graphics_Text_Attributes_Paragraph_TabStop {
  return { location: 0, alignment: 0 };
}

export const Graphics_Text_Attributes_Paragraph_TabStop = {
  encode(message: Graphics_Text_Attributes_Paragraph_TabStop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== 0) {
      writer.uint32(9).double(message.location);
    }
    if (message.alignment !== 0) {
      writer.uint32(16).int32(message.alignment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Text_Attributes_Paragraph_TabStop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_Attributes_Paragraph_TabStop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location = reader.double();
          break;
        case 2:
          message.alignment = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_Attributes_Paragraph_TabStop {
    return {
      location: isSet(object.location) ? Number(object.location) : 0,
      alignment: isSet(object.alignment)
        ? graphics_Text_Attributes_Paragraph_TabStop_AlignmentFromJSON(object.alignment)
        : 0,
    };
  },

  toJSON(message: Graphics_Text_Attributes_Paragraph_TabStop): unknown {
    const obj: any = {};
    message.location !== undefined && (obj.location = message.location);
    message.alignment !== undefined &&
      (obj.alignment = graphics_Text_Attributes_Paragraph_TabStop_AlignmentToJSON(message.alignment));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Text_Attributes_Paragraph_TabStop>, I>>(
    object: I,
  ): Graphics_Text_Attributes_Paragraph_TabStop {
    const message = createBaseGraphics_Text_Attributes_Paragraph_TabStop();
    message.location = object.location ?? 0;
    message.alignment = object.alignment ?? 0;
    return message;
  },
};

function createBaseGraphics_Text_Attributes_Paragraph_TextList(): Graphics_Text_Attributes_Paragraph_TextList {
  return { isEnabled: false, numberType: 0, prefix: "", postfix: "", startingNumber: 0 };
}

export const Graphics_Text_Attributes_Paragraph_TextList = {
  encode(message: Graphics_Text_Attributes_Paragraph_TextList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isEnabled === true) {
      writer.uint32(8).bool(message.isEnabled);
    }
    if (message.numberType !== 0) {
      writer.uint32(16).int32(message.numberType);
    }
    if (message.prefix !== "") {
      writer.uint32(26).string(message.prefix);
    }
    if (message.postfix !== "") {
      writer.uint32(34).string(message.postfix);
    }
    if (message.startingNumber !== 0) {
      writer.uint32(40).int32(message.startingNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Text_Attributes_Paragraph_TextList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_Attributes_Paragraph_TextList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isEnabled = reader.bool();
          break;
        case 2:
          message.numberType = reader.int32() as any;
          break;
        case 3:
          message.prefix = reader.string();
          break;
        case 4:
          message.postfix = reader.string();
          break;
        case 5:
          message.startingNumber = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_Attributes_Paragraph_TextList {
    return {
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
      numberType: isSet(object.numberType)
        ? graphics_Text_Attributes_Paragraph_TextList_NumberTypeFromJSON(object.numberType)
        : 0,
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
      postfix: isSet(object.postfix) ? String(object.postfix) : "",
      startingNumber: isSet(object.startingNumber) ? Number(object.startingNumber) : 0,
    };
  },

  toJSON(message: Graphics_Text_Attributes_Paragraph_TextList): unknown {
    const obj: any = {};
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.numberType !== undefined &&
      (obj.numberType = graphics_Text_Attributes_Paragraph_TextList_NumberTypeToJSON(message.numberType));
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.postfix !== undefined && (obj.postfix = message.postfix);
    message.startingNumber !== undefined && (obj.startingNumber = Math.round(message.startingNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Text_Attributes_Paragraph_TextList>, I>>(
    object: I,
  ): Graphics_Text_Attributes_Paragraph_TextList {
    const message = createBaseGraphics_Text_Attributes_Paragraph_TextList();
    message.isEnabled = object.isEnabled ?? false;
    message.numberType = object.numberType ?? 0;
    message.prefix = object.prefix ?? "";
    message.postfix = object.postfix ?? "";
    message.startingNumber = object.startingNumber ?? 0;
    return message;
  },
};

function createBaseGraphics_Text_Attributes_CustomAttribute(): Graphics_Text_Attributes_CustomAttribute {
  return {
    range: undefined,
    capitalization: undefined,
    originalFontSize: undefined,
    fontScaleFactor: undefined,
    textGradientFill: undefined,
    shouldPreserveForegroundColor: undefined,
    chord: undefined,
  };
}

export const Graphics_Text_Attributes_CustomAttribute = {
  encode(message: Graphics_Text_Attributes_CustomAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.range !== undefined) {
      IntRange.encode(message.range, writer.uint32(10).fork()).ldelim();
    }
    if (message.capitalization !== undefined) {
      writer.uint32(16).int32(message.capitalization);
    }
    if (message.originalFontSize !== undefined) {
      writer.uint32(25).double(message.originalFontSize);
    }
    if (message.fontScaleFactor !== undefined) {
      writer.uint32(33).double(message.fontScaleFactor);
    }
    if (message.textGradientFill !== undefined) {
      Graphics_Text_GradientFill.encode(message.textGradientFill, writer.uint32(42).fork()).ldelim();
    }
    if (message.shouldPreserveForegroundColor !== undefined) {
      writer.uint32(48).bool(message.shouldPreserveForegroundColor);
    }
    if (message.chord !== undefined) {
      writer.uint32(58).string(message.chord);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Text_Attributes_CustomAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_Attributes_CustomAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.range = IntRange.decode(reader, reader.uint32());
          break;
        case 2:
          message.capitalization = reader.int32() as any;
          break;
        case 3:
          message.originalFontSize = reader.double();
          break;
        case 4:
          message.fontScaleFactor = reader.double();
          break;
        case 5:
          message.textGradientFill = Graphics_Text_GradientFill.decode(reader, reader.uint32());
          break;
        case 6:
          message.shouldPreserveForegroundColor = reader.bool();
          break;
        case 7:
          message.chord = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_Attributes_CustomAttribute {
    return {
      range: isSet(object.range) ? IntRange.fromJSON(object.range) : undefined,
      capitalization: isSet(object.capitalization)
        ? graphics_Text_Attributes_CustomAttribute_CapitalizationFromJSON(object.capitalization)
        : undefined,
      originalFontSize: isSet(object.originalFontSize) ? Number(object.originalFontSize) : undefined,
      fontScaleFactor: isSet(object.fontScaleFactor) ? Number(object.fontScaleFactor) : undefined,
      textGradientFill: isSet(object.textGradientFill)
        ? Graphics_Text_GradientFill.fromJSON(object.textGradientFill)
        : undefined,
      shouldPreserveForegroundColor: isSet(object.shouldPreserveForegroundColor)
        ? Boolean(object.shouldPreserveForegroundColor)
        : undefined,
      chord: isSet(object.chord) ? String(object.chord) : undefined,
    };
  },

  toJSON(message: Graphics_Text_Attributes_CustomAttribute): unknown {
    const obj: any = {};
    message.range !== undefined && (obj.range = message.range ? IntRange.toJSON(message.range) : undefined);
    message.capitalization !== undefined && (obj.capitalization = message.capitalization !== undefined
      ? graphics_Text_Attributes_CustomAttribute_CapitalizationToJSON(message.capitalization)
      : undefined);
    message.originalFontSize !== undefined && (obj.originalFontSize = message.originalFontSize);
    message.fontScaleFactor !== undefined && (obj.fontScaleFactor = message.fontScaleFactor);
    message.textGradientFill !== undefined && (obj.textGradientFill = message.textGradientFill
      ? Graphics_Text_GradientFill.toJSON(message.textGradientFill)
      : undefined);
    message.shouldPreserveForegroundColor !== undefined &&
      (obj.shouldPreserveForegroundColor = message.shouldPreserveForegroundColor);
    message.chord !== undefined && (obj.chord = message.chord);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Graphics_Text_Attributes_CustomAttribute>, I>>(
    object: I,
  ): Graphics_Text_Attributes_CustomAttribute {
    const message = createBaseGraphics_Text_Attributes_CustomAttribute();
    message.range = (object.range !== undefined && object.range !== null)
      ? IntRange.fromPartial(object.range)
      : undefined;
    message.capitalization = object.capitalization ?? undefined;
    message.originalFontSize = object.originalFontSize ?? undefined;
    message.fontScaleFactor = object.fontScaleFactor ?? undefined;
    message.textGradientFill = (object.textGradientFill !== undefined && object.textGradientFill !== null)
      ? Graphics_Text_GradientFill.fromPartial(object.textGradientFill)
      : undefined;
    message.shouldPreserveForegroundColor = object.shouldPreserveForegroundColor ?? undefined;
    message.chord = object.chord ?? undefined;
    return message;
  },
};

function createBaseMedia(): Media {
  return {
    uuid: undefined,
    url: undefined,
    metadata: undefined,
    audio: undefined,
    image: undefined,
    video: undefined,
    liveVideo: undefined,
    webContent: undefined,
  };
}

export const Media = {
  encode(message: Media, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(18).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      Media_Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.audio !== undefined) {
      Media_AudioTypeProperties.encode(message.audio, writer.uint32(34).fork()).ldelim();
    }
    if (message.image !== undefined) {
      Media_ImageTypeProperties.encode(message.image, writer.uint32(42).fork()).ldelim();
    }
    if (message.video !== undefined) {
      Media_VideoTypeProperties.encode(message.video, writer.uint32(50).fork()).ldelim();
    }
    if (message.liveVideo !== undefined) {
      Media_LiveVideoTypeProperties.encode(message.liveVideo, writer.uint32(58).fork()).ldelim();
    }
    if (message.webContent !== undefined) {
      Media_WebContentTypeProperties.encode(message.webContent, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = UUID.decode(reader, reader.uint32());
          break;
        case 2:
          message.url = URL.decode(reader, reader.uint32());
          break;
        case 3:
          message.metadata = Media_Metadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.audio = Media_AudioTypeProperties.decode(reader, reader.uint32());
          break;
        case 5:
          message.image = Media_ImageTypeProperties.decode(reader, reader.uint32());
          break;
        case 6:
          message.video = Media_VideoTypeProperties.decode(reader, reader.uint32());
          break;
        case 7:
          message.liveVideo = Media_LiveVideoTypeProperties.decode(reader, reader.uint32());
          break;
        case 8:
          message.webContent = Media_WebContentTypeProperties.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      url: isSet(object.url) ? URL.fromJSON(object.url) : undefined,
      metadata: isSet(object.metadata) ? Media_Metadata.fromJSON(object.metadata) : undefined,
      audio: isSet(object.audio) ? Media_AudioTypeProperties.fromJSON(object.audio) : undefined,
      image: isSet(object.image) ? Media_ImageTypeProperties.fromJSON(object.image) : undefined,
      video: isSet(object.video) ? Media_VideoTypeProperties.fromJSON(object.video) : undefined,
      liveVideo: isSet(object.liveVideo) ? Media_LiveVideoTypeProperties.fromJSON(object.liveVideo) : undefined,
      webContent: isSet(object.webContent) ? Media_WebContentTypeProperties.fromJSON(object.webContent) : undefined,
    };
  },

  toJSON(message: Media): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.url !== undefined && (obj.url = message.url ? URL.toJSON(message.url) : undefined);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? Media_Metadata.toJSON(message.metadata) : undefined);
    message.audio !== undefined &&
      (obj.audio = message.audio ? Media_AudioTypeProperties.toJSON(message.audio) : undefined);
    message.image !== undefined &&
      (obj.image = message.image ? Media_ImageTypeProperties.toJSON(message.image) : undefined);
    message.video !== undefined &&
      (obj.video = message.video ? Media_VideoTypeProperties.toJSON(message.video) : undefined);
    message.liveVideo !== undefined &&
      (obj.liveVideo = message.liveVideo ? Media_LiveVideoTypeProperties.toJSON(message.liveVideo) : undefined);
    message.webContent !== undefined &&
      (obj.webContent = message.webContent ? Media_WebContentTypeProperties.toJSON(message.webContent) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media>, I>>(object: I): Media {
    const message = createBaseMedia();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.url = (object.url !== undefined && object.url !== null) ? URL.fromPartial(object.url) : undefined;
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Media_Metadata.fromPartial(object.metadata)
      : undefined;
    message.audio = (object.audio !== undefined && object.audio !== null)
      ? Media_AudioTypeProperties.fromPartial(object.audio)
      : undefined;
    message.image = (object.image !== undefined && object.image !== null)
      ? Media_ImageTypeProperties.fromPartial(object.image)
      : undefined;
    message.video = (object.video !== undefined && object.video !== null)
      ? Media_VideoTypeProperties.fromPartial(object.video)
      : undefined;
    message.liveVideo = (object.liveVideo !== undefined && object.liveVideo !== null)
      ? Media_LiveVideoTypeProperties.fromPartial(object.liveVideo)
      : undefined;
    message.webContent = (object.webContent !== undefined && object.webContent !== null)
      ? Media_WebContentTypeProperties.fromPartial(object.webContent)
      : undefined;
    return message;
  },
};

function createBaseMedia_Metadata(): Media_Metadata {
  return { manufactureName: "", manufactureUrl: undefined, information: "", artist: "", format: "" };
}

export const Media_Metadata = {
  encode(message: Media_Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.manufactureName !== "") {
      writer.uint32(10).string(message.manufactureName);
    }
    if (message.manufactureUrl !== undefined) {
      URL.encode(message.manufactureUrl, writer.uint32(18).fork()).ldelim();
    }
    if (message.information !== "") {
      writer.uint32(26).string(message.information);
    }
    if (message.artist !== "") {
      writer.uint32(34).string(message.artist);
    }
    if (message.format !== "") {
      writer.uint32(42).string(message.format);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_Metadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.manufactureName = reader.string();
          break;
        case 2:
          message.manufactureUrl = URL.decode(reader, reader.uint32());
          break;
        case 3:
          message.information = reader.string();
          break;
        case 4:
          message.artist = reader.string();
          break;
        case 5:
          message.format = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_Metadata {
    return {
      manufactureName: isSet(object.manufactureName) ? String(object.manufactureName) : "",
      manufactureUrl: isSet(object.manufactureUrl) ? URL.fromJSON(object.manufactureUrl) : undefined,
      information: isSet(object.information) ? String(object.information) : "",
      artist: isSet(object.artist) ? String(object.artist) : "",
      format: isSet(object.format) ? String(object.format) : "",
    };
  },

  toJSON(message: Media_Metadata): unknown {
    const obj: any = {};
    message.manufactureName !== undefined && (obj.manufactureName = message.manufactureName);
    message.manufactureUrl !== undefined &&
      (obj.manufactureUrl = message.manufactureUrl ? URL.toJSON(message.manufactureUrl) : undefined);
    message.information !== undefined && (obj.information = message.information);
    message.artist !== undefined && (obj.artist = message.artist);
    message.format !== undefined && (obj.format = message.format);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_Metadata>, I>>(object: I): Media_Metadata {
    const message = createBaseMedia_Metadata();
    message.manufactureName = object.manufactureName ?? "";
    message.manufactureUrl = (object.manufactureUrl !== undefined && object.manufactureUrl !== null)
      ? URL.fromPartial(object.manufactureUrl)
      : undefined;
    message.information = object.information ?? "";
    message.artist = object.artist ?? "";
    message.format = object.format ?? "";
    return message;
  },
};

function createBaseMedia_VideoDevice(): Media_VideoDevice {
  return { type: 0, name: "", uniqueId: "", modelId: "", formatIndex: 0, audioRouting: undefined };
}

export const Media_VideoDevice = {
  encode(message: Media_VideoDevice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.uniqueId !== "") {
      writer.uint32(26).string(message.uniqueId);
    }
    if (message.modelId !== "") {
      writer.uint32(34).string(message.modelId);
    }
    if (message.formatIndex !== 0) {
      writer.uint32(40).uint32(message.formatIndex);
    }
    if (message.audioRouting !== undefined) {
      DigitalAudio_Device_Routing.encode(message.audioRouting, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_VideoDevice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_VideoDevice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.uniqueId = reader.string();
          break;
        case 4:
          message.modelId = reader.string();
          break;
        case 5:
          message.formatIndex = reader.uint32();
          break;
        case 6:
          message.audioRouting = DigitalAudio_Device_Routing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_VideoDevice {
    return {
      type: isSet(object.type) ? media_VideoDevice_TypeFromJSON(object.type) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      modelId: isSet(object.modelId) ? String(object.modelId) : "",
      formatIndex: isSet(object.formatIndex) ? Number(object.formatIndex) : 0,
      audioRouting: isSet(object.audioRouting) ? DigitalAudio_Device_Routing.fromJSON(object.audioRouting) : undefined,
    };
  },

  toJSON(message: Media_VideoDevice): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = media_VideoDevice_TypeToJSON(message.type));
    message.name !== undefined && (obj.name = message.name);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.modelId !== undefined && (obj.modelId = message.modelId);
    message.formatIndex !== undefined && (obj.formatIndex = Math.round(message.formatIndex));
    message.audioRouting !== undefined &&
      (obj.audioRouting = message.audioRouting ? DigitalAudio_Device_Routing.toJSON(message.audioRouting) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_VideoDevice>, I>>(object: I): Media_VideoDevice {
    const message = createBaseMedia_VideoDevice();
    message.type = object.type ?? 0;
    message.name = object.name ?? "";
    message.uniqueId = object.uniqueId ?? "";
    message.modelId = object.modelId ?? "";
    message.formatIndex = object.formatIndex ?? 0;
    message.audioRouting = (object.audioRouting !== undefined && object.audioRouting !== null)
      ? DigitalAudio_Device_Routing.fromPartial(object.audioRouting)
      : undefined;
    return message;
  },
};

function createBaseMedia_AudioDevice(): Media_AudioDevice {
  return { name: "", uniqueId: "", modelId: "", channelCount: 0 };
}

export const Media_AudioDevice = {
  encode(message: Media_AudioDevice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.uniqueId !== "") {
      writer.uint32(18).string(message.uniqueId);
    }
    if (message.modelId !== "") {
      writer.uint32(26).string(message.modelId);
    }
    if (message.channelCount !== 0) {
      writer.uint32(32).uint32(message.channelCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_AudioDevice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_AudioDevice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.uniqueId = reader.string();
          break;
        case 3:
          message.modelId = reader.string();
          break;
        case 4:
          message.channelCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_AudioDevice {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : "",
      modelId: isSet(object.modelId) ? String(object.modelId) : "",
      channelCount: isSet(object.channelCount) ? Number(object.channelCount) : 0,
    };
  },

  toJSON(message: Media_AudioDevice): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.modelId !== undefined && (obj.modelId = message.modelId);
    message.channelCount !== undefined && (obj.channelCount = Math.round(message.channelCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_AudioDevice>, I>>(object: I): Media_AudioDevice {
    const message = createBaseMedia_AudioDevice();
    message.name = object.name ?? "";
    message.uniqueId = object.uniqueId ?? "";
    message.modelId = object.modelId ?? "";
    message.channelCount = object.channelCount ?? 0;
    return message;
  },
};

function createBaseMedia_Audio(): Media_Audio {
  return {};
}

export const Media_Audio = {
  encode(_: Media_Audio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_Audio {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_Audio();
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

  fromJSON(_: any): Media_Audio {
    return {};
  },

  toJSON(_: Media_Audio): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_Audio>, I>>(_: I): Media_Audio {
    const message = createBaseMedia_Audio();
    return message;
  },
};

function createBaseMedia_Audio_Channel(): Media_Audio_Channel {
  return { index: 0, muted: false, volume: 0, compressLimit: false, outputs: [] };
}

export const Media_Audio_Channel = {
  encode(message: Media_Audio_Channel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.muted === true) {
      writer.uint32(16).bool(message.muted);
    }
    if (message.volume !== 0) {
      writer.uint32(25).double(message.volume);
    }
    if (message.compressLimit === true) {
      writer.uint32(32).bool(message.compressLimit);
    }
    for (const v of message.outputs) {
      Media_Audio_Channel_Output.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_Audio_Channel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_Audio_Channel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.muted = reader.bool();
          break;
        case 3:
          message.volume = reader.double();
          break;
        case 4:
          message.compressLimit = reader.bool();
          break;
        case 5:
          message.outputs.push(Media_Audio_Channel_Output.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_Audio_Channel {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      muted: isSet(object.muted) ? Boolean(object.muted) : false,
      volume: isSet(object.volume) ? Number(object.volume) : 0,
      compressLimit: isSet(object.compressLimit) ? Boolean(object.compressLimit) : false,
      outputs: Array.isArray(object?.outputs)
        ? object.outputs.map((e: any) => Media_Audio_Channel_Output.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Media_Audio_Channel): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.muted !== undefined && (obj.muted = message.muted);
    message.volume !== undefined && (obj.volume = message.volume);
    message.compressLimit !== undefined && (obj.compressLimit = message.compressLimit);
    if (message.outputs) {
      obj.outputs = message.outputs.map((e) => e ? Media_Audio_Channel_Output.toJSON(e) : undefined);
    } else {
      obj.outputs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_Audio_Channel>, I>>(object: I): Media_Audio_Channel {
    const message = createBaseMedia_Audio_Channel();
    message.index = object.index ?? 0;
    message.muted = object.muted ?? false;
    message.volume = object.volume ?? 0;
    message.compressLimit = object.compressLimit ?? false;
    message.outputs = object.outputs?.map((e) => Media_Audio_Channel_Output.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMedia_Audio_Channel_Output(): Media_Audio_Channel_Output {
  return { channelIndex: 0 };
}

export const Media_Audio_Channel_Output = {
  encode(message: Media_Audio_Channel_Output, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelIndex !== 0) {
      writer.uint32(16).int32(message.channelIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_Audio_Channel_Output {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_Audio_Channel_Output();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channelIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_Audio_Channel_Output {
    return { channelIndex: isSet(object.channelIndex) ? Number(object.channelIndex) : 0 };
  },

  toJSON(message: Media_Audio_Channel_Output): unknown {
    const obj: any = {};
    message.channelIndex !== undefined && (obj.channelIndex = Math.round(message.channelIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_Audio_Channel_Output>, I>>(object: I): Media_Audio_Channel_Output {
    const message = createBaseMedia_Audio_Channel_Output();
    message.channelIndex = object.channelIndex ?? 0;
    return message;
  },
};

function createBaseMedia_AudioProperties(): Media_AudioProperties {
  return { volume: 0, audioChannels: [], isCustomMapping: false };
}

export const Media_AudioProperties = {
  encode(message: Media_AudioProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.volume !== 0) {
      writer.uint32(9).double(message.volume);
    }
    for (const v of message.audioChannels) {
      Media_Audio_Channel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.isCustomMapping === true) {
      writer.uint32(24).bool(message.isCustomMapping);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_AudioProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_AudioProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume = reader.double();
          break;
        case 2:
          message.audioChannels.push(Media_Audio_Channel.decode(reader, reader.uint32()));
          break;
        case 3:
          message.isCustomMapping = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_AudioProperties {
    return {
      volume: isSet(object.volume) ? Number(object.volume) : 0,
      audioChannels: Array.isArray(object?.audioChannels)
        ? object.audioChannels.map((e: any) => Media_Audio_Channel.fromJSON(e))
        : [],
      isCustomMapping: isSet(object.isCustomMapping) ? Boolean(object.isCustomMapping) : false,
    };
  },

  toJSON(message: Media_AudioProperties): unknown {
    const obj: any = {};
    message.volume !== undefined && (obj.volume = message.volume);
    if (message.audioChannels) {
      obj.audioChannels = message.audioChannels.map((e) => e ? Media_Audio_Channel.toJSON(e) : undefined);
    } else {
      obj.audioChannels = [];
    }
    message.isCustomMapping !== undefined && (obj.isCustomMapping = message.isCustomMapping);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_AudioProperties>, I>>(object: I): Media_AudioProperties {
    const message = createBaseMedia_AudioProperties();
    message.volume = object.volume ?? 0;
    message.audioChannels = object.audioChannels?.map((e) => Media_Audio_Channel.fromPartial(e)) || [];
    message.isCustomMapping = object.isCustomMapping ?? false;
    return message;
  },
};

function createBaseMedia_TransportProperties(): Media_TransportProperties {
  return {
    playRate: 0,
    inPoint: 0,
    outPoint: 0,
    fadeInDuration: 0,
    fadeOutDuration: 0,
    shouldFadeIn: false,
    shouldFadeOut: false,
    endPoint: 0,
    playbackBehavior: 0,
    loopTime: 0,
    timesToLoop: 0,
  };
}

export const Media_TransportProperties = {
  encode(message: Media_TransportProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playRate !== 0) {
      writer.uint32(9).double(message.playRate);
    }
    if (message.inPoint !== 0) {
      writer.uint32(17).double(message.inPoint);
    }
    if (message.outPoint !== 0) {
      writer.uint32(25).double(message.outPoint);
    }
    if (message.fadeInDuration !== 0) {
      writer.uint32(57).double(message.fadeInDuration);
    }
    if (message.fadeOutDuration !== 0) {
      writer.uint32(65).double(message.fadeOutDuration);
    }
    if (message.shouldFadeIn === true) {
      writer.uint32(72).bool(message.shouldFadeIn);
    }
    if (message.shouldFadeOut === true) {
      writer.uint32(80).bool(message.shouldFadeOut);
    }
    if (message.endPoint !== 0) {
      writer.uint32(89).double(message.endPoint);
    }
    if (message.playbackBehavior !== 0) {
      writer.uint32(96).int32(message.playbackBehavior);
    }
    if (message.loopTime !== 0) {
      writer.uint32(105).double(message.loopTime);
    }
    if (message.timesToLoop !== 0) {
      writer.uint32(112).uint32(message.timesToLoop);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_TransportProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_TransportProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playRate = reader.double();
          break;
        case 2:
          message.inPoint = reader.double();
          break;
        case 3:
          message.outPoint = reader.double();
          break;
        case 7:
          message.fadeInDuration = reader.double();
          break;
        case 8:
          message.fadeOutDuration = reader.double();
          break;
        case 9:
          message.shouldFadeIn = reader.bool();
          break;
        case 10:
          message.shouldFadeOut = reader.bool();
          break;
        case 11:
          message.endPoint = reader.double();
          break;
        case 12:
          message.playbackBehavior = reader.int32() as any;
          break;
        case 13:
          message.loopTime = reader.double();
          break;
        case 14:
          message.timesToLoop = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_TransportProperties {
    return {
      playRate: isSet(object.playRate) ? Number(object.playRate) : 0,
      inPoint: isSet(object.inPoint) ? Number(object.inPoint) : 0,
      outPoint: isSet(object.outPoint) ? Number(object.outPoint) : 0,
      fadeInDuration: isSet(object.fadeInDuration) ? Number(object.fadeInDuration) : 0,
      fadeOutDuration: isSet(object.fadeOutDuration) ? Number(object.fadeOutDuration) : 0,
      shouldFadeIn: isSet(object.shouldFadeIn) ? Boolean(object.shouldFadeIn) : false,
      shouldFadeOut: isSet(object.shouldFadeOut) ? Boolean(object.shouldFadeOut) : false,
      endPoint: isSet(object.endPoint) ? Number(object.endPoint) : 0,
      playbackBehavior: isSet(object.playbackBehavior)
        ? media_TransportProperties_PlaybackBehaviorFromJSON(object.playbackBehavior)
        : 0,
      loopTime: isSet(object.loopTime) ? Number(object.loopTime) : 0,
      timesToLoop: isSet(object.timesToLoop) ? Number(object.timesToLoop) : 0,
    };
  },

  toJSON(message: Media_TransportProperties): unknown {
    const obj: any = {};
    message.playRate !== undefined && (obj.playRate = message.playRate);
    message.inPoint !== undefined && (obj.inPoint = message.inPoint);
    message.outPoint !== undefined && (obj.outPoint = message.outPoint);
    message.fadeInDuration !== undefined && (obj.fadeInDuration = message.fadeInDuration);
    message.fadeOutDuration !== undefined && (obj.fadeOutDuration = message.fadeOutDuration);
    message.shouldFadeIn !== undefined && (obj.shouldFadeIn = message.shouldFadeIn);
    message.shouldFadeOut !== undefined && (obj.shouldFadeOut = message.shouldFadeOut);
    message.endPoint !== undefined && (obj.endPoint = message.endPoint);
    message.playbackBehavior !== undefined &&
      (obj.playbackBehavior = media_TransportProperties_PlaybackBehaviorToJSON(message.playbackBehavior));
    message.loopTime !== undefined && (obj.loopTime = message.loopTime);
    message.timesToLoop !== undefined && (obj.timesToLoop = Math.round(message.timesToLoop));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_TransportProperties>, I>>(object: I): Media_TransportProperties {
    const message = createBaseMedia_TransportProperties();
    message.playRate = object.playRate ?? 0;
    message.inPoint = object.inPoint ?? 0;
    message.outPoint = object.outPoint ?? 0;
    message.fadeInDuration = object.fadeInDuration ?? 0;
    message.fadeOutDuration = object.fadeOutDuration ?? 0;
    message.shouldFadeIn = object.shouldFadeIn ?? false;
    message.shouldFadeOut = object.shouldFadeOut ?? false;
    message.endPoint = object.endPoint ?? 0;
    message.playbackBehavior = object.playbackBehavior ?? 0;
    message.loopTime = object.loopTime ?? 0;
    message.timesToLoop = object.timesToLoop ?? 0;
    return message;
  },
};

function createBaseMedia_DrawingProperties(): Media_DrawingProperties {
  return {
    scaleBehavior: 0,
    scaleAlignment: 0,
    flippedHorizontally: false,
    flippedVertically: false,
    naturalSize: undefined,
    customImageRotation: 0,
    customImageBounds: undefined,
    customImageAspectLocked: false,
    alphaInverted: false,
    nativeRotation: 0,
    selectedEffectPresetUuid: undefined,
    effects: [],
    cropEnable: false,
    cropInsets: undefined,
  };
}

export const Media_DrawingProperties = {
  encode(message: Media_DrawingProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scaleBehavior !== 0) {
      writer.uint32(8).int32(message.scaleBehavior);
    }
    if (message.scaleAlignment !== 0) {
      writer.uint32(16).int32(message.scaleAlignment);
    }
    if (message.flippedHorizontally === true) {
      writer.uint32(24).bool(message.flippedHorizontally);
    }
    if (message.flippedVertically === true) {
      writer.uint32(32).bool(message.flippedVertically);
    }
    if (message.naturalSize !== undefined) {
      Graphics_Size.encode(message.naturalSize, writer.uint32(42).fork()).ldelim();
    }
    if (message.customImageRotation !== 0) {
      writer.uint32(49).double(message.customImageRotation);
    }
    if (message.customImageBounds !== undefined) {
      Graphics_Rect.encode(message.customImageBounds, writer.uint32(58).fork()).ldelim();
    }
    if (message.customImageAspectLocked === true) {
      writer.uint32(64).bool(message.customImageAspectLocked);
    }
    if (message.alphaInverted === true) {
      writer.uint32(72).bool(message.alphaInverted);
    }
    if (message.nativeRotation !== 0) {
      writer.uint32(80).int32(message.nativeRotation);
    }
    if (message.selectedEffectPresetUuid !== undefined) {
      UUID.encode(message.selectedEffectPresetUuid, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.effects) {
      Effect.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.cropEnable === true) {
      writer.uint32(104).bool(message.cropEnable);
    }
    if (message.cropInsets !== undefined) {
      Graphics_EdgeInsets.encode(message.cropInsets, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_DrawingProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_DrawingProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scaleBehavior = reader.int32() as any;
          break;
        case 2:
          message.scaleAlignment = reader.int32() as any;
          break;
        case 3:
          message.flippedHorizontally = reader.bool();
          break;
        case 4:
          message.flippedVertically = reader.bool();
          break;
        case 5:
          message.naturalSize = Graphics_Size.decode(reader, reader.uint32());
          break;
        case 6:
          message.customImageRotation = reader.double();
          break;
        case 7:
          message.customImageBounds = Graphics_Rect.decode(reader, reader.uint32());
          break;
        case 8:
          message.customImageAspectLocked = reader.bool();
          break;
        case 9:
          message.alphaInverted = reader.bool();
          break;
        case 10:
          message.nativeRotation = reader.int32() as any;
          break;
        case 11:
          message.selectedEffectPresetUuid = UUID.decode(reader, reader.uint32());
          break;
        case 12:
          message.effects.push(Effect.decode(reader, reader.uint32()));
          break;
        case 13:
          message.cropEnable = reader.bool();
          break;
        case 14:
          message.cropInsets = Graphics_EdgeInsets.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_DrawingProperties {
    return {
      scaleBehavior: isSet(object.scaleBehavior)
        ? media_DrawingProperties_ScaleBehaviorFromJSON(object.scaleBehavior)
        : 0,
      scaleAlignment: isSet(object.scaleAlignment)
        ? media_DrawingProperties_ScaleAlignmentFromJSON(object.scaleAlignment)
        : 0,
      flippedHorizontally: isSet(object.flippedHorizontally) ? Boolean(object.flippedHorizontally) : false,
      flippedVertically: isSet(object.flippedVertically) ? Boolean(object.flippedVertically) : false,
      naturalSize: isSet(object.naturalSize) ? Graphics_Size.fromJSON(object.naturalSize) : undefined,
      customImageRotation: isSet(object.customImageRotation) ? Number(object.customImageRotation) : 0,
      customImageBounds: isSet(object.customImageBounds) ? Graphics_Rect.fromJSON(object.customImageBounds) : undefined,
      customImageAspectLocked: isSet(object.customImageAspectLocked) ? Boolean(object.customImageAspectLocked) : false,
      alphaInverted: isSet(object.alphaInverted) ? Boolean(object.alphaInverted) : false,
      nativeRotation: isSet(object.nativeRotation)
        ? media_DrawingProperties_NativeRotationTypeFromJSON(object.nativeRotation)
        : 0,
      selectedEffectPresetUuid: isSet(object.selectedEffectPresetUuid)
        ? UUID.fromJSON(object.selectedEffectPresetUuid)
        : undefined,
      effects: Array.isArray(object?.effects)
        ? object.effects.map((e: any) => Effect.fromJSON(e))
        : [],
      cropEnable: isSet(object.cropEnable) ? Boolean(object.cropEnable) : false,
      cropInsets: isSet(object.cropInsets) ? Graphics_EdgeInsets.fromJSON(object.cropInsets) : undefined,
    };
  },

  toJSON(message: Media_DrawingProperties): unknown {
    const obj: any = {};
    message.scaleBehavior !== undefined &&
      (obj.scaleBehavior = media_DrawingProperties_ScaleBehaviorToJSON(message.scaleBehavior));
    message.scaleAlignment !== undefined &&
      (obj.scaleAlignment = media_DrawingProperties_ScaleAlignmentToJSON(message.scaleAlignment));
    message.flippedHorizontally !== undefined && (obj.flippedHorizontally = message.flippedHorizontally);
    message.flippedVertically !== undefined && (obj.flippedVertically = message.flippedVertically);
    message.naturalSize !== undefined &&
      (obj.naturalSize = message.naturalSize ? Graphics_Size.toJSON(message.naturalSize) : undefined);
    message.customImageRotation !== undefined && (obj.customImageRotation = message.customImageRotation);
    message.customImageBounds !== undefined &&
      (obj.customImageBounds = message.customImageBounds ? Graphics_Rect.toJSON(message.customImageBounds) : undefined);
    message.customImageAspectLocked !== undefined && (obj.customImageAspectLocked = message.customImageAspectLocked);
    message.alphaInverted !== undefined && (obj.alphaInverted = message.alphaInverted);
    message.nativeRotation !== undefined &&
      (obj.nativeRotation = media_DrawingProperties_NativeRotationTypeToJSON(message.nativeRotation));
    message.selectedEffectPresetUuid !== undefined && (obj.selectedEffectPresetUuid = message.selectedEffectPresetUuid
      ? UUID.toJSON(message.selectedEffectPresetUuid)
      : undefined);
    if (message.effects) {
      obj.effects = message.effects.map((e) => e ? Effect.toJSON(e) : undefined);
    } else {
      obj.effects = [];
    }
    message.cropEnable !== undefined && (obj.cropEnable = message.cropEnable);
    message.cropInsets !== undefined &&
      (obj.cropInsets = message.cropInsets ? Graphics_EdgeInsets.toJSON(message.cropInsets) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_DrawingProperties>, I>>(object: I): Media_DrawingProperties {
    const message = createBaseMedia_DrawingProperties();
    message.scaleBehavior = object.scaleBehavior ?? 0;
    message.scaleAlignment = object.scaleAlignment ?? 0;
    message.flippedHorizontally = object.flippedHorizontally ?? false;
    message.flippedVertically = object.flippedVertically ?? false;
    message.naturalSize = (object.naturalSize !== undefined && object.naturalSize !== null)
      ? Graphics_Size.fromPartial(object.naturalSize)
      : undefined;
    message.customImageRotation = object.customImageRotation ?? 0;
    message.customImageBounds = (object.customImageBounds !== undefined && object.customImageBounds !== null)
      ? Graphics_Rect.fromPartial(object.customImageBounds)
      : undefined;
    message.customImageAspectLocked = object.customImageAspectLocked ?? false;
    message.alphaInverted = object.alphaInverted ?? false;
    message.nativeRotation = object.nativeRotation ?? 0;
    message.selectedEffectPresetUuid =
      (object.selectedEffectPresetUuid !== undefined && object.selectedEffectPresetUuid !== null)
        ? UUID.fromPartial(object.selectedEffectPresetUuid)
        : undefined;
    message.effects = object.effects?.map((e) => Effect.fromPartial(e)) || [];
    message.cropEnable = object.cropEnable ?? false;
    message.cropInsets = (object.cropInsets !== undefined && object.cropInsets !== null)
      ? Graphics_EdgeInsets.fromPartial(object.cropInsets)
      : undefined;
    return message;
  },
};

function createBaseMedia_VideoProperties(): Media_VideoProperties {
  return { frameRate: 0, fieldType: 0, thumbnailPosition: 0, endBehavior: 0, softLoop: false, softLoopDuration: 0 };
}

export const Media_VideoProperties = {
  encode(message: Media_VideoProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.frameRate !== 0) {
      writer.uint32(9).double(message.frameRate);
    }
    if (message.fieldType !== 0) {
      writer.uint32(16).int32(message.fieldType);
    }
    if (message.thumbnailPosition !== 0) {
      writer.uint32(25).double(message.thumbnailPosition);
    }
    if (message.endBehavior !== 0) {
      writer.uint32(32).int32(message.endBehavior);
    }
    if (message.softLoop === true) {
      writer.uint32(40).bool(message.softLoop);
    }
    if (message.softLoopDuration !== 0) {
      writer.uint32(49).double(message.softLoopDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_VideoProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_VideoProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.frameRate = reader.double();
          break;
        case 2:
          message.fieldType = reader.int32() as any;
          break;
        case 3:
          message.thumbnailPosition = reader.double();
          break;
        case 4:
          message.endBehavior = reader.int32() as any;
          break;
        case 5:
          message.softLoop = reader.bool();
          break;
        case 6:
          message.softLoopDuration = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_VideoProperties {
    return {
      frameRate: isSet(object.frameRate) ? Number(object.frameRate) : 0,
      fieldType: isSet(object.fieldType) ? media_VideoProperties_FieldTypeFromJSON(object.fieldType) : 0,
      thumbnailPosition: isSet(object.thumbnailPosition) ? Number(object.thumbnailPosition) : 0,
      endBehavior: isSet(object.endBehavior) ? media_VideoProperties_EndBehaviorFromJSON(object.endBehavior) : 0,
      softLoop: isSet(object.softLoop) ? Boolean(object.softLoop) : false,
      softLoopDuration: isSet(object.softLoopDuration) ? Number(object.softLoopDuration) : 0,
    };
  },

  toJSON(message: Media_VideoProperties): unknown {
    const obj: any = {};
    message.frameRate !== undefined && (obj.frameRate = message.frameRate);
    message.fieldType !== undefined && (obj.fieldType = media_VideoProperties_FieldTypeToJSON(message.fieldType));
    message.thumbnailPosition !== undefined && (obj.thumbnailPosition = message.thumbnailPosition);
    message.endBehavior !== undefined &&
      (obj.endBehavior = media_VideoProperties_EndBehaviorToJSON(message.endBehavior));
    message.softLoop !== undefined && (obj.softLoop = message.softLoop);
    message.softLoopDuration !== undefined && (obj.softLoopDuration = message.softLoopDuration);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_VideoProperties>, I>>(object: I): Media_VideoProperties {
    const message = createBaseMedia_VideoProperties();
    message.frameRate = object.frameRate ?? 0;
    message.fieldType = object.fieldType ?? 0;
    message.thumbnailPosition = object.thumbnailPosition ?? 0;
    message.endBehavior = object.endBehavior ?? 0;
    message.softLoop = object.softLoop ?? false;
    message.softLoopDuration = object.softLoopDuration ?? 0;
    return message;
  },
};

function createBaseMedia_LiveVideoProperties(): Media_LiveVideoProperties {
  return { videoDevice: undefined, audioDevice: undefined, liveVideoIndex: 0 };
}

export const Media_LiveVideoProperties = {
  encode(message: Media_LiveVideoProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.videoDevice !== undefined) {
      Media_VideoDevice.encode(message.videoDevice, writer.uint32(10).fork()).ldelim();
    }
    if (message.audioDevice !== undefined) {
      Media_AudioDevice.encode(message.audioDevice, writer.uint32(18).fork()).ldelim();
    }
    if (message.liveVideoIndex !== 0) {
      writer.uint32(24).int32(message.liveVideoIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_LiveVideoProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_LiveVideoProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.videoDevice = Media_VideoDevice.decode(reader, reader.uint32());
          break;
        case 2:
          message.audioDevice = Media_AudioDevice.decode(reader, reader.uint32());
          break;
        case 3:
          message.liveVideoIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_LiveVideoProperties {
    return {
      videoDevice: isSet(object.videoDevice) ? Media_VideoDevice.fromJSON(object.videoDevice) : undefined,
      audioDevice: isSet(object.audioDevice) ? Media_AudioDevice.fromJSON(object.audioDevice) : undefined,
      liveVideoIndex: isSet(object.liveVideoIndex) ? Number(object.liveVideoIndex) : 0,
    };
  },

  toJSON(message: Media_LiveVideoProperties): unknown {
    const obj: any = {};
    message.videoDevice !== undefined &&
      (obj.videoDevice = message.videoDevice ? Media_VideoDevice.toJSON(message.videoDevice) : undefined);
    message.audioDevice !== undefined &&
      (obj.audioDevice = message.audioDevice ? Media_AudioDevice.toJSON(message.audioDevice) : undefined);
    message.liveVideoIndex !== undefined && (obj.liveVideoIndex = Math.round(message.liveVideoIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_LiveVideoProperties>, I>>(object: I): Media_LiveVideoProperties {
    const message = createBaseMedia_LiveVideoProperties();
    message.videoDevice = (object.videoDevice !== undefined && object.videoDevice !== null)
      ? Media_VideoDevice.fromPartial(object.videoDevice)
      : undefined;
    message.audioDevice = (object.audioDevice !== undefined && object.audioDevice !== null)
      ? Media_AudioDevice.fromPartial(object.audioDevice)
      : undefined;
    message.liveVideoIndex = object.liveVideoIndex ?? 0;
    return message;
  },
};

function createBaseMedia_AudioTypeProperties(): Media_AudioTypeProperties {
  return { audio: undefined, transport: undefined };
}

export const Media_AudioTypeProperties = {
  encode(message: Media_AudioTypeProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audio !== undefined) {
      Media_AudioProperties.encode(message.audio, writer.uint32(10).fork()).ldelim();
    }
    if (message.transport !== undefined) {
      Media_TransportProperties.encode(message.transport, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_AudioTypeProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_AudioTypeProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.audio = Media_AudioProperties.decode(reader, reader.uint32());
          break;
        case 2:
          message.transport = Media_TransportProperties.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_AudioTypeProperties {
    return {
      audio: isSet(object.audio) ? Media_AudioProperties.fromJSON(object.audio) : undefined,
      transport: isSet(object.transport) ? Media_TransportProperties.fromJSON(object.transport) : undefined,
    };
  },

  toJSON(message: Media_AudioTypeProperties): unknown {
    const obj: any = {};
    message.audio !== undefined &&
      (obj.audio = message.audio ? Media_AudioProperties.toJSON(message.audio) : undefined);
    message.transport !== undefined &&
      (obj.transport = message.transport ? Media_TransportProperties.toJSON(message.transport) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_AudioTypeProperties>, I>>(object: I): Media_AudioTypeProperties {
    const message = createBaseMedia_AudioTypeProperties();
    message.audio = (object.audio !== undefined && object.audio !== null)
      ? Media_AudioProperties.fromPartial(object.audio)
      : undefined;
    message.transport = (object.transport !== undefined && object.transport !== null)
      ? Media_TransportProperties.fromPartial(object.transport)
      : undefined;
    return message;
  },
};

function createBaseMedia_ImageTypeProperties(): Media_ImageTypeProperties {
  return { drawing: undefined };
}

export const Media_ImageTypeProperties = {
  encode(message: Media_ImageTypeProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.drawing !== undefined) {
      Media_DrawingProperties.encode(message.drawing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_ImageTypeProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_ImageTypeProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.drawing = Media_DrawingProperties.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_ImageTypeProperties {
    return { drawing: isSet(object.drawing) ? Media_DrawingProperties.fromJSON(object.drawing) : undefined };
  },

  toJSON(message: Media_ImageTypeProperties): unknown {
    const obj: any = {};
    message.drawing !== undefined &&
      (obj.drawing = message.drawing ? Media_DrawingProperties.toJSON(message.drawing) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_ImageTypeProperties>, I>>(object: I): Media_ImageTypeProperties {
    const message = createBaseMedia_ImageTypeProperties();
    message.drawing = (object.drawing !== undefined && object.drawing !== null)
      ? Media_DrawingProperties.fromPartial(object.drawing)
      : undefined;
    return message;
  },
};

function createBaseMedia_VideoTypeProperties(): Media_VideoTypeProperties {
  return { drawing: undefined, audio: undefined, transport: undefined, video: undefined };
}

export const Media_VideoTypeProperties = {
  encode(message: Media_VideoTypeProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.drawing !== undefined) {
      Media_DrawingProperties.encode(message.drawing, writer.uint32(10).fork()).ldelim();
    }
    if (message.audio !== undefined) {
      Media_AudioProperties.encode(message.audio, writer.uint32(18).fork()).ldelim();
    }
    if (message.transport !== undefined) {
      Media_TransportProperties.encode(message.transport, writer.uint32(26).fork()).ldelim();
    }
    if (message.video !== undefined) {
      Media_VideoProperties.encode(message.video, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_VideoTypeProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_VideoTypeProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.drawing = Media_DrawingProperties.decode(reader, reader.uint32());
          break;
        case 2:
          message.audio = Media_AudioProperties.decode(reader, reader.uint32());
          break;
        case 3:
          message.transport = Media_TransportProperties.decode(reader, reader.uint32());
          break;
        case 4:
          message.video = Media_VideoProperties.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_VideoTypeProperties {
    return {
      drawing: isSet(object.drawing) ? Media_DrawingProperties.fromJSON(object.drawing) : undefined,
      audio: isSet(object.audio) ? Media_AudioProperties.fromJSON(object.audio) : undefined,
      transport: isSet(object.transport) ? Media_TransportProperties.fromJSON(object.transport) : undefined,
      video: isSet(object.video) ? Media_VideoProperties.fromJSON(object.video) : undefined,
    };
  },

  toJSON(message: Media_VideoTypeProperties): unknown {
    const obj: any = {};
    message.drawing !== undefined &&
      (obj.drawing = message.drawing ? Media_DrawingProperties.toJSON(message.drawing) : undefined);
    message.audio !== undefined &&
      (obj.audio = message.audio ? Media_AudioProperties.toJSON(message.audio) : undefined);
    message.transport !== undefined &&
      (obj.transport = message.transport ? Media_TransportProperties.toJSON(message.transport) : undefined);
    message.video !== undefined &&
      (obj.video = message.video ? Media_VideoProperties.toJSON(message.video) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_VideoTypeProperties>, I>>(object: I): Media_VideoTypeProperties {
    const message = createBaseMedia_VideoTypeProperties();
    message.drawing = (object.drawing !== undefined && object.drawing !== null)
      ? Media_DrawingProperties.fromPartial(object.drawing)
      : undefined;
    message.audio = (object.audio !== undefined && object.audio !== null)
      ? Media_AudioProperties.fromPartial(object.audio)
      : undefined;
    message.transport = (object.transport !== undefined && object.transport !== null)
      ? Media_TransportProperties.fromPartial(object.transport)
      : undefined;
    message.video = (object.video !== undefined && object.video !== null)
      ? Media_VideoProperties.fromPartial(object.video)
      : undefined;
    return message;
  },
};

function createBaseMedia_LiveVideoTypeProperties(): Media_LiveVideoTypeProperties {
  return { drawing: undefined, audio: undefined, liveVideo: undefined };
}

export const Media_LiveVideoTypeProperties = {
  encode(message: Media_LiveVideoTypeProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.drawing !== undefined) {
      Media_DrawingProperties.encode(message.drawing, writer.uint32(10).fork()).ldelim();
    }
    if (message.audio !== undefined) {
      Media_AudioProperties.encode(message.audio, writer.uint32(18).fork()).ldelim();
    }
    if (message.liveVideo !== undefined) {
      Media_LiveVideoProperties.encode(message.liveVideo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_LiveVideoTypeProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_LiveVideoTypeProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.drawing = Media_DrawingProperties.decode(reader, reader.uint32());
          break;
        case 2:
          message.audio = Media_AudioProperties.decode(reader, reader.uint32());
          break;
        case 3:
          message.liveVideo = Media_LiveVideoProperties.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_LiveVideoTypeProperties {
    return {
      drawing: isSet(object.drawing) ? Media_DrawingProperties.fromJSON(object.drawing) : undefined,
      audio: isSet(object.audio) ? Media_AudioProperties.fromJSON(object.audio) : undefined,
      liveVideo: isSet(object.liveVideo) ? Media_LiveVideoProperties.fromJSON(object.liveVideo) : undefined,
    };
  },

  toJSON(message: Media_LiveVideoTypeProperties): unknown {
    const obj: any = {};
    message.drawing !== undefined &&
      (obj.drawing = message.drawing ? Media_DrawingProperties.toJSON(message.drawing) : undefined);
    message.audio !== undefined &&
      (obj.audio = message.audio ? Media_AudioProperties.toJSON(message.audio) : undefined);
    message.liveVideo !== undefined &&
      (obj.liveVideo = message.liveVideo ? Media_LiveVideoProperties.toJSON(message.liveVideo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_LiveVideoTypeProperties>, I>>(
    object: I,
  ): Media_LiveVideoTypeProperties {
    const message = createBaseMedia_LiveVideoTypeProperties();
    message.drawing = (object.drawing !== undefined && object.drawing !== null)
      ? Media_DrawingProperties.fromPartial(object.drawing)
      : undefined;
    message.audio = (object.audio !== undefined && object.audio !== null)
      ? Media_AudioProperties.fromPartial(object.audio)
      : undefined;
    message.liveVideo = (object.liveVideo !== undefined && object.liveVideo !== null)
      ? Media_LiveVideoProperties.fromPartial(object.liveVideo)
      : undefined;
    return message;
  },
};

function createBaseMedia_WebContentTypeProperties(): Media_WebContentTypeProperties {
  return { drawing: undefined, url: undefined };
}

export const Media_WebContentTypeProperties = {
  encode(message: Media_WebContentTypeProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.drawing !== undefined) {
      Media_DrawingProperties.encode(message.drawing, writer.uint32(10).fork()).ldelim();
    }
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_WebContentTypeProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_WebContentTypeProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.drawing = Media_DrawingProperties.decode(reader, reader.uint32());
          break;
        case 2:
          message.url = URL.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Media_WebContentTypeProperties {
    return {
      drawing: isSet(object.drawing) ? Media_DrawingProperties.fromJSON(object.drawing) : undefined,
      url: isSet(object.url) ? URL.fromJSON(object.url) : undefined,
    };
  },

  toJSON(message: Media_WebContentTypeProperties): unknown {
    const obj: any = {};
    message.drawing !== undefined &&
      (obj.drawing = message.drawing ? Media_DrawingProperties.toJSON(message.drawing) : undefined);
    message.url !== undefined && (obj.url = message.url ? URL.toJSON(message.url) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Media_WebContentTypeProperties>, I>>(
    object: I,
  ): Media_WebContentTypeProperties {
    const message = createBaseMedia_WebContentTypeProperties();
    message.drawing = (object.drawing !== undefined && object.drawing !== null)
      ? Media_DrawingProperties.fromPartial(object.drawing)
      : undefined;
    message.url = (object.url !== undefined && object.url !== null) ? URL.fromPartial(object.url) : undefined;
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
