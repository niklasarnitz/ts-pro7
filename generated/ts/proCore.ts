/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { URL } from "./basicTypes";
import { Effect } from "./effects";
import { Graphics_EdgeInsets, Media_AudioProperties } from "./graphicsData";
import { AudioInput, VideoInput } from "./input";
import { Recording_Stream } from "./recording";

export const protobufPackage = "rv.data";

export interface MediaMetadataRequestInfo {
  filePath: string;
  time: number;
  width: number;
  height: number;
  effects: Effect[];
  cropInsets: Graphics_EdgeInsets | undefined;
  nativeRotation: MediaMetadataRequestInfo_NativeRotationType;
  flippedHorizontally: boolean;
  flippedVertically: boolean;
}

export enum MediaMetadataRequestInfo_NativeRotationType {
  NATIVE_ROTATION_TYPE_ROTATE_STANDARD = 0,
  NATIVE_ROTATION_TYPE_ROTATE_90 = 90,
  NATIVE_ROTATION_TYPE_ROTATE_180 = 180,
  NATIVE_ROTATION_TYPE_ROTATE_270 = 270,
  UNRECOGNIZED = -1,
}

export function mediaMetadataRequestInfo_NativeRotationTypeFromJSON(
  object: any,
): MediaMetadataRequestInfo_NativeRotationType {
  switch (object) {
    case 0:
    case "NATIVE_ROTATION_TYPE_ROTATE_STANDARD":
      return MediaMetadataRequestInfo_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_STANDARD;
    case 90:
    case "NATIVE_ROTATION_TYPE_ROTATE_90":
      return MediaMetadataRequestInfo_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_90;
    case 180:
    case "NATIVE_ROTATION_TYPE_ROTATE_180":
      return MediaMetadataRequestInfo_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_180;
    case 270:
    case "NATIVE_ROTATION_TYPE_ROTATE_270":
      return MediaMetadataRequestInfo_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_270;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MediaMetadataRequestInfo_NativeRotationType.UNRECOGNIZED;
  }
}

export function mediaMetadataRequestInfo_NativeRotationTypeToJSON(
  object: MediaMetadataRequestInfo_NativeRotationType,
): string {
  switch (object) {
    case MediaMetadataRequestInfo_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_STANDARD:
      return "NATIVE_ROTATION_TYPE_ROTATE_STANDARD";
    case MediaMetadataRequestInfo_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_90:
      return "NATIVE_ROTATION_TYPE_ROTATE_90";
    case MediaMetadataRequestInfo_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_180:
      return "NATIVE_ROTATION_TYPE_ROTATE_180";
    case MediaMetadataRequestInfo_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_270:
      return "NATIVE_ROTATION_TYPE_ROTATE_270";
    case MediaMetadataRequestInfo_NativeRotationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MediaMetadataRequestResponse {
  metadata: MediaMetadataRequestResponse_Metadata | undefined;
  generatedBitmapInfo: MediaMetadataRequestResponse_BitmapInfo | undefined;
}

export interface MediaMetadataRequestResponse_Metadata {
  width: number;
  height: number;
  fps: number;
  duration: number;
  numberAudioChannels: number;
  codec: string;
  artist: string;
  title: string;
  rotation: number;
  contentType: MediaMetadataRequestResponse_Metadata_ContentType;
}

export enum MediaMetadataRequestResponse_Metadata_ContentType {
  CONTENT_TYPE_UNKNOWN = 0,
  CONTENT_TYPE_AUDIO = 1,
  CONTENT_TYPE_IMAGE = 2,
  CONTENT_TYPE_VIDEO = 3,
  UNRECOGNIZED = -1,
}

export function mediaMetadataRequestResponse_Metadata_ContentTypeFromJSON(
  object: any,
): MediaMetadataRequestResponse_Metadata_ContentType {
  switch (object) {
    case 0:
    case "CONTENT_TYPE_UNKNOWN":
      return MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_UNKNOWN;
    case 1:
    case "CONTENT_TYPE_AUDIO":
      return MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_AUDIO;
    case 2:
    case "CONTENT_TYPE_IMAGE":
      return MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_IMAGE;
    case 3:
    case "CONTENT_TYPE_VIDEO":
      return MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_VIDEO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MediaMetadataRequestResponse_Metadata_ContentType.UNRECOGNIZED;
  }
}

export function mediaMetadataRequestResponse_Metadata_ContentTypeToJSON(
  object: MediaMetadataRequestResponse_Metadata_ContentType,
): string {
  switch (object) {
    case MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_UNKNOWN:
      return "CONTENT_TYPE_UNKNOWN";
    case MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_AUDIO:
      return "CONTENT_TYPE_AUDIO";
    case MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_IMAGE:
      return "CONTENT_TYPE_IMAGE";
    case MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_VIDEO:
      return "CONTENT_TYPE_VIDEO";
    case MediaMetadataRequestResponse_Metadata_ContentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MediaMetadataRequestResponse_BitmapInfo {
  width: number;
  height: number;
}

export interface TriggerOptions {
  contentDestination: TriggerOptions_ContentDestination;
  suppressAutoStartVideo: boolean;
  suppressMediaBackground: boolean;
  forceRetrigger: boolean;
  resetChordChart: boolean;
  fromPlaylistLibrary: boolean;
  fromTimeline: boolean;
  ignoreAnalytics: boolean;
}

export enum TriggerOptions_ContentDestination {
  CONTENT_DESTINATION_GLOBAL = 0,
  CONTENT_DESTINATION_ANNOUNCEMENTS = 1,
  UNRECOGNIZED = -1,
}

export function triggerOptions_ContentDestinationFromJSON(object: any): TriggerOptions_ContentDestination {
  switch (object) {
    case 0:
    case "CONTENT_DESTINATION_GLOBAL":
      return TriggerOptions_ContentDestination.CONTENT_DESTINATION_GLOBAL;
    case 1:
    case "CONTENT_DESTINATION_ANNOUNCEMENTS":
      return TriggerOptions_ContentDestination.CONTENT_DESTINATION_ANNOUNCEMENTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TriggerOptions_ContentDestination.UNRECOGNIZED;
  }
}

export function triggerOptions_ContentDestinationToJSON(object: TriggerOptions_ContentDestination): string {
  switch (object) {
    case TriggerOptions_ContentDestination.CONTENT_DESTINATION_GLOBAL:
      return "CONTENT_DESTINATION_GLOBAL";
    case TriggerOptions_ContentDestination.CONTENT_DESTINATION_ANNOUNCEMENTS:
      return "CONTENT_DESTINATION_ANNOUNCEMENTS";
    case TriggerOptions_ContentDestination.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ControlTransport {
  play?: ControlTransport_PlayControlType | undefined;
  pause?: ControlTransport_PauseControlType | undefined;
  rewind?: ControlTransport_RewindControlType | undefined;
  fastforward?: ControlTransport_FastForwardControlType | undefined;
  skipBack?: ControlTransport_SkipBackControlType | undefined;
  skipForward?: ControlTransport_SkipForwardControlType | undefined;
  stepBack?: ControlTransport_StepBackControlType | undefined;
  stepForward?: ControlTransport_StepForwardControlType | undefined;
  goToStart?: ControlTransport_GoToStartControlType | undefined;
  goToEnd?: ControlTransport_GoToEndControlType | undefined;
  jumpToTime?: ControlTransport_JumpToTimeControlType | undefined;
  jumpToPercent?: ControlTransport_JumpToPercentControlType | undefined;
  markIn?: ControlTransport_MarkInPointControlType | undefined;
  markOut?: ControlTransport_MarkOutPointControlType | undefined;
  setScaleMode?: ControlTransport_SetScaleModeControlType | undefined;
  setFlippedMode?: ControlTransport_SetFlippedModeControlType | undefined;
  setPlayRate?: ControlTransport_SetPlayRateControlType | undefined;
  setRotation?: ControlTransport_SetNativeRotationControlType | undefined;
  togglePlayback?: ControlTransport_TogglePlaybackControlType | undefined;
  setEffects?: ControlTransport_SetEffectsControlType | undefined;
  updateEffect?: ControlTransport_UpdateEffectControlType | undefined;
  beginScrub?: ControlTransport_BeginScrubControlType | undefined;
  endScrub?: ControlTransport_EndScrubControlType | undefined;
  scrubToTime?: ControlTransport_ScrubToTimeControlType | undefined;
  scrubToPercent?: ControlTransport_ScrubToPercentControlType | undefined;
  setAudioFade?: ControlTransport_SetAudioFadeType | undefined;
  setAudioProperties?: ControlTransport_SetAudioPropertiesType | undefined;
}

export interface ControlTransport_PlayControlType {
}

export interface ControlTransport_PauseControlType {
}

export interface ControlTransport_RewindControlType {
}

export interface ControlTransport_FastForwardControlType {
}

export interface ControlTransport_SkipBackControlType {
  offset: number;
}

export interface ControlTransport_SkipForwardControlType {
  offset: number;
}

export interface ControlTransport_StepBackControlType {
}

export interface ControlTransport_StepForwardControlType {
}

export interface ControlTransport_GoToStartControlType {
  offset: number;
}

export interface ControlTransport_GoToEndControlType {
  offset: number;
}

export interface ControlTransport_JumpToTimeControlType {
  time: number;
}

export interface ControlTransport_JumpToPercentControlType {
  percent: number;
}

export interface ControlTransport_MarkInPointControlType {
  time: number;
}

export interface ControlTransport_MarkOutPointControlType {
  time: number;
}

export interface ControlTransport_SetScaleModeControlType {
  mode: ControlTransport_SetScaleModeControlType_ScaleBehavior;
  alignment: ControlTransport_SetScaleModeControlType_ScaleAlignment;
}

export enum ControlTransport_SetScaleModeControlType_ScaleBehavior {
  SCALE_BEHAVIOR_FIT = 0,
  SCALE_BEHAVIOR_FILL = 1,
  SCALE_BEHAVIOR_STRETCH = 2,
  SCALE_BEHAVIOR_CUSTOM = 3,
  UNRECOGNIZED = -1,
}

export function controlTransport_SetScaleModeControlType_ScaleBehaviorFromJSON(
  object: any,
): ControlTransport_SetScaleModeControlType_ScaleBehavior {
  switch (object) {
    case 0:
    case "SCALE_BEHAVIOR_FIT":
      return ControlTransport_SetScaleModeControlType_ScaleBehavior.SCALE_BEHAVIOR_FIT;
    case 1:
    case "SCALE_BEHAVIOR_FILL":
      return ControlTransport_SetScaleModeControlType_ScaleBehavior.SCALE_BEHAVIOR_FILL;
    case 2:
    case "SCALE_BEHAVIOR_STRETCH":
      return ControlTransport_SetScaleModeControlType_ScaleBehavior.SCALE_BEHAVIOR_STRETCH;
    case 3:
    case "SCALE_BEHAVIOR_CUSTOM":
      return ControlTransport_SetScaleModeControlType_ScaleBehavior.SCALE_BEHAVIOR_CUSTOM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ControlTransport_SetScaleModeControlType_ScaleBehavior.UNRECOGNIZED;
  }
}

export function controlTransport_SetScaleModeControlType_ScaleBehaviorToJSON(
  object: ControlTransport_SetScaleModeControlType_ScaleBehavior,
): string {
  switch (object) {
    case ControlTransport_SetScaleModeControlType_ScaleBehavior.SCALE_BEHAVIOR_FIT:
      return "SCALE_BEHAVIOR_FIT";
    case ControlTransport_SetScaleModeControlType_ScaleBehavior.SCALE_BEHAVIOR_FILL:
      return "SCALE_BEHAVIOR_FILL";
    case ControlTransport_SetScaleModeControlType_ScaleBehavior.SCALE_BEHAVIOR_STRETCH:
      return "SCALE_BEHAVIOR_STRETCH";
    case ControlTransport_SetScaleModeControlType_ScaleBehavior.SCALE_BEHAVIOR_CUSTOM:
      return "SCALE_BEHAVIOR_CUSTOM";
    case ControlTransport_SetScaleModeControlType_ScaleBehavior.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ControlTransport_SetScaleModeControlType_ScaleAlignment {
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

export function controlTransport_SetScaleModeControlType_ScaleAlignmentFromJSON(
  object: any,
): ControlTransport_SetScaleModeControlType_ScaleAlignment {
  switch (object) {
    case 0:
    case "SCALE_ALIGNMENT_MIDDLE_CENTER":
      return ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_CENTER;
    case 1:
    case "SCALE_ALIGNMENT_TOP_LEFT":
      return ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_TOP_LEFT;
    case 2:
    case "SCALE_ALIGNMENT_TOP_CENTER":
      return ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_TOP_CENTER;
    case 3:
    case "SCALE_ALIGNMENT_TOP_RIGHT":
      return ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_TOP_RIGHT;
    case 4:
    case "SCALE_ALIGNMENT_MIDDLE_RIGHT":
      return ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_RIGHT;
    case 5:
    case "SCALE_ALIGNMENT_BOTTOM_RIGHT":
      return ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_RIGHT;
    case 6:
    case "SCALE_ALIGNMENT_BOTTOM_CENTER":
      return ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_CENTER;
    case 7:
    case "SCALE_ALIGNMENT_BOTTOM_LEFT":
      return ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_LEFT;
    case 8:
    case "SCALE_ALIGNMENT_MIDDLE_LEFT":
      return ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_LEFT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ControlTransport_SetScaleModeControlType_ScaleAlignment.UNRECOGNIZED;
  }
}

export function controlTransport_SetScaleModeControlType_ScaleAlignmentToJSON(
  object: ControlTransport_SetScaleModeControlType_ScaleAlignment,
): string {
  switch (object) {
    case ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_CENTER:
      return "SCALE_ALIGNMENT_MIDDLE_CENTER";
    case ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_TOP_LEFT:
      return "SCALE_ALIGNMENT_TOP_LEFT";
    case ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_TOP_CENTER:
      return "SCALE_ALIGNMENT_TOP_CENTER";
    case ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_TOP_RIGHT:
      return "SCALE_ALIGNMENT_TOP_RIGHT";
    case ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_RIGHT:
      return "SCALE_ALIGNMENT_MIDDLE_RIGHT";
    case ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_RIGHT:
      return "SCALE_ALIGNMENT_BOTTOM_RIGHT";
    case ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_CENTER:
      return "SCALE_ALIGNMENT_BOTTOM_CENTER";
    case ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_LEFT:
      return "SCALE_ALIGNMENT_BOTTOM_LEFT";
    case ControlTransport_SetScaleModeControlType_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_LEFT:
      return "SCALE_ALIGNMENT_MIDDLE_LEFT";
    case ControlTransport_SetScaleModeControlType_ScaleAlignment.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ControlTransport_SetFlippedModeControlType {
  horizontal: boolean;
  vertical: boolean;
}

export interface ControlTransport_SetPlayRateControlType {
  playRate: number;
}

export interface ControlTransport_SetNativeRotationControlType {
  rotation: ControlTransport_SetNativeRotationControlType_NativeRotationType;
}

export enum ControlTransport_SetNativeRotationControlType_NativeRotationType {
  NATIVE_ROTATION_TYPE_ROTATE_STANDARD = 0,
  NATIVE_ROTATION_TYPE_ROTATE_90 = 90,
  NATIVE_ROTATION_TYPE_ROTATE_180 = 180,
  NATIVE_ROTATION_TYPE_ROTATE_270 = 270,
  UNRECOGNIZED = -1,
}

export function controlTransport_SetNativeRotationControlType_NativeRotationTypeFromJSON(
  object: any,
): ControlTransport_SetNativeRotationControlType_NativeRotationType {
  switch (object) {
    case 0:
    case "NATIVE_ROTATION_TYPE_ROTATE_STANDARD":
      return ControlTransport_SetNativeRotationControlType_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_STANDARD;
    case 90:
    case "NATIVE_ROTATION_TYPE_ROTATE_90":
      return ControlTransport_SetNativeRotationControlType_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_90;
    case 180:
    case "NATIVE_ROTATION_TYPE_ROTATE_180":
      return ControlTransport_SetNativeRotationControlType_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_180;
    case 270:
    case "NATIVE_ROTATION_TYPE_ROTATE_270":
      return ControlTransport_SetNativeRotationControlType_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_270;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ControlTransport_SetNativeRotationControlType_NativeRotationType.UNRECOGNIZED;
  }
}

export function controlTransport_SetNativeRotationControlType_NativeRotationTypeToJSON(
  object: ControlTransport_SetNativeRotationControlType_NativeRotationType,
): string {
  switch (object) {
    case ControlTransport_SetNativeRotationControlType_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_STANDARD:
      return "NATIVE_ROTATION_TYPE_ROTATE_STANDARD";
    case ControlTransport_SetNativeRotationControlType_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_90:
      return "NATIVE_ROTATION_TYPE_ROTATE_90";
    case ControlTransport_SetNativeRotationControlType_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_180:
      return "NATIVE_ROTATION_TYPE_ROTATE_180";
    case ControlTransport_SetNativeRotationControlType_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_270:
      return "NATIVE_ROTATION_TYPE_ROTATE_270";
    case ControlTransport_SetNativeRotationControlType_NativeRotationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ControlTransport_TogglePlaybackControlType {
}

export interface ControlTransport_SetEffectsControlType {
  effects: Effect[];
}

export interface ControlTransport_UpdateEffectControlType {
  effect: Effect | undefined;
}

export interface ControlTransport_BeginScrubControlType {
}

export interface ControlTransport_EndScrubControlType {
}

export interface ControlTransport_ScrubToTimeControlType {
  time: number;
}

export interface ControlTransport_ScrubToPercentControlType {
  percent: number;
}

export interface ControlTransport_SetAudioFadeType {
  fadeInDuration: number;
  fadeOutDuration: number;
  shouldFadeIn: boolean;
  shouldFadeOut: boolean;
}

export interface ControlTransport_SetAudioPropertiesType {
  audioProperties: Media_AudioProperties | undefined;
  solo: boolean[];
}

export interface AudioInputSettings {
  inputs: AudioInput[];
  transitionTime: number;
}

export interface VideoInputSettings {
  inputs: VideoInput[];
}

export interface RecordRequest {
  stream: Recording_Stream | undefined;
  workingDirectory: URL | undefined;
  resi: RecordRequest_Resi | undefined;
}

export interface RecordRequest_Resi {
  gop: number;
  segmentSize: number;
  destinationGroupId: string;
  bufSize: number;
  minRate: number;
  maxRate: number;
  eventName: string;
  socialDescription: string;
}

export interface TextSegmentRequest {
  segments: TextSegmentRequest_Segment[];
  startPosition: number;
}

export interface TextSegmentRequest_Segment {
  index: number;
  size: number;
}

export interface ProClockSource {
  uuid: string;
  name: string;
  connected: boolean;
  active: boolean;
  type: ProClockSource_Type;
}

export enum ProClockSource_Type {
  TYPE_UNKOWN = 0,
  TYPE_INPUT = 1,
  TYPE_OUTPUT = 2,
  UNRECOGNIZED = -1,
}

export function proClockSource_TypeFromJSON(object: any): ProClockSource_Type {
  switch (object) {
    case 0:
    case "TYPE_UNKOWN":
      return ProClockSource_Type.TYPE_UNKOWN;
    case 1:
    case "TYPE_INPUT":
      return ProClockSource_Type.TYPE_INPUT;
    case 2:
    case "TYPE_OUTPUT":
      return ProClockSource_Type.TYPE_OUTPUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProClockSource_Type.UNRECOGNIZED;
  }
}

export function proClockSource_TypeToJSON(object: ProClockSource_Type): string {
  switch (object) {
    case ProClockSource_Type.TYPE_UNKOWN:
      return "TYPE_UNKOWN";
    case ProClockSource_Type.TYPE_INPUT:
      return "TYPE_INPUT";
    case ProClockSource_Type.TYPE_OUTPUT:
      return "TYPE_OUTPUT";
    case ProClockSource_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseMediaMetadataRequestInfo(): MediaMetadataRequestInfo {
  return {
    filePath: "",
    time: 0,
    width: 0,
    height: 0,
    effects: [],
    cropInsets: undefined,
    nativeRotation: 0,
    flippedHorizontally: false,
    flippedVertically: false,
  };
}

export const MediaMetadataRequestInfo = {
  encode(message: MediaMetadataRequestInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }
    if (message.time !== 0) {
      writer.uint32(21).float(message.time);
    }
    if (message.width !== 0) {
      writer.uint32(24).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(32).uint32(message.height);
    }
    for (const v of message.effects) {
      Effect.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.cropInsets !== undefined) {
      Graphics_EdgeInsets.encode(message.cropInsets, writer.uint32(50).fork()).ldelim();
    }
    if (message.nativeRotation !== 0) {
      writer.uint32(56).int32(message.nativeRotation);
    }
    if (message.flippedHorizontally === true) {
      writer.uint32(64).bool(message.flippedHorizontally);
    }
    if (message.flippedVertically === true) {
      writer.uint32(72).bool(message.flippedVertically);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MediaMetadataRequestInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaMetadataRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filePath = reader.string();
          break;
        case 2:
          message.time = reader.float();
          break;
        case 3:
          message.width = reader.uint32();
          break;
        case 4:
          message.height = reader.uint32();
          break;
        case 5:
          message.effects.push(Effect.decode(reader, reader.uint32()));
          break;
        case 6:
          message.cropInsets = Graphics_EdgeInsets.decode(reader, reader.uint32());
          break;
        case 7:
          message.nativeRotation = reader.int32() as any;
          break;
        case 8:
          message.flippedHorizontally = reader.bool();
          break;
        case 9:
          message.flippedVertically = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MediaMetadataRequestInfo {
    return {
      filePath: isSet(object.filePath) ? String(object.filePath) : "",
      time: isSet(object.time) ? Number(object.time) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      effects: Array.isArray(object?.effects) ? object.effects.map((e: any) => Effect.fromJSON(e)) : [],
      cropInsets: isSet(object.cropInsets) ? Graphics_EdgeInsets.fromJSON(object.cropInsets) : undefined,
      nativeRotation: isSet(object.nativeRotation)
        ? mediaMetadataRequestInfo_NativeRotationTypeFromJSON(object.nativeRotation)
        : 0,
      flippedHorizontally: isSet(object.flippedHorizontally) ? Boolean(object.flippedHorizontally) : false,
      flippedVertically: isSet(object.flippedVertically) ? Boolean(object.flippedVertically) : false,
    };
  },

  toJSON(message: MediaMetadataRequestInfo): unknown {
    const obj: any = {};
    message.filePath !== undefined && (obj.filePath = message.filePath);
    message.time !== undefined && (obj.time = message.time);
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    if (message.effects) {
      obj.effects = message.effects.map((e) => e ? Effect.toJSON(e) : undefined);
    } else {
      obj.effects = [];
    }
    message.cropInsets !== undefined &&
      (obj.cropInsets = message.cropInsets ? Graphics_EdgeInsets.toJSON(message.cropInsets) : undefined);
    message.nativeRotation !== undefined &&
      (obj.nativeRotation = mediaMetadataRequestInfo_NativeRotationTypeToJSON(message.nativeRotation));
    message.flippedHorizontally !== undefined && (obj.flippedHorizontally = message.flippedHorizontally);
    message.flippedVertically !== undefined && (obj.flippedVertically = message.flippedVertically);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MediaMetadataRequestInfo>, I>>(object: I): MediaMetadataRequestInfo {
    const message = createBaseMediaMetadataRequestInfo();
    message.filePath = object.filePath ?? "";
    message.time = object.time ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.effects = object.effects?.map((e) => Effect.fromPartial(e)) || [];
    message.cropInsets = (object.cropInsets !== undefined && object.cropInsets !== null)
      ? Graphics_EdgeInsets.fromPartial(object.cropInsets)
      : undefined;
    message.nativeRotation = object.nativeRotation ?? 0;
    message.flippedHorizontally = object.flippedHorizontally ?? false;
    message.flippedVertically = object.flippedVertically ?? false;
    return message;
  },
};

function createBaseMediaMetadataRequestResponse(): MediaMetadataRequestResponse {
  return { metadata: undefined, generatedBitmapInfo: undefined };
}

export const MediaMetadataRequestResponse = {
  encode(message: MediaMetadataRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      MediaMetadataRequestResponse_Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.generatedBitmapInfo !== undefined) {
      MediaMetadataRequestResponse_BitmapInfo.encode(message.generatedBitmapInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MediaMetadataRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaMetadataRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = MediaMetadataRequestResponse_Metadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.generatedBitmapInfo = MediaMetadataRequestResponse_BitmapInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MediaMetadataRequestResponse {
    return {
      metadata: isSet(object.metadata) ? MediaMetadataRequestResponse_Metadata.fromJSON(object.metadata) : undefined,
      generatedBitmapInfo: isSet(object.generatedBitmapInfo)
        ? MediaMetadataRequestResponse_BitmapInfo.fromJSON(object.generatedBitmapInfo)
        : undefined,
    };
  },

  toJSON(message: MediaMetadataRequestResponse): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? MediaMetadataRequestResponse_Metadata.toJSON(message.metadata) : undefined);
    message.generatedBitmapInfo !== undefined && (obj.generatedBitmapInfo = message.generatedBitmapInfo
      ? MediaMetadataRequestResponse_BitmapInfo.toJSON(message.generatedBitmapInfo)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MediaMetadataRequestResponse>, I>>(object: I): MediaMetadataRequestResponse {
    const message = createBaseMediaMetadataRequestResponse();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? MediaMetadataRequestResponse_Metadata.fromPartial(object.metadata)
      : undefined;
    message.generatedBitmapInfo = (object.generatedBitmapInfo !== undefined && object.generatedBitmapInfo !== null)
      ? MediaMetadataRequestResponse_BitmapInfo.fromPartial(object.generatedBitmapInfo)
      : undefined;
    return message;
  },
};

function createBaseMediaMetadataRequestResponse_Metadata(): MediaMetadataRequestResponse_Metadata {
  return {
    width: 0,
    height: 0,
    fps: 0,
    duration: 0,
    numberAudioChannels: 0,
    codec: "",
    artist: "",
    title: "",
    rotation: 0,
    contentType: 0,
  };
}

export const MediaMetadataRequestResponse_Metadata = {
  encode(message: MediaMetadataRequestResponse_Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    if (message.fps !== 0) {
      writer.uint32(29).float(message.fps);
    }
    if (message.duration !== 0) {
      writer.uint32(37).float(message.duration);
    }
    if (message.numberAudioChannels !== 0) {
      writer.uint32(40).uint32(message.numberAudioChannels);
    }
    if (message.codec !== "") {
      writer.uint32(50).string(message.codec);
    }
    if (message.artist !== "") {
      writer.uint32(58).string(message.artist);
    }
    if (message.title !== "") {
      writer.uint32(66).string(message.title);
    }
    if (message.rotation !== 0) {
      writer.uint32(77).float(message.rotation);
    }
    if (message.contentType !== 0) {
      writer.uint32(80).int32(message.contentType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MediaMetadataRequestResponse_Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaMetadataRequestResponse_Metadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.width = reader.uint32();
          break;
        case 2:
          message.height = reader.uint32();
          break;
        case 3:
          message.fps = reader.float();
          break;
        case 4:
          message.duration = reader.float();
          break;
        case 5:
          message.numberAudioChannels = reader.uint32();
          break;
        case 6:
          message.codec = reader.string();
          break;
        case 7:
          message.artist = reader.string();
          break;
        case 8:
          message.title = reader.string();
          break;
        case 9:
          message.rotation = reader.float();
          break;
        case 10:
          message.contentType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MediaMetadataRequestResponse_Metadata {
    return {
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      fps: isSet(object.fps) ? Number(object.fps) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      numberAudioChannels: isSet(object.numberAudioChannels) ? Number(object.numberAudioChannels) : 0,
      codec: isSet(object.codec) ? String(object.codec) : "",
      artist: isSet(object.artist) ? String(object.artist) : "",
      title: isSet(object.title) ? String(object.title) : "",
      rotation: isSet(object.rotation) ? Number(object.rotation) : 0,
      contentType: isSet(object.contentType)
        ? mediaMetadataRequestResponse_Metadata_ContentTypeFromJSON(object.contentType)
        : 0,
    };
  },

  toJSON(message: MediaMetadataRequestResponse_Metadata): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.fps !== undefined && (obj.fps = message.fps);
    message.duration !== undefined && (obj.duration = message.duration);
    message.numberAudioChannels !== undefined && (obj.numberAudioChannels = Math.round(message.numberAudioChannels));
    message.codec !== undefined && (obj.codec = message.codec);
    message.artist !== undefined && (obj.artist = message.artist);
    message.title !== undefined && (obj.title = message.title);
    message.rotation !== undefined && (obj.rotation = message.rotation);
    message.contentType !== undefined &&
      (obj.contentType = mediaMetadataRequestResponse_Metadata_ContentTypeToJSON(message.contentType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MediaMetadataRequestResponse_Metadata>, I>>(
    object: I,
  ): MediaMetadataRequestResponse_Metadata {
    const message = createBaseMediaMetadataRequestResponse_Metadata();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.fps = object.fps ?? 0;
    message.duration = object.duration ?? 0;
    message.numberAudioChannels = object.numberAudioChannels ?? 0;
    message.codec = object.codec ?? "";
    message.artist = object.artist ?? "";
    message.title = object.title ?? "";
    message.rotation = object.rotation ?? 0;
    message.contentType = object.contentType ?? 0;
    return message;
  },
};

function createBaseMediaMetadataRequestResponse_BitmapInfo(): MediaMetadataRequestResponse_BitmapInfo {
  return { width: 0, height: 0 };
}

export const MediaMetadataRequestResponse_BitmapInfo = {
  encode(message: MediaMetadataRequestResponse_BitmapInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MediaMetadataRequestResponse_BitmapInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaMetadataRequestResponse_BitmapInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.width = reader.uint32();
          break;
        case 2:
          message.height = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MediaMetadataRequestResponse_BitmapInfo {
    return {
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: MediaMetadataRequestResponse_BitmapInfo): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MediaMetadataRequestResponse_BitmapInfo>, I>>(
    object: I,
  ): MediaMetadataRequestResponse_BitmapInfo {
    const message = createBaseMediaMetadataRequestResponse_BitmapInfo();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseTriggerOptions(): TriggerOptions {
  return {
    contentDestination: 0,
    suppressAutoStartVideo: false,
    suppressMediaBackground: false,
    forceRetrigger: false,
    resetChordChart: false,
    fromPlaylistLibrary: false,
    fromTimeline: false,
    ignoreAnalytics: false,
  };
}

export const TriggerOptions = {
  encode(message: TriggerOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentDestination !== 0) {
      writer.uint32(8).int32(message.contentDestination);
    }
    if (message.suppressAutoStartVideo === true) {
      writer.uint32(16).bool(message.suppressAutoStartVideo);
    }
    if (message.suppressMediaBackground === true) {
      writer.uint32(24).bool(message.suppressMediaBackground);
    }
    if (message.forceRetrigger === true) {
      writer.uint32(32).bool(message.forceRetrigger);
    }
    if (message.resetChordChart === true) {
      writer.uint32(40).bool(message.resetChordChart);
    }
    if (message.fromPlaylistLibrary === true) {
      writer.uint32(48).bool(message.fromPlaylistLibrary);
    }
    if (message.fromTimeline === true) {
      writer.uint32(56).bool(message.fromTimeline);
    }
    if (message.ignoreAnalytics === true) {
      writer.uint32(64).bool(message.ignoreAnalytics);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentDestination = reader.int32() as any;
          break;
        case 2:
          message.suppressAutoStartVideo = reader.bool();
          break;
        case 3:
          message.suppressMediaBackground = reader.bool();
          break;
        case 4:
          message.forceRetrigger = reader.bool();
          break;
        case 5:
          message.resetChordChart = reader.bool();
          break;
        case 6:
          message.fromPlaylistLibrary = reader.bool();
          break;
        case 7:
          message.fromTimeline = reader.bool();
          break;
        case 8:
          message.ignoreAnalytics = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerOptions {
    return {
      contentDestination: isSet(object.contentDestination)
        ? triggerOptions_ContentDestinationFromJSON(object.contentDestination)
        : 0,
      suppressAutoStartVideo: isSet(object.suppressAutoStartVideo) ? Boolean(object.suppressAutoStartVideo) : false,
      suppressMediaBackground: isSet(object.suppressMediaBackground) ? Boolean(object.suppressMediaBackground) : false,
      forceRetrigger: isSet(object.forceRetrigger) ? Boolean(object.forceRetrigger) : false,
      resetChordChart: isSet(object.resetChordChart) ? Boolean(object.resetChordChart) : false,
      fromPlaylistLibrary: isSet(object.fromPlaylistLibrary) ? Boolean(object.fromPlaylistLibrary) : false,
      fromTimeline: isSet(object.fromTimeline) ? Boolean(object.fromTimeline) : false,
      ignoreAnalytics: isSet(object.ignoreAnalytics) ? Boolean(object.ignoreAnalytics) : false,
    };
  },

  toJSON(message: TriggerOptions): unknown {
    const obj: any = {};
    message.contentDestination !== undefined &&
      (obj.contentDestination = triggerOptions_ContentDestinationToJSON(message.contentDestination));
    message.suppressAutoStartVideo !== undefined && (obj.suppressAutoStartVideo = message.suppressAutoStartVideo);
    message.suppressMediaBackground !== undefined && (obj.suppressMediaBackground = message.suppressMediaBackground);
    message.forceRetrigger !== undefined && (obj.forceRetrigger = message.forceRetrigger);
    message.resetChordChart !== undefined && (obj.resetChordChart = message.resetChordChart);
    message.fromPlaylistLibrary !== undefined && (obj.fromPlaylistLibrary = message.fromPlaylistLibrary);
    message.fromTimeline !== undefined && (obj.fromTimeline = message.fromTimeline);
    message.ignoreAnalytics !== undefined && (obj.ignoreAnalytics = message.ignoreAnalytics);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TriggerOptions>, I>>(object: I): TriggerOptions {
    const message = createBaseTriggerOptions();
    message.contentDestination = object.contentDestination ?? 0;
    message.suppressAutoStartVideo = object.suppressAutoStartVideo ?? false;
    message.suppressMediaBackground = object.suppressMediaBackground ?? false;
    message.forceRetrigger = object.forceRetrigger ?? false;
    message.resetChordChart = object.resetChordChart ?? false;
    message.fromPlaylistLibrary = object.fromPlaylistLibrary ?? false;
    message.fromTimeline = object.fromTimeline ?? false;
    message.ignoreAnalytics = object.ignoreAnalytics ?? false;
    return message;
  },
};

function createBaseControlTransport(): ControlTransport {
  return {
    play: undefined,
    pause: undefined,
    rewind: undefined,
    fastforward: undefined,
    skipBack: undefined,
    skipForward: undefined,
    stepBack: undefined,
    stepForward: undefined,
    goToStart: undefined,
    goToEnd: undefined,
    jumpToTime: undefined,
    jumpToPercent: undefined,
    markIn: undefined,
    markOut: undefined,
    setScaleMode: undefined,
    setFlippedMode: undefined,
    setPlayRate: undefined,
    setRotation: undefined,
    togglePlayback: undefined,
    setEffects: undefined,
    updateEffect: undefined,
    beginScrub: undefined,
    endScrub: undefined,
    scrubToTime: undefined,
    scrubToPercent: undefined,
    setAudioFade: undefined,
    setAudioProperties: undefined,
  };
}

export const ControlTransport = {
  encode(message: ControlTransport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.play !== undefined) {
      ControlTransport_PlayControlType.encode(message.play, writer.uint32(10).fork()).ldelim();
    }
    if (message.pause !== undefined) {
      ControlTransport_PauseControlType.encode(message.pause, writer.uint32(18).fork()).ldelim();
    }
    if (message.rewind !== undefined) {
      ControlTransport_RewindControlType.encode(message.rewind, writer.uint32(26).fork()).ldelim();
    }
    if (message.fastforward !== undefined) {
      ControlTransport_FastForwardControlType.encode(message.fastforward, writer.uint32(34).fork()).ldelim();
    }
    if (message.skipBack !== undefined) {
      ControlTransport_SkipBackControlType.encode(message.skipBack, writer.uint32(42).fork()).ldelim();
    }
    if (message.skipForward !== undefined) {
      ControlTransport_SkipForwardControlType.encode(message.skipForward, writer.uint32(50).fork()).ldelim();
    }
    if (message.stepBack !== undefined) {
      ControlTransport_StepBackControlType.encode(message.stepBack, writer.uint32(58).fork()).ldelim();
    }
    if (message.stepForward !== undefined) {
      ControlTransport_StepForwardControlType.encode(message.stepForward, writer.uint32(66).fork()).ldelim();
    }
    if (message.goToStart !== undefined) {
      ControlTransport_GoToStartControlType.encode(message.goToStart, writer.uint32(74).fork()).ldelim();
    }
    if (message.goToEnd !== undefined) {
      ControlTransport_GoToEndControlType.encode(message.goToEnd, writer.uint32(82).fork()).ldelim();
    }
    if (message.jumpToTime !== undefined) {
      ControlTransport_JumpToTimeControlType.encode(message.jumpToTime, writer.uint32(90).fork()).ldelim();
    }
    if (message.jumpToPercent !== undefined) {
      ControlTransport_JumpToPercentControlType.encode(message.jumpToPercent, writer.uint32(98).fork()).ldelim();
    }
    if (message.markIn !== undefined) {
      ControlTransport_MarkInPointControlType.encode(message.markIn, writer.uint32(106).fork()).ldelim();
    }
    if (message.markOut !== undefined) {
      ControlTransport_MarkOutPointControlType.encode(message.markOut, writer.uint32(114).fork()).ldelim();
    }
    if (message.setScaleMode !== undefined) {
      ControlTransport_SetScaleModeControlType.encode(message.setScaleMode, writer.uint32(122).fork()).ldelim();
    }
    if (message.setFlippedMode !== undefined) {
      ControlTransport_SetFlippedModeControlType.encode(message.setFlippedMode, writer.uint32(130).fork()).ldelim();
    }
    if (message.setPlayRate !== undefined) {
      ControlTransport_SetPlayRateControlType.encode(message.setPlayRate, writer.uint32(138).fork()).ldelim();
    }
    if (message.setRotation !== undefined) {
      ControlTransport_SetNativeRotationControlType.encode(message.setRotation, writer.uint32(146).fork()).ldelim();
    }
    if (message.togglePlayback !== undefined) {
      ControlTransport_TogglePlaybackControlType.encode(message.togglePlayback, writer.uint32(154).fork()).ldelim();
    }
    if (message.setEffects !== undefined) {
      ControlTransport_SetEffectsControlType.encode(message.setEffects, writer.uint32(162).fork()).ldelim();
    }
    if (message.updateEffect !== undefined) {
      ControlTransport_UpdateEffectControlType.encode(message.updateEffect, writer.uint32(170).fork()).ldelim();
    }
    if (message.beginScrub !== undefined) {
      ControlTransport_BeginScrubControlType.encode(message.beginScrub, writer.uint32(178).fork()).ldelim();
    }
    if (message.endScrub !== undefined) {
      ControlTransport_EndScrubControlType.encode(message.endScrub, writer.uint32(186).fork()).ldelim();
    }
    if (message.scrubToTime !== undefined) {
      ControlTransport_ScrubToTimeControlType.encode(message.scrubToTime, writer.uint32(194).fork()).ldelim();
    }
    if (message.scrubToPercent !== undefined) {
      ControlTransport_ScrubToPercentControlType.encode(message.scrubToPercent, writer.uint32(202).fork()).ldelim();
    }
    if (message.setAudioFade !== undefined) {
      ControlTransport_SetAudioFadeType.encode(message.setAudioFade, writer.uint32(210).fork()).ldelim();
    }
    if (message.setAudioProperties !== undefined) {
      ControlTransport_SetAudioPropertiesType.encode(message.setAudioProperties, writer.uint32(218).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.play = ControlTransport_PlayControlType.decode(reader, reader.uint32());
          break;
        case 2:
          message.pause = ControlTransport_PauseControlType.decode(reader, reader.uint32());
          break;
        case 3:
          message.rewind = ControlTransport_RewindControlType.decode(reader, reader.uint32());
          break;
        case 4:
          message.fastforward = ControlTransport_FastForwardControlType.decode(reader, reader.uint32());
          break;
        case 5:
          message.skipBack = ControlTransport_SkipBackControlType.decode(reader, reader.uint32());
          break;
        case 6:
          message.skipForward = ControlTransport_SkipForwardControlType.decode(reader, reader.uint32());
          break;
        case 7:
          message.stepBack = ControlTransport_StepBackControlType.decode(reader, reader.uint32());
          break;
        case 8:
          message.stepForward = ControlTransport_StepForwardControlType.decode(reader, reader.uint32());
          break;
        case 9:
          message.goToStart = ControlTransport_GoToStartControlType.decode(reader, reader.uint32());
          break;
        case 10:
          message.goToEnd = ControlTransport_GoToEndControlType.decode(reader, reader.uint32());
          break;
        case 11:
          message.jumpToTime = ControlTransport_JumpToTimeControlType.decode(reader, reader.uint32());
          break;
        case 12:
          message.jumpToPercent = ControlTransport_JumpToPercentControlType.decode(reader, reader.uint32());
          break;
        case 13:
          message.markIn = ControlTransport_MarkInPointControlType.decode(reader, reader.uint32());
          break;
        case 14:
          message.markOut = ControlTransport_MarkOutPointControlType.decode(reader, reader.uint32());
          break;
        case 15:
          message.setScaleMode = ControlTransport_SetScaleModeControlType.decode(reader, reader.uint32());
          break;
        case 16:
          message.setFlippedMode = ControlTransport_SetFlippedModeControlType.decode(reader, reader.uint32());
          break;
        case 17:
          message.setPlayRate = ControlTransport_SetPlayRateControlType.decode(reader, reader.uint32());
          break;
        case 18:
          message.setRotation = ControlTransport_SetNativeRotationControlType.decode(reader, reader.uint32());
          break;
        case 19:
          message.togglePlayback = ControlTransport_TogglePlaybackControlType.decode(reader, reader.uint32());
          break;
        case 20:
          message.setEffects = ControlTransport_SetEffectsControlType.decode(reader, reader.uint32());
          break;
        case 21:
          message.updateEffect = ControlTransport_UpdateEffectControlType.decode(reader, reader.uint32());
          break;
        case 22:
          message.beginScrub = ControlTransport_BeginScrubControlType.decode(reader, reader.uint32());
          break;
        case 23:
          message.endScrub = ControlTransport_EndScrubControlType.decode(reader, reader.uint32());
          break;
        case 24:
          message.scrubToTime = ControlTransport_ScrubToTimeControlType.decode(reader, reader.uint32());
          break;
        case 25:
          message.scrubToPercent = ControlTransport_ScrubToPercentControlType.decode(reader, reader.uint32());
          break;
        case 26:
          message.setAudioFade = ControlTransport_SetAudioFadeType.decode(reader, reader.uint32());
          break;
        case 27:
          message.setAudioProperties = ControlTransport_SetAudioPropertiesType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport {
    return {
      play: isSet(object.play) ? ControlTransport_PlayControlType.fromJSON(object.play) : undefined,
      pause: isSet(object.pause) ? ControlTransport_PauseControlType.fromJSON(object.pause) : undefined,
      rewind: isSet(object.rewind) ? ControlTransport_RewindControlType.fromJSON(object.rewind) : undefined,
      fastforward: isSet(object.fastforward)
        ? ControlTransport_FastForwardControlType.fromJSON(object.fastforward)
        : undefined,
      skipBack: isSet(object.skipBack) ? ControlTransport_SkipBackControlType.fromJSON(object.skipBack) : undefined,
      skipForward: isSet(object.skipForward)
        ? ControlTransport_SkipForwardControlType.fromJSON(object.skipForward)
        : undefined,
      stepBack: isSet(object.stepBack) ? ControlTransport_StepBackControlType.fromJSON(object.stepBack) : undefined,
      stepForward: isSet(object.stepForward)
        ? ControlTransport_StepForwardControlType.fromJSON(object.stepForward)
        : undefined,
      goToStart: isSet(object.goToStart) ? ControlTransport_GoToStartControlType.fromJSON(object.goToStart) : undefined,
      goToEnd: isSet(object.goToEnd) ? ControlTransport_GoToEndControlType.fromJSON(object.goToEnd) : undefined,
      jumpToTime: isSet(object.jumpToTime)
        ? ControlTransport_JumpToTimeControlType.fromJSON(object.jumpToTime)
        : undefined,
      jumpToPercent: isSet(object.jumpToPercent)
        ? ControlTransport_JumpToPercentControlType.fromJSON(object.jumpToPercent)
        : undefined,
      markIn: isSet(object.markIn) ? ControlTransport_MarkInPointControlType.fromJSON(object.markIn) : undefined,
      markOut: isSet(object.markOut) ? ControlTransport_MarkOutPointControlType.fromJSON(object.markOut) : undefined,
      setScaleMode: isSet(object.setScaleMode)
        ? ControlTransport_SetScaleModeControlType.fromJSON(object.setScaleMode)
        : undefined,
      setFlippedMode: isSet(object.setFlippedMode)
        ? ControlTransport_SetFlippedModeControlType.fromJSON(object.setFlippedMode)
        : undefined,
      setPlayRate: isSet(object.setPlayRate)
        ? ControlTransport_SetPlayRateControlType.fromJSON(object.setPlayRate)
        : undefined,
      setRotation: isSet(object.setRotation)
        ? ControlTransport_SetNativeRotationControlType.fromJSON(object.setRotation)
        : undefined,
      togglePlayback: isSet(object.togglePlayback)
        ? ControlTransport_TogglePlaybackControlType.fromJSON(object.togglePlayback)
        : undefined,
      setEffects: isSet(object.setEffects)
        ? ControlTransport_SetEffectsControlType.fromJSON(object.setEffects)
        : undefined,
      updateEffect: isSet(object.updateEffect)
        ? ControlTransport_UpdateEffectControlType.fromJSON(object.updateEffect)
        : undefined,
      beginScrub: isSet(object.beginScrub)
        ? ControlTransport_BeginScrubControlType.fromJSON(object.beginScrub)
        : undefined,
      endScrub: isSet(object.endScrub) ? ControlTransport_EndScrubControlType.fromJSON(object.endScrub) : undefined,
      scrubToTime: isSet(object.scrubToTime)
        ? ControlTransport_ScrubToTimeControlType.fromJSON(object.scrubToTime)
        : undefined,
      scrubToPercent: isSet(object.scrubToPercent)
        ? ControlTransport_ScrubToPercentControlType.fromJSON(object.scrubToPercent)
        : undefined,
      setAudioFade: isSet(object.setAudioFade)
        ? ControlTransport_SetAudioFadeType.fromJSON(object.setAudioFade)
        : undefined,
      setAudioProperties: isSet(object.setAudioProperties)
        ? ControlTransport_SetAudioPropertiesType.fromJSON(object.setAudioProperties)
        : undefined,
    };
  },

  toJSON(message: ControlTransport): unknown {
    const obj: any = {};
    message.play !== undefined &&
      (obj.play = message.play ? ControlTransport_PlayControlType.toJSON(message.play) : undefined);
    message.pause !== undefined &&
      (obj.pause = message.pause ? ControlTransport_PauseControlType.toJSON(message.pause) : undefined);
    message.rewind !== undefined &&
      (obj.rewind = message.rewind ? ControlTransport_RewindControlType.toJSON(message.rewind) : undefined);
    message.fastforward !== undefined && (obj.fastforward = message.fastforward
      ? ControlTransport_FastForwardControlType.toJSON(message.fastforward)
      : undefined);
    message.skipBack !== undefined &&
      (obj.skipBack = message.skipBack ? ControlTransport_SkipBackControlType.toJSON(message.skipBack) : undefined);
    message.skipForward !== undefined && (obj.skipForward = message.skipForward
      ? ControlTransport_SkipForwardControlType.toJSON(message.skipForward)
      : undefined);
    message.stepBack !== undefined &&
      (obj.stepBack = message.stepBack ? ControlTransport_StepBackControlType.toJSON(message.stepBack) : undefined);
    message.stepForward !== undefined && (obj.stepForward = message.stepForward
      ? ControlTransport_StepForwardControlType.toJSON(message.stepForward)
      : undefined);
    message.goToStart !== undefined &&
      (obj.goToStart = message.goToStart ? ControlTransport_GoToStartControlType.toJSON(message.goToStart) : undefined);
    message.goToEnd !== undefined &&
      (obj.goToEnd = message.goToEnd ? ControlTransport_GoToEndControlType.toJSON(message.goToEnd) : undefined);
    message.jumpToTime !== undefined && (obj.jumpToTime = message.jumpToTime
      ? ControlTransport_JumpToTimeControlType.toJSON(message.jumpToTime)
      : undefined);
    message.jumpToPercent !== undefined && (obj.jumpToPercent = message.jumpToPercent
      ? ControlTransport_JumpToPercentControlType.toJSON(message.jumpToPercent)
      : undefined);
    message.markIn !== undefined &&
      (obj.markIn = message.markIn ? ControlTransport_MarkInPointControlType.toJSON(message.markIn) : undefined);
    message.markOut !== undefined &&
      (obj.markOut = message.markOut ? ControlTransport_MarkOutPointControlType.toJSON(message.markOut) : undefined);
    message.setScaleMode !== undefined && (obj.setScaleMode = message.setScaleMode
      ? ControlTransport_SetScaleModeControlType.toJSON(message.setScaleMode)
      : undefined);
    message.setFlippedMode !== undefined && (obj.setFlippedMode = message.setFlippedMode
      ? ControlTransport_SetFlippedModeControlType.toJSON(message.setFlippedMode)
      : undefined);
    message.setPlayRate !== undefined && (obj.setPlayRate = message.setPlayRate
      ? ControlTransport_SetPlayRateControlType.toJSON(message.setPlayRate)
      : undefined);
    message.setRotation !== undefined && (obj.setRotation = message.setRotation
      ? ControlTransport_SetNativeRotationControlType.toJSON(message.setRotation)
      : undefined);
    message.togglePlayback !== undefined && (obj.togglePlayback = message.togglePlayback
      ? ControlTransport_TogglePlaybackControlType.toJSON(message.togglePlayback)
      : undefined);
    message.setEffects !== undefined && (obj.setEffects = message.setEffects
      ? ControlTransport_SetEffectsControlType.toJSON(message.setEffects)
      : undefined);
    message.updateEffect !== undefined && (obj.updateEffect = message.updateEffect
      ? ControlTransport_UpdateEffectControlType.toJSON(message.updateEffect)
      : undefined);
    message.beginScrub !== undefined && (obj.beginScrub = message.beginScrub
      ? ControlTransport_BeginScrubControlType.toJSON(message.beginScrub)
      : undefined);
    message.endScrub !== undefined &&
      (obj.endScrub = message.endScrub ? ControlTransport_EndScrubControlType.toJSON(message.endScrub) : undefined);
    message.scrubToTime !== undefined && (obj.scrubToTime = message.scrubToTime
      ? ControlTransport_ScrubToTimeControlType.toJSON(message.scrubToTime)
      : undefined);
    message.scrubToPercent !== undefined && (obj.scrubToPercent = message.scrubToPercent
      ? ControlTransport_ScrubToPercentControlType.toJSON(message.scrubToPercent)
      : undefined);
    message.setAudioFade !== undefined && (obj.setAudioFade = message.setAudioFade
      ? ControlTransport_SetAudioFadeType.toJSON(message.setAudioFade)
      : undefined);
    message.setAudioProperties !== undefined && (obj.setAudioProperties = message.setAudioProperties
      ? ControlTransport_SetAudioPropertiesType.toJSON(message.setAudioProperties)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport>, I>>(object: I): ControlTransport {
    const message = createBaseControlTransport();
    message.play = (object.play !== undefined && object.play !== null)
      ? ControlTransport_PlayControlType.fromPartial(object.play)
      : undefined;
    message.pause = (object.pause !== undefined && object.pause !== null)
      ? ControlTransport_PauseControlType.fromPartial(object.pause)
      : undefined;
    message.rewind = (object.rewind !== undefined && object.rewind !== null)
      ? ControlTransport_RewindControlType.fromPartial(object.rewind)
      : undefined;
    message.fastforward = (object.fastforward !== undefined && object.fastforward !== null)
      ? ControlTransport_FastForwardControlType.fromPartial(object.fastforward)
      : undefined;
    message.skipBack = (object.skipBack !== undefined && object.skipBack !== null)
      ? ControlTransport_SkipBackControlType.fromPartial(object.skipBack)
      : undefined;
    message.skipForward = (object.skipForward !== undefined && object.skipForward !== null)
      ? ControlTransport_SkipForwardControlType.fromPartial(object.skipForward)
      : undefined;
    message.stepBack = (object.stepBack !== undefined && object.stepBack !== null)
      ? ControlTransport_StepBackControlType.fromPartial(object.stepBack)
      : undefined;
    message.stepForward = (object.stepForward !== undefined && object.stepForward !== null)
      ? ControlTransport_StepForwardControlType.fromPartial(object.stepForward)
      : undefined;
    message.goToStart = (object.goToStart !== undefined && object.goToStart !== null)
      ? ControlTransport_GoToStartControlType.fromPartial(object.goToStart)
      : undefined;
    message.goToEnd = (object.goToEnd !== undefined && object.goToEnd !== null)
      ? ControlTransport_GoToEndControlType.fromPartial(object.goToEnd)
      : undefined;
    message.jumpToTime = (object.jumpToTime !== undefined && object.jumpToTime !== null)
      ? ControlTransport_JumpToTimeControlType.fromPartial(object.jumpToTime)
      : undefined;
    message.jumpToPercent = (object.jumpToPercent !== undefined && object.jumpToPercent !== null)
      ? ControlTransport_JumpToPercentControlType.fromPartial(object.jumpToPercent)
      : undefined;
    message.markIn = (object.markIn !== undefined && object.markIn !== null)
      ? ControlTransport_MarkInPointControlType.fromPartial(object.markIn)
      : undefined;
    message.markOut = (object.markOut !== undefined && object.markOut !== null)
      ? ControlTransport_MarkOutPointControlType.fromPartial(object.markOut)
      : undefined;
    message.setScaleMode = (object.setScaleMode !== undefined && object.setScaleMode !== null)
      ? ControlTransport_SetScaleModeControlType.fromPartial(object.setScaleMode)
      : undefined;
    message.setFlippedMode = (object.setFlippedMode !== undefined && object.setFlippedMode !== null)
      ? ControlTransport_SetFlippedModeControlType.fromPartial(object.setFlippedMode)
      : undefined;
    message.setPlayRate = (object.setPlayRate !== undefined && object.setPlayRate !== null)
      ? ControlTransport_SetPlayRateControlType.fromPartial(object.setPlayRate)
      : undefined;
    message.setRotation = (object.setRotation !== undefined && object.setRotation !== null)
      ? ControlTransport_SetNativeRotationControlType.fromPartial(object.setRotation)
      : undefined;
    message.togglePlayback = (object.togglePlayback !== undefined && object.togglePlayback !== null)
      ? ControlTransport_TogglePlaybackControlType.fromPartial(object.togglePlayback)
      : undefined;
    message.setEffects = (object.setEffects !== undefined && object.setEffects !== null)
      ? ControlTransport_SetEffectsControlType.fromPartial(object.setEffects)
      : undefined;
    message.updateEffect = (object.updateEffect !== undefined && object.updateEffect !== null)
      ? ControlTransport_UpdateEffectControlType.fromPartial(object.updateEffect)
      : undefined;
    message.beginScrub = (object.beginScrub !== undefined && object.beginScrub !== null)
      ? ControlTransport_BeginScrubControlType.fromPartial(object.beginScrub)
      : undefined;
    message.endScrub = (object.endScrub !== undefined && object.endScrub !== null)
      ? ControlTransport_EndScrubControlType.fromPartial(object.endScrub)
      : undefined;
    message.scrubToTime = (object.scrubToTime !== undefined && object.scrubToTime !== null)
      ? ControlTransport_ScrubToTimeControlType.fromPartial(object.scrubToTime)
      : undefined;
    message.scrubToPercent = (object.scrubToPercent !== undefined && object.scrubToPercent !== null)
      ? ControlTransport_ScrubToPercentControlType.fromPartial(object.scrubToPercent)
      : undefined;
    message.setAudioFade = (object.setAudioFade !== undefined && object.setAudioFade !== null)
      ? ControlTransport_SetAudioFadeType.fromPartial(object.setAudioFade)
      : undefined;
    message.setAudioProperties = (object.setAudioProperties !== undefined && object.setAudioProperties !== null)
      ? ControlTransport_SetAudioPropertiesType.fromPartial(object.setAudioProperties)
      : undefined;
    return message;
  },
};

function createBaseControlTransport_PlayControlType(): ControlTransport_PlayControlType {
  return {};
}

export const ControlTransport_PlayControlType = {
  encode(_: ControlTransport_PlayControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_PlayControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_PlayControlType();
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

  fromJSON(_: any): ControlTransport_PlayControlType {
    return {};
  },

  toJSON(_: ControlTransport_PlayControlType): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_PlayControlType>, I>>(
    _: I,
  ): ControlTransport_PlayControlType {
    const message = createBaseControlTransport_PlayControlType();
    return message;
  },
};

function createBaseControlTransport_PauseControlType(): ControlTransport_PauseControlType {
  return {};
}

export const ControlTransport_PauseControlType = {
  encode(_: ControlTransport_PauseControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_PauseControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_PauseControlType();
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

  fromJSON(_: any): ControlTransport_PauseControlType {
    return {};
  },

  toJSON(_: ControlTransport_PauseControlType): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_PauseControlType>, I>>(
    _: I,
  ): ControlTransport_PauseControlType {
    const message = createBaseControlTransport_PauseControlType();
    return message;
  },
};

function createBaseControlTransport_RewindControlType(): ControlTransport_RewindControlType {
  return {};
}

export const ControlTransport_RewindControlType = {
  encode(_: ControlTransport_RewindControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_RewindControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_RewindControlType();
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

  fromJSON(_: any): ControlTransport_RewindControlType {
    return {};
  },

  toJSON(_: ControlTransport_RewindControlType): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_RewindControlType>, I>>(
    _: I,
  ): ControlTransport_RewindControlType {
    const message = createBaseControlTransport_RewindControlType();
    return message;
  },
};

function createBaseControlTransport_FastForwardControlType(): ControlTransport_FastForwardControlType {
  return {};
}

export const ControlTransport_FastForwardControlType = {
  encode(_: ControlTransport_FastForwardControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_FastForwardControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_FastForwardControlType();
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

  fromJSON(_: any): ControlTransport_FastForwardControlType {
    return {};
  },

  toJSON(_: ControlTransport_FastForwardControlType): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_FastForwardControlType>, I>>(
    _: I,
  ): ControlTransport_FastForwardControlType {
    const message = createBaseControlTransport_FastForwardControlType();
    return message;
  },
};

function createBaseControlTransport_SkipBackControlType(): ControlTransport_SkipBackControlType {
  return { offset: 0 };
}

export const ControlTransport_SkipBackControlType = {
  encode(message: ControlTransport_SkipBackControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(9).double(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_SkipBackControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SkipBackControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offset = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SkipBackControlType {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: ControlTransport_SkipBackControlType): unknown {
    const obj: any = {};
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_SkipBackControlType>, I>>(
    object: I,
  ): ControlTransport_SkipBackControlType {
    const message = createBaseControlTransport_SkipBackControlType();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseControlTransport_SkipForwardControlType(): ControlTransport_SkipForwardControlType {
  return { offset: 0 };
}

export const ControlTransport_SkipForwardControlType = {
  encode(message: ControlTransport_SkipForwardControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(9).double(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_SkipForwardControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SkipForwardControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offset = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SkipForwardControlType {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: ControlTransport_SkipForwardControlType): unknown {
    const obj: any = {};
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_SkipForwardControlType>, I>>(
    object: I,
  ): ControlTransport_SkipForwardControlType {
    const message = createBaseControlTransport_SkipForwardControlType();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseControlTransport_StepBackControlType(): ControlTransport_StepBackControlType {
  return {};
}

export const ControlTransport_StepBackControlType = {
  encode(_: ControlTransport_StepBackControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_StepBackControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_StepBackControlType();
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

  fromJSON(_: any): ControlTransport_StepBackControlType {
    return {};
  },

  toJSON(_: ControlTransport_StepBackControlType): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_StepBackControlType>, I>>(
    _: I,
  ): ControlTransport_StepBackControlType {
    const message = createBaseControlTransport_StepBackControlType();
    return message;
  },
};

function createBaseControlTransport_StepForwardControlType(): ControlTransport_StepForwardControlType {
  return {};
}

export const ControlTransport_StepForwardControlType = {
  encode(_: ControlTransport_StepForwardControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_StepForwardControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_StepForwardControlType();
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

  fromJSON(_: any): ControlTransport_StepForwardControlType {
    return {};
  },

  toJSON(_: ControlTransport_StepForwardControlType): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_StepForwardControlType>, I>>(
    _: I,
  ): ControlTransport_StepForwardControlType {
    const message = createBaseControlTransport_StepForwardControlType();
    return message;
  },
};

function createBaseControlTransport_GoToStartControlType(): ControlTransport_GoToStartControlType {
  return { offset: 0 };
}

export const ControlTransport_GoToStartControlType = {
  encode(message: ControlTransport_GoToStartControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(9).double(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_GoToStartControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_GoToStartControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offset = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_GoToStartControlType {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: ControlTransport_GoToStartControlType): unknown {
    const obj: any = {};
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_GoToStartControlType>, I>>(
    object: I,
  ): ControlTransport_GoToStartControlType {
    const message = createBaseControlTransport_GoToStartControlType();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseControlTransport_GoToEndControlType(): ControlTransport_GoToEndControlType {
  return { offset: 0 };
}

export const ControlTransport_GoToEndControlType = {
  encode(message: ControlTransport_GoToEndControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(9).double(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_GoToEndControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_GoToEndControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offset = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_GoToEndControlType {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: ControlTransport_GoToEndControlType): unknown {
    const obj: any = {};
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_GoToEndControlType>, I>>(
    object: I,
  ): ControlTransport_GoToEndControlType {
    const message = createBaseControlTransport_GoToEndControlType();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseControlTransport_JumpToTimeControlType(): ControlTransport_JumpToTimeControlType {
  return { time: 0 };
}

export const ControlTransport_JumpToTimeControlType = {
  encode(message: ControlTransport_JumpToTimeControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_JumpToTimeControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_JumpToTimeControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_JumpToTimeControlType {
    return { time: isSet(object.time) ? Number(object.time) : 0 };
  },

  toJSON(message: ControlTransport_JumpToTimeControlType): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_JumpToTimeControlType>, I>>(
    object: I,
  ): ControlTransport_JumpToTimeControlType {
    const message = createBaseControlTransport_JumpToTimeControlType();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseControlTransport_JumpToPercentControlType(): ControlTransport_JumpToPercentControlType {
  return { percent: 0 };
}

export const ControlTransport_JumpToPercentControlType = {
  encode(message: ControlTransport_JumpToPercentControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.percent !== 0) {
      writer.uint32(9).double(message.percent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_JumpToPercentControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_JumpToPercentControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percent = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_JumpToPercentControlType {
    return { percent: isSet(object.percent) ? Number(object.percent) : 0 };
  },

  toJSON(message: ControlTransport_JumpToPercentControlType): unknown {
    const obj: any = {};
    message.percent !== undefined && (obj.percent = message.percent);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_JumpToPercentControlType>, I>>(
    object: I,
  ): ControlTransport_JumpToPercentControlType {
    const message = createBaseControlTransport_JumpToPercentControlType();
    message.percent = object.percent ?? 0;
    return message;
  },
};

function createBaseControlTransport_MarkInPointControlType(): ControlTransport_MarkInPointControlType {
  return { time: 0 };
}

export const ControlTransport_MarkInPointControlType = {
  encode(message: ControlTransport_MarkInPointControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_MarkInPointControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_MarkInPointControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_MarkInPointControlType {
    return { time: isSet(object.time) ? Number(object.time) : 0 };
  },

  toJSON(message: ControlTransport_MarkInPointControlType): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_MarkInPointControlType>, I>>(
    object: I,
  ): ControlTransport_MarkInPointControlType {
    const message = createBaseControlTransport_MarkInPointControlType();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseControlTransport_MarkOutPointControlType(): ControlTransport_MarkOutPointControlType {
  return { time: 0 };
}

export const ControlTransport_MarkOutPointControlType = {
  encode(message: ControlTransport_MarkOutPointControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_MarkOutPointControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_MarkOutPointControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_MarkOutPointControlType {
    return { time: isSet(object.time) ? Number(object.time) : 0 };
  },

  toJSON(message: ControlTransport_MarkOutPointControlType): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_MarkOutPointControlType>, I>>(
    object: I,
  ): ControlTransport_MarkOutPointControlType {
    const message = createBaseControlTransport_MarkOutPointControlType();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseControlTransport_SetScaleModeControlType(): ControlTransport_SetScaleModeControlType {
  return { mode: 0, alignment: 0 };
}

export const ControlTransport_SetScaleModeControlType = {
  encode(message: ControlTransport_SetScaleModeControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.alignment !== 0) {
      writer.uint32(16).int32(message.alignment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_SetScaleModeControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetScaleModeControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32() as any;
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

  fromJSON(object: any): ControlTransport_SetScaleModeControlType {
    return {
      mode: isSet(object.mode) ? controlTransport_SetScaleModeControlType_ScaleBehaviorFromJSON(object.mode) : 0,
      alignment: isSet(object.alignment)
        ? controlTransport_SetScaleModeControlType_ScaleAlignmentFromJSON(object.alignment)
        : 0,
    };
  },

  toJSON(message: ControlTransport_SetScaleModeControlType): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = controlTransport_SetScaleModeControlType_ScaleBehaviorToJSON(message.mode));
    message.alignment !== undefined &&
      (obj.alignment = controlTransport_SetScaleModeControlType_ScaleAlignmentToJSON(message.alignment));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_SetScaleModeControlType>, I>>(
    object: I,
  ): ControlTransport_SetScaleModeControlType {
    const message = createBaseControlTransport_SetScaleModeControlType();
    message.mode = object.mode ?? 0;
    message.alignment = object.alignment ?? 0;
    return message;
  },
};

function createBaseControlTransport_SetFlippedModeControlType(): ControlTransport_SetFlippedModeControlType {
  return { horizontal: false, vertical: false };
}

export const ControlTransport_SetFlippedModeControlType = {
  encode(message: ControlTransport_SetFlippedModeControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.horizontal === true) {
      writer.uint32(8).bool(message.horizontal);
    }
    if (message.vertical === true) {
      writer.uint32(16).bool(message.vertical);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_SetFlippedModeControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetFlippedModeControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.horizontal = reader.bool();
          break;
        case 2:
          message.vertical = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SetFlippedModeControlType {
    return {
      horizontal: isSet(object.horizontal) ? Boolean(object.horizontal) : false,
      vertical: isSet(object.vertical) ? Boolean(object.vertical) : false,
    };
  },

  toJSON(message: ControlTransport_SetFlippedModeControlType): unknown {
    const obj: any = {};
    message.horizontal !== undefined && (obj.horizontal = message.horizontal);
    message.vertical !== undefined && (obj.vertical = message.vertical);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_SetFlippedModeControlType>, I>>(
    object: I,
  ): ControlTransport_SetFlippedModeControlType {
    const message = createBaseControlTransport_SetFlippedModeControlType();
    message.horizontal = object.horizontal ?? false;
    message.vertical = object.vertical ?? false;
    return message;
  },
};

function createBaseControlTransport_SetPlayRateControlType(): ControlTransport_SetPlayRateControlType {
  return { playRate: 0 };
}

export const ControlTransport_SetPlayRateControlType = {
  encode(message: ControlTransport_SetPlayRateControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playRate !== 0) {
      writer.uint32(9).double(message.playRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_SetPlayRateControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetPlayRateControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playRate = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SetPlayRateControlType {
    return { playRate: isSet(object.playRate) ? Number(object.playRate) : 0 };
  },

  toJSON(message: ControlTransport_SetPlayRateControlType): unknown {
    const obj: any = {};
    message.playRate !== undefined && (obj.playRate = message.playRate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_SetPlayRateControlType>, I>>(
    object: I,
  ): ControlTransport_SetPlayRateControlType {
    const message = createBaseControlTransport_SetPlayRateControlType();
    message.playRate = object.playRate ?? 0;
    return message;
  },
};

function createBaseControlTransport_SetNativeRotationControlType(): ControlTransport_SetNativeRotationControlType {
  return { rotation: 0 };
}

export const ControlTransport_SetNativeRotationControlType = {
  encode(message: ControlTransport_SetNativeRotationControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rotation !== 0) {
      writer.uint32(8).int32(message.rotation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_SetNativeRotationControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetNativeRotationControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rotation = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SetNativeRotationControlType {
    return {
      rotation: isSet(object.rotation)
        ? controlTransport_SetNativeRotationControlType_NativeRotationTypeFromJSON(object.rotation)
        : 0,
    };
  },

  toJSON(message: ControlTransport_SetNativeRotationControlType): unknown {
    const obj: any = {};
    message.rotation !== undefined &&
      (obj.rotation = controlTransport_SetNativeRotationControlType_NativeRotationTypeToJSON(message.rotation));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_SetNativeRotationControlType>, I>>(
    object: I,
  ): ControlTransport_SetNativeRotationControlType {
    const message = createBaseControlTransport_SetNativeRotationControlType();
    message.rotation = object.rotation ?? 0;
    return message;
  },
};

function createBaseControlTransport_TogglePlaybackControlType(): ControlTransport_TogglePlaybackControlType {
  return {};
}

export const ControlTransport_TogglePlaybackControlType = {
  encode(_: ControlTransport_TogglePlaybackControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_TogglePlaybackControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_TogglePlaybackControlType();
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

  fromJSON(_: any): ControlTransport_TogglePlaybackControlType {
    return {};
  },

  toJSON(_: ControlTransport_TogglePlaybackControlType): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_TogglePlaybackControlType>, I>>(
    _: I,
  ): ControlTransport_TogglePlaybackControlType {
    const message = createBaseControlTransport_TogglePlaybackControlType();
    return message;
  },
};

function createBaseControlTransport_SetEffectsControlType(): ControlTransport_SetEffectsControlType {
  return { effects: [] };
}

export const ControlTransport_SetEffectsControlType = {
  encode(message: ControlTransport_SetEffectsControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.effects) {
      Effect.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_SetEffectsControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetEffectsControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effects.push(Effect.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SetEffectsControlType {
    return { effects: Array.isArray(object?.effects) ? object.effects.map((e: any) => Effect.fromJSON(e)) : [] };
  },

  toJSON(message: ControlTransport_SetEffectsControlType): unknown {
    const obj: any = {};
    if (message.effects) {
      obj.effects = message.effects.map((e) => e ? Effect.toJSON(e) : undefined);
    } else {
      obj.effects = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_SetEffectsControlType>, I>>(
    object: I,
  ): ControlTransport_SetEffectsControlType {
    const message = createBaseControlTransport_SetEffectsControlType();
    message.effects = object.effects?.map((e) => Effect.fromPartial(e)) || [];
    return message;
  },
};

function createBaseControlTransport_UpdateEffectControlType(): ControlTransport_UpdateEffectControlType {
  return { effect: undefined };
}

export const ControlTransport_UpdateEffectControlType = {
  encode(message: ControlTransport_UpdateEffectControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.effect !== undefined) {
      Effect.encode(message.effect, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_UpdateEffectControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_UpdateEffectControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effect = Effect.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_UpdateEffectControlType {
    return { effect: isSet(object.effect) ? Effect.fromJSON(object.effect) : undefined };
  },

  toJSON(message: ControlTransport_UpdateEffectControlType): unknown {
    const obj: any = {};
    message.effect !== undefined && (obj.effect = message.effect ? Effect.toJSON(message.effect) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_UpdateEffectControlType>, I>>(
    object: I,
  ): ControlTransport_UpdateEffectControlType {
    const message = createBaseControlTransport_UpdateEffectControlType();
    message.effect = (object.effect !== undefined && object.effect !== null)
      ? Effect.fromPartial(object.effect)
      : undefined;
    return message;
  },
};

function createBaseControlTransport_BeginScrubControlType(): ControlTransport_BeginScrubControlType {
  return {};
}

export const ControlTransport_BeginScrubControlType = {
  encode(_: ControlTransport_BeginScrubControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_BeginScrubControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_BeginScrubControlType();
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

  fromJSON(_: any): ControlTransport_BeginScrubControlType {
    return {};
  },

  toJSON(_: ControlTransport_BeginScrubControlType): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_BeginScrubControlType>, I>>(
    _: I,
  ): ControlTransport_BeginScrubControlType {
    const message = createBaseControlTransport_BeginScrubControlType();
    return message;
  },
};

function createBaseControlTransport_EndScrubControlType(): ControlTransport_EndScrubControlType {
  return {};
}

export const ControlTransport_EndScrubControlType = {
  encode(_: ControlTransport_EndScrubControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_EndScrubControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_EndScrubControlType();
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

  fromJSON(_: any): ControlTransport_EndScrubControlType {
    return {};
  },

  toJSON(_: ControlTransport_EndScrubControlType): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_EndScrubControlType>, I>>(
    _: I,
  ): ControlTransport_EndScrubControlType {
    const message = createBaseControlTransport_EndScrubControlType();
    return message;
  },
};

function createBaseControlTransport_ScrubToTimeControlType(): ControlTransport_ScrubToTimeControlType {
  return { time: 0 };
}

export const ControlTransport_ScrubToTimeControlType = {
  encode(message: ControlTransport_ScrubToTimeControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_ScrubToTimeControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_ScrubToTimeControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_ScrubToTimeControlType {
    return { time: isSet(object.time) ? Number(object.time) : 0 };
  },

  toJSON(message: ControlTransport_ScrubToTimeControlType): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_ScrubToTimeControlType>, I>>(
    object: I,
  ): ControlTransport_ScrubToTimeControlType {
    const message = createBaseControlTransport_ScrubToTimeControlType();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseControlTransport_ScrubToPercentControlType(): ControlTransport_ScrubToPercentControlType {
  return { percent: 0 };
}

export const ControlTransport_ScrubToPercentControlType = {
  encode(message: ControlTransport_ScrubToPercentControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.percent !== 0) {
      writer.uint32(9).double(message.percent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_ScrubToPercentControlType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_ScrubToPercentControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percent = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_ScrubToPercentControlType {
    return { percent: isSet(object.percent) ? Number(object.percent) : 0 };
  },

  toJSON(message: ControlTransport_ScrubToPercentControlType): unknown {
    const obj: any = {};
    message.percent !== undefined && (obj.percent = message.percent);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_ScrubToPercentControlType>, I>>(
    object: I,
  ): ControlTransport_ScrubToPercentControlType {
    const message = createBaseControlTransport_ScrubToPercentControlType();
    message.percent = object.percent ?? 0;
    return message;
  },
};

function createBaseControlTransport_SetAudioFadeType(): ControlTransport_SetAudioFadeType {
  return { fadeInDuration: 0, fadeOutDuration: 0, shouldFadeIn: false, shouldFadeOut: false };
}

export const ControlTransport_SetAudioFadeType = {
  encode(message: ControlTransport_SetAudioFadeType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fadeInDuration !== 0) {
      writer.uint32(9).double(message.fadeInDuration);
    }
    if (message.fadeOutDuration !== 0) {
      writer.uint32(17).double(message.fadeOutDuration);
    }
    if (message.shouldFadeIn === true) {
      writer.uint32(24).bool(message.shouldFadeIn);
    }
    if (message.shouldFadeOut === true) {
      writer.uint32(32).bool(message.shouldFadeOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_SetAudioFadeType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetAudioFadeType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fadeInDuration = reader.double();
          break;
        case 2:
          message.fadeOutDuration = reader.double();
          break;
        case 3:
          message.shouldFadeIn = reader.bool();
          break;
        case 4:
          message.shouldFadeOut = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SetAudioFadeType {
    return {
      fadeInDuration: isSet(object.fadeInDuration) ? Number(object.fadeInDuration) : 0,
      fadeOutDuration: isSet(object.fadeOutDuration) ? Number(object.fadeOutDuration) : 0,
      shouldFadeIn: isSet(object.shouldFadeIn) ? Boolean(object.shouldFadeIn) : false,
      shouldFadeOut: isSet(object.shouldFadeOut) ? Boolean(object.shouldFadeOut) : false,
    };
  },

  toJSON(message: ControlTransport_SetAudioFadeType): unknown {
    const obj: any = {};
    message.fadeInDuration !== undefined && (obj.fadeInDuration = message.fadeInDuration);
    message.fadeOutDuration !== undefined && (obj.fadeOutDuration = message.fadeOutDuration);
    message.shouldFadeIn !== undefined && (obj.shouldFadeIn = message.shouldFadeIn);
    message.shouldFadeOut !== undefined && (obj.shouldFadeOut = message.shouldFadeOut);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_SetAudioFadeType>, I>>(
    object: I,
  ): ControlTransport_SetAudioFadeType {
    const message = createBaseControlTransport_SetAudioFadeType();
    message.fadeInDuration = object.fadeInDuration ?? 0;
    message.fadeOutDuration = object.fadeOutDuration ?? 0;
    message.shouldFadeIn = object.shouldFadeIn ?? false;
    message.shouldFadeOut = object.shouldFadeOut ?? false;
    return message;
  },
};

function createBaseControlTransport_SetAudioPropertiesType(): ControlTransport_SetAudioPropertiesType {
  return { audioProperties: undefined, solo: [] };
}

export const ControlTransport_SetAudioPropertiesType = {
  encode(message: ControlTransport_SetAudioPropertiesType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audioProperties !== undefined) {
      Media_AudioProperties.encode(message.audioProperties, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.solo) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport_SetAudioPropertiesType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetAudioPropertiesType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.audioProperties = Media_AudioProperties.decode(reader, reader.uint32());
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.solo.push(reader.bool());
            }
          } else {
            message.solo.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SetAudioPropertiesType {
    return {
      audioProperties: isSet(object.audioProperties)
        ? Media_AudioProperties.fromJSON(object.audioProperties)
        : undefined,
      solo: Array.isArray(object?.solo) ? object.solo.map((e: any) => Boolean(e)) : [],
    };
  },

  toJSON(message: ControlTransport_SetAudioPropertiesType): unknown {
    const obj: any = {};
    message.audioProperties !== undefined &&
      (obj.audioProperties = message.audioProperties
        ? Media_AudioProperties.toJSON(message.audioProperties)
        : undefined);
    if (message.solo) {
      obj.solo = message.solo.map((e) => e);
    } else {
      obj.solo = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlTransport_SetAudioPropertiesType>, I>>(
    object: I,
  ): ControlTransport_SetAudioPropertiesType {
    const message = createBaseControlTransport_SetAudioPropertiesType();
    message.audioProperties = (object.audioProperties !== undefined && object.audioProperties !== null)
      ? Media_AudioProperties.fromPartial(object.audioProperties)
      : undefined;
    message.solo = object.solo?.map((e) => e) || [];
    return message;
  },
};

function createBaseAudioInputSettings(): AudioInputSettings {
  return { inputs: [], transitionTime: 0 };
}

export const AudioInputSettings = {
  encode(message: AudioInputSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inputs) {
      AudioInput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.transitionTime !== 0) {
      writer.uint32(17).double(message.transitionTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioInputSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioInputSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(AudioInput.decode(reader, reader.uint32()));
          break;
        case 2:
          message.transitionTime = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AudioInputSettings {
    return {
      inputs: Array.isArray(object?.inputs) ? object.inputs.map((e: any) => AudioInput.fromJSON(e)) : [],
      transitionTime: isSet(object.transitionTime) ? Number(object.transitionTime) : 0,
    };
  },

  toJSON(message: AudioInputSettings): unknown {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map((e) => e ? AudioInput.toJSON(e) : undefined);
    } else {
      obj.inputs = [];
    }
    message.transitionTime !== undefined && (obj.transitionTime = message.transitionTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AudioInputSettings>, I>>(object: I): AudioInputSettings {
    const message = createBaseAudioInputSettings();
    message.inputs = object.inputs?.map((e) => AudioInput.fromPartial(e)) || [];
    message.transitionTime = object.transitionTime ?? 0;
    return message;
  },
};

function createBaseVideoInputSettings(): VideoInputSettings {
  return { inputs: [] };
}

export const VideoInputSettings = {
  encode(message: VideoInputSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inputs) {
      VideoInput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VideoInputSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVideoInputSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(VideoInput.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VideoInputSettings {
    return { inputs: Array.isArray(object?.inputs) ? object.inputs.map((e: any) => VideoInput.fromJSON(e)) : [] };
  },

  toJSON(message: VideoInputSettings): unknown {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map((e) => e ? VideoInput.toJSON(e) : undefined);
    } else {
      obj.inputs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VideoInputSettings>, I>>(object: I): VideoInputSettings {
    const message = createBaseVideoInputSettings();
    message.inputs = object.inputs?.map((e) => VideoInput.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRecordRequest(): RecordRequest {
  return { stream: undefined, workingDirectory: undefined, resi: undefined };
}

export const RecordRequest = {
  encode(message: RecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stream !== undefined) {
      Recording_Stream.encode(message.stream, writer.uint32(10).fork()).ldelim();
    }
    if (message.workingDirectory !== undefined) {
      URL.encode(message.workingDirectory, writer.uint32(18).fork()).ldelim();
    }
    if (message.resi !== undefined) {
      RecordRequest_Resi.encode(message.resi, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stream = Recording_Stream.decode(reader, reader.uint32());
          break;
        case 2:
          message.workingDirectory = URL.decode(reader, reader.uint32());
          break;
        case 3:
          message.resi = RecordRequest_Resi.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordRequest {
    return {
      stream: isSet(object.stream) ? Recording_Stream.fromJSON(object.stream) : undefined,
      workingDirectory: isSet(object.workingDirectory) ? URL.fromJSON(object.workingDirectory) : undefined,
      resi: isSet(object.resi) ? RecordRequest_Resi.fromJSON(object.resi) : undefined,
    };
  },

  toJSON(message: RecordRequest): unknown {
    const obj: any = {};
    message.stream !== undefined && (obj.stream = message.stream ? Recording_Stream.toJSON(message.stream) : undefined);
    message.workingDirectory !== undefined &&
      (obj.workingDirectory = message.workingDirectory ? URL.toJSON(message.workingDirectory) : undefined);
    message.resi !== undefined && (obj.resi = message.resi ? RecordRequest_Resi.toJSON(message.resi) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RecordRequest>, I>>(object: I): RecordRequest {
    const message = createBaseRecordRequest();
    message.stream = (object.stream !== undefined && object.stream !== null)
      ? Recording_Stream.fromPartial(object.stream)
      : undefined;
    message.workingDirectory = (object.workingDirectory !== undefined && object.workingDirectory !== null)
      ? URL.fromPartial(object.workingDirectory)
      : undefined;
    message.resi = (object.resi !== undefined && object.resi !== null)
      ? RecordRequest_Resi.fromPartial(object.resi)
      : undefined;
    return message;
  },
};

function createBaseRecordRequest_Resi(): RecordRequest_Resi {
  return {
    gop: 0,
    segmentSize: 0,
    destinationGroupId: "",
    bufSize: 0,
    minRate: 0,
    maxRate: 0,
    eventName: "",
    socialDescription: "",
  };
}

export const RecordRequest_Resi = {
  encode(message: RecordRequest_Resi, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gop !== 0) {
      writer.uint32(8).uint32(message.gop);
    }
    if (message.segmentSize !== 0) {
      writer.uint32(17).double(message.segmentSize);
    }
    if (message.destinationGroupId !== "") {
      writer.uint32(26).string(message.destinationGroupId);
    }
    if (message.bufSize !== 0) {
      writer.uint32(32).uint32(message.bufSize);
    }
    if (message.minRate !== 0) {
      writer.uint32(40).uint32(message.minRate);
    }
    if (message.maxRate !== 0) {
      writer.uint32(48).uint32(message.maxRate);
    }
    if (message.eventName !== "") {
      writer.uint32(58).string(message.eventName);
    }
    if (message.socialDescription !== "") {
      writer.uint32(66).string(message.socialDescription);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordRequest_Resi {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordRequest_Resi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gop = reader.uint32();
          break;
        case 2:
          message.segmentSize = reader.double();
          break;
        case 3:
          message.destinationGroupId = reader.string();
          break;
        case 4:
          message.bufSize = reader.uint32();
          break;
        case 5:
          message.minRate = reader.uint32();
          break;
        case 6:
          message.maxRate = reader.uint32();
          break;
        case 7:
          message.eventName = reader.string();
          break;
        case 8:
          message.socialDescription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordRequest_Resi {
    return {
      gop: isSet(object.gop) ? Number(object.gop) : 0,
      segmentSize: isSet(object.segmentSize) ? Number(object.segmentSize) : 0,
      destinationGroupId: isSet(object.destinationGroupId) ? String(object.destinationGroupId) : "",
      bufSize: isSet(object.bufSize) ? Number(object.bufSize) : 0,
      minRate: isSet(object.minRate) ? Number(object.minRate) : 0,
      maxRate: isSet(object.maxRate) ? Number(object.maxRate) : 0,
      eventName: isSet(object.eventName) ? String(object.eventName) : "",
      socialDescription: isSet(object.socialDescription) ? String(object.socialDescription) : "",
    };
  },

  toJSON(message: RecordRequest_Resi): unknown {
    const obj: any = {};
    message.gop !== undefined && (obj.gop = Math.round(message.gop));
    message.segmentSize !== undefined && (obj.segmentSize = message.segmentSize);
    message.destinationGroupId !== undefined && (obj.destinationGroupId = message.destinationGroupId);
    message.bufSize !== undefined && (obj.bufSize = Math.round(message.bufSize));
    message.minRate !== undefined && (obj.minRate = Math.round(message.minRate));
    message.maxRate !== undefined && (obj.maxRate = Math.round(message.maxRate));
    message.eventName !== undefined && (obj.eventName = message.eventName);
    message.socialDescription !== undefined && (obj.socialDescription = message.socialDescription);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RecordRequest_Resi>, I>>(object: I): RecordRequest_Resi {
    const message = createBaseRecordRequest_Resi();
    message.gop = object.gop ?? 0;
    message.segmentSize = object.segmentSize ?? 0;
    message.destinationGroupId = object.destinationGroupId ?? "";
    message.bufSize = object.bufSize ?? 0;
    message.minRate = object.minRate ?? 0;
    message.maxRate = object.maxRate ?? 0;
    message.eventName = object.eventName ?? "";
    message.socialDescription = object.socialDescription ?? "";
    return message;
  },
};

function createBaseTextSegmentRequest(): TextSegmentRequest {
  return { segments: [], startPosition: 0 };
}

export const TextSegmentRequest = {
  encode(message: TextSegmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.segments) {
      TextSegmentRequest_Segment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.startPosition !== 0) {
      writer.uint32(17).double(message.startPosition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextSegmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextSegmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.segments.push(TextSegmentRequest_Segment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.startPosition = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TextSegmentRequest {
    return {
      segments: Array.isArray(object?.segments)
        ? object.segments.map((e: any) => TextSegmentRequest_Segment.fromJSON(e))
        : [],
      startPosition: isSet(object.startPosition) ? Number(object.startPosition) : 0,
    };
  },

  toJSON(message: TextSegmentRequest): unknown {
    const obj: any = {};
    if (message.segments) {
      obj.segments = message.segments.map((e) => e ? TextSegmentRequest_Segment.toJSON(e) : undefined);
    } else {
      obj.segments = [];
    }
    message.startPosition !== undefined && (obj.startPosition = message.startPosition);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TextSegmentRequest>, I>>(object: I): TextSegmentRequest {
    const message = createBaseTextSegmentRequest();
    message.segments = object.segments?.map((e) => TextSegmentRequest_Segment.fromPartial(e)) || [];
    message.startPosition = object.startPosition ?? 0;
    return message;
  },
};

function createBaseTextSegmentRequest_Segment(): TextSegmentRequest_Segment {
  return { index: 0, size: 0 };
}

export const TextSegmentRequest_Segment = {
  encode(message: TextSegmentRequest_Segment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.size !== 0) {
      writer.uint32(17).double(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextSegmentRequest_Segment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextSegmentRequest_Segment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.size = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TextSegmentRequest_Segment {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      size: isSet(object.size) ? Number(object.size) : 0,
    };
  },

  toJSON(message: TextSegmentRequest_Segment): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.size !== undefined && (obj.size = message.size);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TextSegmentRequest_Segment>, I>>(object: I): TextSegmentRequest_Segment {
    const message = createBaseTextSegmentRequest_Segment();
    message.index = object.index ?? 0;
    message.size = object.size ?? 0;
    return message;
  },
};

function createBaseProClockSource(): ProClockSource {
  return { uuid: "", name: "", connected: false, active: false, type: 0 };
}

export const ProClockSource = {
  encode(message: ProClockSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.connected === true) {
      writer.uint32(24).bool(message.connected);
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProClockSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProClockSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.connected = reader.bool();
          break;
        case 4:
          message.active = reader.bool();
          break;
        case 5:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProClockSource {
    return {
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      name: isSet(object.name) ? String(object.name) : "",
      connected: isSet(object.connected) ? Boolean(object.connected) : false,
      active: isSet(object.active) ? Boolean(object.active) : false,
      type: isSet(object.type) ? proClockSource_TypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: ProClockSource): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.name !== undefined && (obj.name = message.name);
    message.connected !== undefined && (obj.connected = message.connected);
    message.active !== undefined && (obj.active = message.active);
    message.type !== undefined && (obj.type = proClockSource_TypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProClockSource>, I>>(object: I): ProClockSource {
    const message = createBaseProClockSource();
    message.uuid = object.uuid ?? "";
    message.name = object.name ?? "";
    message.connected = object.connected ?? false;
    message.active = object.active ?? false;
    message.type = object.type ?? 0;
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
