/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { UUID } from "./basicTypes";
import { UInt32Value } from "./google/protobuf/wrappers";
import { Timestamp } from "./timestamp";

export const protobufPackage = "rv.data";

export interface APIV1Identifier {
  uuid: string;
  name: string;
  index: number;
}

export interface APIV1SlideIndex {
  index: number;
  presentationId: APIV1Identifier | undefined;
}

export interface APIV1Playlist {
  id: APIV1Identifier | undefined;
  type: APIV1Playlist_APIV1PlaylistType;
  children: APIV1Playlist[];
}

export enum APIV1Playlist_APIV1PlaylistType {
  group = 0,
  playlist = 1,
  UNRECOGNIZED = -1,
}

export function aPIV1Playlist_APIV1PlaylistTypeFromJSON(object: any): APIV1Playlist_APIV1PlaylistType {
  switch (object) {
    case 0:
    case "group":
      return APIV1Playlist_APIV1PlaylistType.group;
    case 1:
    case "playlist":
      return APIV1Playlist_APIV1PlaylistType.playlist;
    case -1:
    case "UNRECOGNIZED":
    default:
      return APIV1Playlist_APIV1PlaylistType.UNRECOGNIZED;
  }
}

export function aPIV1Playlist_APIV1PlaylistTypeToJSON(object: APIV1Playlist_APIV1PlaylistType): string {
  switch (object) {
    case APIV1Playlist_APIV1PlaylistType.group:
      return "group";
    case APIV1Playlist_APIV1PlaylistType.playlist:
      return "playlist";
    case APIV1Playlist_APIV1PlaylistType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface APIV1PlaylistAndItem {
  playlist: APIV1Identifier | undefined;
  item: APIV1Identifier | undefined;
}

export interface APIV1MediaPlaylistItem {
  id: APIV1Identifier | undefined;
  type: APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType;
  artist: string;
  duration: number;
}

export enum APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType {
  audio = 0,
  image = 1,
  video = 2,
  UNRECOGNIZED = -1,
}

export function aPIV1MediaPlaylistItem_APIV1MediaPlaylistItemTypeFromJSON(
  object: any,
): APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType {
  switch (object) {
    case 0:
    case "audio":
      return APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.audio;
    case 1:
    case "image":
      return APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.image;
    case 2:
    case "video":
      return APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.video;
    case -1:
    case "UNRECOGNIZED":
    default:
      return APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.UNRECOGNIZED;
  }
}

export function aPIV1MediaPlaylistItem_APIV1MediaPlaylistItemTypeToJSON(
  object: APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType,
): string {
  switch (object) {
    case APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.audio:
      return "audio";
    case APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.image:
      return "image";
    case APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.video:
      return "video";
    case APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface APIV1PlaylistItem {
  id: APIV1Identifier | undefined;
  type: APIV1PlaylistItem_APIV1PlaylistItemType;
  isHidden: boolean;
  isPco: boolean;
  headerColor: APIV1Color | undefined;
  duration: number | undefined;
}

export enum APIV1PlaylistItem_APIV1PlaylistItemType {
  presentation = 0,
  placeholder = 1,
  header = 2,
  media = 3,
  audio = 4,
  livevideo = 5,
  UNRECOGNIZED = -1,
}

export function aPIV1PlaylistItem_APIV1PlaylistItemTypeFromJSON(object: any): APIV1PlaylistItem_APIV1PlaylistItemType {
  switch (object) {
    case 0:
    case "presentation":
      return APIV1PlaylistItem_APIV1PlaylistItemType.presentation;
    case 1:
    case "placeholder":
      return APIV1PlaylistItem_APIV1PlaylistItemType.placeholder;
    case 2:
    case "header":
      return APIV1PlaylistItem_APIV1PlaylistItemType.header;
    case 3:
    case "media":
      return APIV1PlaylistItem_APIV1PlaylistItemType.media;
    case 4:
    case "audio":
      return APIV1PlaylistItem_APIV1PlaylistItemType.audio;
    case 5:
    case "livevideo":
      return APIV1PlaylistItem_APIV1PlaylistItemType.livevideo;
    case -1:
    case "UNRECOGNIZED":
    default:
      return APIV1PlaylistItem_APIV1PlaylistItemType.UNRECOGNIZED;
  }
}

export function aPIV1PlaylistItem_APIV1PlaylistItemTypeToJSON(object: APIV1PlaylistItem_APIV1PlaylistItemType): string {
  switch (object) {
    case APIV1PlaylistItem_APIV1PlaylistItemType.presentation:
      return "presentation";
    case APIV1PlaylistItem_APIV1PlaylistItemType.placeholder:
      return "placeholder";
    case APIV1PlaylistItem_APIV1PlaylistItemType.header:
      return "header";
    case APIV1PlaylistItem_APIV1PlaylistItemType.media:
      return "media";
    case APIV1PlaylistItem_APIV1PlaylistItemType.audio:
      return "audio";
    case APIV1PlaylistItem_APIV1PlaylistItemType.livevideo:
      return "livevideo";
    case APIV1PlaylistItem_APIV1PlaylistItemType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface APIV1ClearGroup {
  id: APIV1Identifier | undefined;
  icon: string;
  tint: APIV1Color | undefined;
  layers: APIV1ClearGroup_APIV1ClearGroupLayerType[];
  stopTimelineAnnouncements: boolean;
  stopTimelinePresentation: boolean;
  clearNextPresentation: boolean;
}

export enum APIV1ClearGroup_APIV1ClearGroupLayerType {
  music = 0,
  audio_effects = 1,
  props = 2,
  messages = 3,
  announcements = 4,
  presentation = 5,
  presentation_media = 6,
  video_input = 7,
  UNRECOGNIZED = -1,
}

export function aPIV1ClearGroup_APIV1ClearGroupLayerTypeFromJSON(
  object: any,
): APIV1ClearGroup_APIV1ClearGroupLayerType {
  switch (object) {
    case 0:
    case "music":
      return APIV1ClearGroup_APIV1ClearGroupLayerType.music;
    case 1:
    case "audio_effects":
      return APIV1ClearGroup_APIV1ClearGroupLayerType.audio_effects;
    case 2:
    case "props":
      return APIV1ClearGroup_APIV1ClearGroupLayerType.props;
    case 3:
    case "messages":
      return APIV1ClearGroup_APIV1ClearGroupLayerType.messages;
    case 4:
    case "announcements":
      return APIV1ClearGroup_APIV1ClearGroupLayerType.announcements;
    case 5:
    case "presentation":
      return APIV1ClearGroup_APIV1ClearGroupLayerType.presentation;
    case 6:
    case "presentation_media":
      return APIV1ClearGroup_APIV1ClearGroupLayerType.presentation_media;
    case 7:
    case "video_input":
      return APIV1ClearGroup_APIV1ClearGroupLayerType.video_input;
    case -1:
    case "UNRECOGNIZED":
    default:
      return APIV1ClearGroup_APIV1ClearGroupLayerType.UNRECOGNIZED;
  }
}

export function aPIV1ClearGroup_APIV1ClearGroupLayerTypeToJSON(
  object: APIV1ClearGroup_APIV1ClearGroupLayerType,
): string {
  switch (object) {
    case APIV1ClearGroup_APIV1ClearGroupLayerType.music:
      return "music";
    case APIV1ClearGroup_APIV1ClearGroupLayerType.audio_effects:
      return "audio_effects";
    case APIV1ClearGroup_APIV1ClearGroupLayerType.props:
      return "props";
    case APIV1ClearGroup_APIV1ClearGroupLayerType.messages:
      return "messages";
    case APIV1ClearGroup_APIV1ClearGroupLayerType.announcements:
      return "announcements";
    case APIV1ClearGroup_APIV1ClearGroupLayerType.presentation:
      return "presentation";
    case APIV1ClearGroup_APIV1ClearGroupLayerType.presentation_media:
      return "presentation_media";
    case APIV1ClearGroup_APIV1ClearGroupLayerType.video_input:
      return "video_input";
    case APIV1ClearGroup_APIV1ClearGroupLayerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface APIV1Message {
  id: APIV1Identifier | undefined;
  message: string;
  tokens: APIV1Message_APIV1MessageToken[];
  theme: APIV1Identifier | undefined;
}

export interface APIV1Message_APIV1MessageToken {
  name: string;
  text?: APIV1Message_APIV1MessageToken_APIV1TextToken | undefined;
  timer?: APIV1Message_APIV1MessageToken_APIV1TimerToken | undefined;
  clock?: APIV1Message_APIV1MessageToken_APIV1ClockToken | undefined;
}

export interface APIV1Message_APIV1MessageToken_APIV1TextToken {
  text: string;
}

export interface APIV1Message_APIV1MessageToken_APIV1TimerToken {
  id: APIV1Identifier | undefined;
  allowsOverrun: boolean;
  format: APIV1TimerFormat | undefined;
  countdown?: APIV1Timer_APIV1TimerCountdown | undefined;
  countDownToTime?: APIV1Timer_APIV1TimerCountdownToTime | undefined;
  elapsed?: APIV1Timer_APIV1TimerElapsed | undefined;
}

export interface APIV1Message_APIV1MessageToken_APIV1ClockToken {
  date: APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat;
  time: APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat;
  is24Hours: boolean;
}

export enum APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat {
  none = 0,
  short = 1,
  medium = 2,
  long = 3,
  full = 4,
  UNRECOGNIZED = -1,
}

export function aPIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormatFromJSON(
  object: any,
): APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat {
  switch (object) {
    case 0:
    case "none":
      return APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.none;
    case 1:
    case "short":
      return APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.short;
    case 2:
    case "medium":
      return APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.medium;
    case 3:
    case "long":
      return APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.long;
    case 4:
    case "full":
      return APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.full;
    case -1:
    case "UNRECOGNIZED":
    default:
      return APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.UNRECOGNIZED;
  }
}

export function aPIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormatToJSON(
  object: APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat,
): string {
  switch (object) {
    case APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.none:
      return "none";
    case APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.short:
      return "short";
    case APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.medium:
      return "medium";
    case APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.long:
      return "long";
    case APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.full:
      return "full";
    case APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface APIV1Timer {
  id: APIV1Identifier | undefined;
  allowsOverrun: boolean;
  countdown?: APIV1Timer_APIV1TimerCountdown | undefined;
  countDownToTime?: APIV1Timer_APIV1TimerCountdownToTime | undefined;
  elapsed?: APIV1Timer_APIV1TimerElapsed | undefined;
}

export interface APIV1Timer_APIV1TimerCountdown {
  duration: number;
}

export interface APIV1Timer_APIV1TimerCountdownToTime {
  timeOfDay: number;
  period: APIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriod;
}

export enum APIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriod {
  am = 0,
  pm = 1,
  is_24_hour = 2,
  UNRECOGNIZED = -1,
}

export function aPIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriodFromJSON(
  object: any,
): APIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriod {
  switch (object) {
    case 0:
    case "am":
      return APIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriod.am;
    case 1:
    case "pm":
      return APIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriod.pm;
    case 2:
    case "is_24_hour":
      return APIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriod.is_24_hour;
    case -1:
    case "UNRECOGNIZED":
    default:
      return APIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriod.UNRECOGNIZED;
  }
}

export function aPIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriodToJSON(
  object: APIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriod,
): string {
  switch (object) {
    case APIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriod.am:
      return "am";
    case APIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriod.pm:
      return "pm";
    case APIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriod.is_24_hour:
      return "is_24_hour";
    case APIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface APIV1Timer_APIV1TimerElapsed {
  startTime: number;
  endTime: number;
  hasEndTime: boolean;
}

export interface APIV1TimerFormat {
  hour: APIV1TimerFormat_APIV1TimerUnitDisplayFormat;
  minute: APIV1TimerFormat_APIV1TimerUnitDisplayFormat;
  second: APIV1TimerFormat_APIV1TimerUnitDisplayFormat;
  millisecond: APIV1TimerFormat_APIV1TimerUnitDisplayFormat;
}

export enum APIV1TimerFormat_APIV1TimerUnitDisplayFormat {
  none = 0,
  short = 1,
  long = 2,
  remove_short = 3,
  remove_long = 4,
  UNRECOGNIZED = -1,
}

export function aPIV1TimerFormat_APIV1TimerUnitDisplayFormatFromJSON(
  object: any,
): APIV1TimerFormat_APIV1TimerUnitDisplayFormat {
  switch (object) {
    case 0:
    case "none":
      return APIV1TimerFormat_APIV1TimerUnitDisplayFormat.none;
    case 1:
    case "short":
      return APIV1TimerFormat_APIV1TimerUnitDisplayFormat.short;
    case 2:
    case "long":
      return APIV1TimerFormat_APIV1TimerUnitDisplayFormat.long;
    case 3:
    case "remove_short":
      return APIV1TimerFormat_APIV1TimerUnitDisplayFormat.remove_short;
    case 4:
    case "remove_long":
      return APIV1TimerFormat_APIV1TimerUnitDisplayFormat.remove_long;
    case -1:
    case "UNRECOGNIZED":
    default:
      return APIV1TimerFormat_APIV1TimerUnitDisplayFormat.UNRECOGNIZED;
  }
}

export function aPIV1TimerFormat_APIV1TimerUnitDisplayFormatToJSON(
  object: APIV1TimerFormat_APIV1TimerUnitDisplayFormat,
): string {
  switch (object) {
    case APIV1TimerFormat_APIV1TimerUnitDisplayFormat.none:
      return "none";
    case APIV1TimerFormat_APIV1TimerUnitDisplayFormat.short:
      return "short";
    case APIV1TimerFormat_APIV1TimerUnitDisplayFormat.long:
      return "long";
    case APIV1TimerFormat_APIV1TimerUnitDisplayFormat.remove_short:
      return "remove_short";
    case APIV1TimerFormat_APIV1TimerUnitDisplayFormat.remove_long:
      return "remove_long";
    case APIV1TimerFormat_APIV1TimerUnitDisplayFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface APIV1TimerValue {
  id: APIV1Identifier | undefined;
  time: string;
  state: APIV1TimerValue_APIV1TimerState;
}

export enum APIV1TimerValue_APIV1TimerState {
  stopped = 0,
  running = 1,
  complete = 2,
  overrunning = 3,
  overran = 4,
  UNRECOGNIZED = -1,
}

export function aPIV1TimerValue_APIV1TimerStateFromJSON(object: any): APIV1TimerValue_APIV1TimerState {
  switch (object) {
    case 0:
    case "stopped":
      return APIV1TimerValue_APIV1TimerState.stopped;
    case 1:
    case "running":
      return APIV1TimerValue_APIV1TimerState.running;
    case 2:
    case "complete":
      return APIV1TimerValue_APIV1TimerState.complete;
    case 3:
    case "overrunning":
      return APIV1TimerValue_APIV1TimerState.overrunning;
    case 4:
    case "overran":
      return APIV1TimerValue_APIV1TimerState.overran;
    case -1:
    case "UNRECOGNIZED":
    default:
      return APIV1TimerValue_APIV1TimerState.UNRECOGNIZED;
  }
}

export function aPIV1TimerValue_APIV1TimerStateToJSON(object: APIV1TimerValue_APIV1TimerState): string {
  switch (object) {
    case APIV1TimerValue_APIV1TimerState.stopped:
      return "stopped";
    case APIV1TimerValue_APIV1TimerState.running:
      return "running";
    case APIV1TimerValue_APIV1TimerState.complete:
      return "complete";
    case APIV1TimerValue_APIV1TimerState.overrunning:
      return "overrunning";
    case APIV1TimerValue_APIV1TimerState.overran:
      return "overran";
    case APIV1TimerValue_APIV1TimerState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface APIV1Color {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export interface APIV1Look {
  id: APIV1Identifier | undefined;
  screens: APIV1Screen[];
}

export interface APIV1Screen {
  videoInput: boolean;
  media: boolean;
  slide: boolean;
  announcements: boolean;
  props: boolean;
  messages: boolean;
  presentation: string;
  mask: string;
}

export interface APIV1Macro {
  id: APIV1Identifier | undefined;
  color: APIV1Color | undefined;
}

export interface APIV1GroupMember {
  ip: string;
  port: number;
}

export interface APIV1GroupMemberStatus {
  ip: string;
  port: number;
  name: string;
  platform: APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform;
  osVersion: string;
  hostDescription: string;
  apiVersion: string;
  connectionStatus: APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus;
}

export enum APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform {
  PLATFORM_UNKNOWN = 0,
  PLATFORM_MACOS = 1,
  PLATFORM_WIN32 = 2,
  PLATFORM_WEB = 3,
  UNRECOGNIZED = -1,
}

export function aPIV1GroupMemberStatus_APIV1GroupMemberStatusPlatformFromJSON(
  object: any,
): APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform {
  switch (object) {
    case 0:
    case "PLATFORM_UNKNOWN":
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_UNKNOWN;
    case 1:
    case "PLATFORM_MACOS":
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_MACOS;
    case 2:
    case "PLATFORM_WIN32":
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_WIN32;
    case 3:
    case "PLATFORM_WEB":
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_WEB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.UNRECOGNIZED;
  }
}

export function aPIV1GroupMemberStatus_APIV1GroupMemberStatusPlatformToJSON(
  object: APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform,
): string {
  switch (object) {
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_UNKNOWN:
      return "PLATFORM_UNKNOWN";
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_MACOS:
      return "PLATFORM_MACOS";
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_WIN32:
      return "PLATFORM_WIN32";
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_WEB:
      return "PLATFORM_WEB";
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus {
  CONNECTION_STATUS_UNKNOWN = 0,
  CONNECTION_STATUS_CONNECTED = 1,
  CONNECTION_STATUS_DISCONNECTED = 2,
  UNRECOGNIZED = -1,
}

export function aPIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatusFromJSON(
  object: any,
): APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus {
  switch (object) {
    case 0:
    case "CONNECTION_STATUS_UNKNOWN":
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.CONNECTION_STATUS_UNKNOWN;
    case 1:
    case "CONNECTION_STATUS_CONNECTED":
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.CONNECTION_STATUS_CONNECTED;
    case 2:
    case "CONNECTION_STATUS_DISCONNECTED":
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.CONNECTION_STATUS_DISCONNECTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.UNRECOGNIZED;
  }
}

export function aPIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatusToJSON(
  object: APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus,
): string {
  switch (object) {
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.CONNECTION_STATUS_UNKNOWN:
      return "CONNECTION_STATUS_UNKNOWN";
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.CONNECTION_STATUS_CONNECTED:
      return "CONNECTION_STATUS_CONNECTED";
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.CONNECTION_STATUS_DISCONNECTED:
      return "CONNECTION_STATUS_DISCONNECTED";
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface APIV1GroupDefinition {
  timestamp: Timestamp | undefined;
  secret: string;
  name: string;
  members: APIV1GroupMember[];
  groupIdentifier: UUID | undefined;
}

export interface APIV1ErrorResponse {
  error: APIV1ErrorResponse_APIV1ErrorType;
}

export enum APIV1ErrorResponse_APIV1ErrorType {
  NOT_FOUND = 0,
  BAD_REQUEST = 1,
  INTERNAL_ERROR = 2,
  UNAUTHORIZED = 3,
  UNRECOGNIZED = -1,
}

export function aPIV1ErrorResponse_APIV1ErrorTypeFromJSON(object: any): APIV1ErrorResponse_APIV1ErrorType {
  switch (object) {
    case 0:
    case "NOT_FOUND":
      return APIV1ErrorResponse_APIV1ErrorType.NOT_FOUND;
    case 1:
    case "BAD_REQUEST":
      return APIV1ErrorResponse_APIV1ErrorType.BAD_REQUEST;
    case 2:
    case "INTERNAL_ERROR":
      return APIV1ErrorResponse_APIV1ErrorType.INTERNAL_ERROR;
    case 3:
    case "UNAUTHORIZED":
      return APIV1ErrorResponse_APIV1ErrorType.UNAUTHORIZED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return APIV1ErrorResponse_APIV1ErrorType.UNRECOGNIZED;
  }
}

export function aPIV1ErrorResponse_APIV1ErrorTypeToJSON(object: APIV1ErrorResponse_APIV1ErrorType): string {
  switch (object) {
    case APIV1ErrorResponse_APIV1ErrorType.NOT_FOUND:
      return "NOT_FOUND";
    case APIV1ErrorResponse_APIV1ErrorType.BAD_REQUEST:
      return "BAD_REQUEST";
    case APIV1ErrorResponse_APIV1ErrorType.INTERNAL_ERROR:
      return "INTERNAL_ERROR";
    case APIV1ErrorResponse_APIV1ErrorType.UNAUTHORIZED:
      return "UNAUTHORIZED";
    case APIV1ErrorResponse_APIV1ErrorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface APIV1CaptureSettings {
  source: UUID | undefined;
  audioRouting: APIV1AudioRouting[];
  disk?: APIV1DiskCapture | undefined;
  rtmp?: APIV1RTMPCapture | undefined;
  resi?: APIV1ResiCapture | undefined;
}

export interface APIV1Size {
  width: number;
  height: number;
}

export interface APIV1AudioRouting {
  map: number[];
}

export interface APIV1DiskCapture {
  fileLocation: string;
  codec: string;
  resolution: APIV1Size | undefined;
  frameRate: number;
}

export interface APIV1RTMPCapture {
  server: string;
  key: string;
  encoding: string;
  saveLocal: boolean;
  fileLocation: string;
}

export interface APIV1ResiCapture {
  eventName: string;
  eventDescription: string;
  destinationGroup: string;
  encoding: string;
}

export interface APIV1Presentation {
  id: APIV1Identifier | undefined;
  groups: APIV1Presentation_SlideGroup[];
  hasTimeline: boolean;
  presentationPath: string;
  destination: APIV1Presentation_Destination;
}

export enum APIV1Presentation_Destination {
  presentation = 0,
  announcements = 1,
  UNRECOGNIZED = -1,
}

export function aPIV1Presentation_DestinationFromJSON(object: any): APIV1Presentation_Destination {
  switch (object) {
    case 0:
    case "presentation":
      return APIV1Presentation_Destination.presentation;
    case 1:
    case "announcements":
      return APIV1Presentation_Destination.announcements;
    case -1:
    case "UNRECOGNIZED":
    default:
      return APIV1Presentation_Destination.UNRECOGNIZED;
  }
}

export function aPIV1Presentation_DestinationToJSON(object: APIV1Presentation_Destination): string {
  switch (object) {
    case APIV1Presentation_Destination.presentation:
      return "presentation";
    case APIV1Presentation_Destination.announcements:
      return "announcements";
    case APIV1Presentation_Destination.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface APIV1Presentation_SlideGroup {
  name: string;
  color: APIV1Color | undefined;
  slides: APIV1Presentation_SlideGroup_Slide[];
}

export interface APIV1Presentation_SlideGroup_Slide {
  enabled: boolean;
  notes: string;
  text: string;
  label: string;
  size: APIV1Size | undefined;
}

export interface APIV1StageLayoutMap {
  entries: APIV1StageLayoutMap_Entry[];
}

export interface APIV1StageLayoutMap_Entry {
  screen: APIV1Identifier | undefined;
  layout: APIV1Identifier | undefined;
}

export interface APIV1ThemeGroup {
  id: APIV1Identifier | undefined;
  groups: APIV1ThemeGroup[];
  themes: APIV1Theme[];
}

export interface APIV1Theme {
  id: APIV1Identifier | undefined;
  slides: APIV1ThemeSlide[];
}

export interface APIV1ThemeSlide {
  id: APIV1Identifier | undefined;
  size: APIV1Size | undefined;
  background: APIV1Color | undefined;
}

export interface APIV1SlideDisplayDetails {
  text: string;
  notes: string;
  uuid: string;
}

export interface APIV1ScreenConfig {
  id: APIV1Identifier | undefined;
  size: APIV1Size | undefined;
  screenType: APIV1ScreenConfig_APIV1ScreenType;
}

export enum APIV1ScreenConfig_APIV1ScreenType {
  audience = 0,
  stage = 1,
  UNRECOGNIZED = -1,
}

export function aPIV1ScreenConfig_APIV1ScreenTypeFromJSON(object: any): APIV1ScreenConfig_APIV1ScreenType {
  switch (object) {
    case 0:
    case "audience":
      return APIV1ScreenConfig_APIV1ScreenType.audience;
    case 1:
    case "stage":
      return APIV1ScreenConfig_APIV1ScreenType.stage;
    case -1:
    case "UNRECOGNIZED":
    default:
      return APIV1ScreenConfig_APIV1ScreenType.UNRECOGNIZED;
  }
}

export function aPIV1ScreenConfig_APIV1ScreenTypeToJSON(object: APIV1ScreenConfig_APIV1ScreenType): string {
  switch (object) {
    case APIV1ScreenConfig_APIV1ScreenType.audience:
      return "audience";
    case APIV1ScreenConfig_APIV1ScreenType.stage:
      return "stage";
    case APIV1ScreenConfig_APIV1ScreenType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface APIV1PropData {
  id: APIV1Identifier | undefined;
  isActive: boolean;
}

function createBaseAPIV1Identifier(): APIV1Identifier {
  return { uuid: "", name: "", index: 0 };
}

export const APIV1Identifier = {
  encode(message: APIV1Identifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Identifier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Identifier();
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
          message.index = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Identifier {
    return {
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      name: isSet(object.name) ? String(object.name) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
    };
  },

  toJSON(message: APIV1Identifier): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.name !== undefined && (obj.name = message.name);
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Identifier>, I>>(object: I): APIV1Identifier {
    const message = createBaseAPIV1Identifier();
    message.uuid = object.uuid ?? "";
    message.name = object.name ?? "";
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseAPIV1SlideIndex(): APIV1SlideIndex {
  return { index: 0, presentationId: undefined };
}

export const APIV1SlideIndex = {
  encode(message: APIV1SlideIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.presentationId !== undefined) {
      APIV1Identifier.encode(message.presentationId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1SlideIndex {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1SlideIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.presentationId = APIV1Identifier.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1SlideIndex {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      presentationId: isSet(object.presentationId) ? APIV1Identifier.fromJSON(object.presentationId) : undefined,
    };
  },

  toJSON(message: APIV1SlideIndex): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.presentationId !== undefined &&
      (obj.presentationId = message.presentationId ? APIV1Identifier.toJSON(message.presentationId) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1SlideIndex>, I>>(object: I): APIV1SlideIndex {
    const message = createBaseAPIV1SlideIndex();
    message.index = object.index ?? 0;
    message.presentationId = (object.presentationId !== undefined && object.presentationId !== null)
      ? APIV1Identifier.fromPartial(object.presentationId)
      : undefined;
    return message;
  },
};

function createBaseAPIV1Playlist(): APIV1Playlist {
  return { id: undefined, type: 0, children: [] };
}

export const APIV1Playlist = {
  encode(message: APIV1Playlist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    for (const v of message.children) {
      APIV1Playlist.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Playlist {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Playlist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.children.push(APIV1Playlist.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Playlist {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      type: isSet(object.type) ? aPIV1Playlist_APIV1PlaylistTypeFromJSON(object.type) : 0,
      children: Array.isArray(object?.children) ? object.children.map((e: any) => APIV1Playlist.fromJSON(e)) : [],
    };
  },

  toJSON(message: APIV1Playlist): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    message.type !== undefined && (obj.type = aPIV1Playlist_APIV1PlaylistTypeToJSON(message.type));
    if (message.children) {
      obj.children = message.children.map((e) => e ? APIV1Playlist.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Playlist>, I>>(object: I): APIV1Playlist {
    const message = createBaseAPIV1Playlist();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.type = object.type ?? 0;
    message.children = object.children?.map((e) => APIV1Playlist.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1PlaylistAndItem(): APIV1PlaylistAndItem {
  return { playlist: undefined, item: undefined };
}

export const APIV1PlaylistAndItem = {
  encode(message: APIV1PlaylistAndItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playlist !== undefined) {
      APIV1Identifier.encode(message.playlist, writer.uint32(10).fork()).ldelim();
    }
    if (message.item !== undefined) {
      APIV1Identifier.encode(message.item, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1PlaylistAndItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistAndItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playlist = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.item = APIV1Identifier.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistAndItem {
    return {
      playlist: isSet(object.playlist) ? APIV1Identifier.fromJSON(object.playlist) : undefined,
      item: isSet(object.item) ? APIV1Identifier.fromJSON(object.item) : undefined,
    };
  },

  toJSON(message: APIV1PlaylistAndItem): unknown {
    const obj: any = {};
    message.playlist !== undefined &&
      (obj.playlist = message.playlist ? APIV1Identifier.toJSON(message.playlist) : undefined);
    message.item !== undefined && (obj.item = message.item ? APIV1Identifier.toJSON(message.item) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1PlaylistAndItem>, I>>(object: I): APIV1PlaylistAndItem {
    const message = createBaseAPIV1PlaylistAndItem();
    message.playlist = (object.playlist !== undefined && object.playlist !== null)
      ? APIV1Identifier.fromPartial(object.playlist)
      : undefined;
    message.item = (object.item !== undefined && object.item !== null)
      ? APIV1Identifier.fromPartial(object.item)
      : undefined;
    return message;
  },
};

function createBaseAPIV1MediaPlaylistItem(): APIV1MediaPlaylistItem {
  return { id: undefined, type: 0, artist: "", duration: 0 };
}

export const APIV1MediaPlaylistItem = {
  encode(message: APIV1MediaPlaylistItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.artist !== "") {
      writer.uint32(26).string(message.artist);
    }
    if (message.duration !== 0) {
      writer.uint32(32).uint32(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1MediaPlaylistItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaPlaylistItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.artist = reader.string();
          break;
        case 4:
          message.duration = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1MediaPlaylistItem {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      type: isSet(object.type) ? aPIV1MediaPlaylistItem_APIV1MediaPlaylistItemTypeFromJSON(object.type) : 0,
      artist: isSet(object.artist) ? String(object.artist) : "",
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: APIV1MediaPlaylistItem): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    message.type !== undefined && (obj.type = aPIV1MediaPlaylistItem_APIV1MediaPlaylistItemTypeToJSON(message.type));
    message.artist !== undefined && (obj.artist = message.artist);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1MediaPlaylistItem>, I>>(object: I): APIV1MediaPlaylistItem {
    const message = createBaseAPIV1MediaPlaylistItem();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.type = object.type ?? 0;
    message.artist = object.artist ?? "";
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseAPIV1PlaylistItem(): APIV1PlaylistItem {
  return { id: undefined, type: 0, isHidden: false, isPco: false, headerColor: undefined, duration: undefined };
}

export const APIV1PlaylistItem = {
  encode(message: APIV1PlaylistItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.isHidden === true) {
      writer.uint32(24).bool(message.isHidden);
    }
    if (message.isPco === true) {
      writer.uint32(32).bool(message.isPco);
    }
    if (message.headerColor !== undefined) {
      APIV1Color.encode(message.headerColor, writer.uint32(42).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      UInt32Value.encode({ value: message.duration! }, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1PlaylistItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.isHidden = reader.bool();
          break;
        case 4:
          message.isPco = reader.bool();
          break;
        case 5:
          message.headerColor = APIV1Color.decode(reader, reader.uint32());
          break;
        case 6:
          message.duration = UInt32Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistItem {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      type: isSet(object.type) ? aPIV1PlaylistItem_APIV1PlaylistItemTypeFromJSON(object.type) : 0,
      isHidden: isSet(object.isHidden) ? Boolean(object.isHidden) : false,
      isPco: isSet(object.isPco) ? Boolean(object.isPco) : false,
      headerColor: isSet(object.headerColor) ? APIV1Color.fromJSON(object.headerColor) : undefined,
      duration: isSet(object.duration) ? Number(object.duration) : undefined,
    };
  },

  toJSON(message: APIV1PlaylistItem): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    message.type !== undefined && (obj.type = aPIV1PlaylistItem_APIV1PlaylistItemTypeToJSON(message.type));
    message.isHidden !== undefined && (obj.isHidden = message.isHidden);
    message.isPco !== undefined && (obj.isPco = message.isPco);
    message.headerColor !== undefined &&
      (obj.headerColor = message.headerColor ? APIV1Color.toJSON(message.headerColor) : undefined);
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1PlaylistItem>, I>>(object: I): APIV1PlaylistItem {
    const message = createBaseAPIV1PlaylistItem();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.type = object.type ?? 0;
    message.isHidden = object.isHidden ?? false;
    message.isPco = object.isPco ?? false;
    message.headerColor = (object.headerColor !== undefined && object.headerColor !== null)
      ? APIV1Color.fromPartial(object.headerColor)
      : undefined;
    message.duration = object.duration ?? undefined;
    return message;
  },
};

function createBaseAPIV1ClearGroup(): APIV1ClearGroup {
  return {
    id: undefined,
    icon: "",
    tint: undefined,
    layers: [],
    stopTimelineAnnouncements: false,
    stopTimelinePresentation: false,
    clearNextPresentation: false,
  };
}

export const APIV1ClearGroup = {
  encode(message: APIV1ClearGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.icon !== "") {
      writer.uint32(18).string(message.icon);
    }
    if (message.tint !== undefined) {
      APIV1Color.encode(message.tint, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.layers) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.stopTimelineAnnouncements === true) {
      writer.uint32(40).bool(message.stopTimelineAnnouncements);
    }
    if (message.stopTimelinePresentation === true) {
      writer.uint32(48).bool(message.stopTimelinePresentation);
    }
    if (message.clearNextPresentation === true) {
      writer.uint32(56).bool(message.clearNextPresentation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ClearGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.icon = reader.string();
          break;
        case 3:
          message.tint = APIV1Color.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.layers.push(reader.int32() as any);
            }
          } else {
            message.layers.push(reader.int32() as any);
          }
          break;
        case 5:
          message.stopTimelineAnnouncements = reader.bool();
          break;
        case 6:
          message.stopTimelinePresentation = reader.bool();
          break;
        case 7:
          message.clearNextPresentation = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1ClearGroup {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      icon: isSet(object.icon) ? String(object.icon) : "",
      tint: isSet(object.tint) ? APIV1Color.fromJSON(object.tint) : undefined,
      layers: Array.isArray(object?.layers)
        ? object.layers.map((e: any) => aPIV1ClearGroup_APIV1ClearGroupLayerTypeFromJSON(e))
        : [],
      stopTimelineAnnouncements: isSet(object.stopTimelineAnnouncements)
        ? Boolean(object.stopTimelineAnnouncements)
        : false,
      stopTimelinePresentation: isSet(object.stopTimelinePresentation)
        ? Boolean(object.stopTimelinePresentation)
        : false,
      clearNextPresentation: isSet(object.clearNextPresentation) ? Boolean(object.clearNextPresentation) : false,
    };
  },

  toJSON(message: APIV1ClearGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    message.icon !== undefined && (obj.icon = message.icon);
    message.tint !== undefined && (obj.tint = message.tint ? APIV1Color.toJSON(message.tint) : undefined);
    if (message.layers) {
      obj.layers = message.layers.map((e) => aPIV1ClearGroup_APIV1ClearGroupLayerTypeToJSON(e));
    } else {
      obj.layers = [];
    }
    message.stopTimelineAnnouncements !== undefined &&
      (obj.stopTimelineAnnouncements = message.stopTimelineAnnouncements);
    message.stopTimelinePresentation !== undefined && (obj.stopTimelinePresentation = message.stopTimelinePresentation);
    message.clearNextPresentation !== undefined && (obj.clearNextPresentation = message.clearNextPresentation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1ClearGroup>, I>>(object: I): APIV1ClearGroup {
    const message = createBaseAPIV1ClearGroup();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.icon = object.icon ?? "";
    message.tint = (object.tint !== undefined && object.tint !== null)
      ? APIV1Color.fromPartial(object.tint)
      : undefined;
    message.layers = object.layers?.map((e) => e) || [];
    message.stopTimelineAnnouncements = object.stopTimelineAnnouncements ?? false;
    message.stopTimelinePresentation = object.stopTimelinePresentation ?? false;
    message.clearNextPresentation = object.clearNextPresentation ?? false;
    return message;
  },
};

function createBaseAPIV1Message(): APIV1Message {
  return { id: undefined, message: "", tokens: [], theme: undefined };
}

export const APIV1Message = {
  encode(message: APIV1Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.tokens) {
      APIV1Message_APIV1MessageToken.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.theme !== undefined) {
      APIV1Identifier.encode(message.theme, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Message();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.tokens.push(APIV1Message_APIV1MessageToken.decode(reader, reader.uint32()));
          break;
        case 4:
          message.theme = APIV1Identifier.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Message {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      message: isSet(object.message) ? String(object.message) : "",
      tokens: Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => APIV1Message_APIV1MessageToken.fromJSON(e))
        : [],
      theme: isSet(object.theme) ? APIV1Identifier.fromJSON(object.theme) : undefined,
    };
  },

  toJSON(message: APIV1Message): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    message.message !== undefined && (obj.message = message.message);
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => e ? APIV1Message_APIV1MessageToken.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    message.theme !== undefined && (obj.theme = message.theme ? APIV1Identifier.toJSON(message.theme) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Message>, I>>(object: I): APIV1Message {
    const message = createBaseAPIV1Message();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.message = object.message ?? "";
    message.tokens = object.tokens?.map((e) => APIV1Message_APIV1MessageToken.fromPartial(e)) || [];
    message.theme = (object.theme !== undefined && object.theme !== null)
      ? APIV1Identifier.fromPartial(object.theme)
      : undefined;
    return message;
  },
};

function createBaseAPIV1Message_APIV1MessageToken(): APIV1Message_APIV1MessageToken {
  return { name: "", text: undefined, timer: undefined, clock: undefined };
}

export const APIV1Message_APIV1MessageToken = {
  encode(message: APIV1Message_APIV1MessageToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.text !== undefined) {
      APIV1Message_APIV1MessageToken_APIV1TextToken.encode(message.text, writer.uint32(18).fork()).ldelim();
    }
    if (message.timer !== undefined) {
      APIV1Message_APIV1MessageToken_APIV1TimerToken.encode(message.timer, writer.uint32(26).fork()).ldelim();
    }
    if (message.clock !== undefined) {
      APIV1Message_APIV1MessageToken_APIV1ClockToken.encode(message.clock, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Message_APIV1MessageToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Message_APIV1MessageToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.text = APIV1Message_APIV1MessageToken_APIV1TextToken.decode(reader, reader.uint32());
          break;
        case 3:
          message.timer = APIV1Message_APIV1MessageToken_APIV1TimerToken.decode(reader, reader.uint32());
          break;
        case 4:
          message.clock = APIV1Message_APIV1MessageToken_APIV1ClockToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Message_APIV1MessageToken {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      text: isSet(object.text) ? APIV1Message_APIV1MessageToken_APIV1TextToken.fromJSON(object.text) : undefined,
      timer: isSet(object.timer) ? APIV1Message_APIV1MessageToken_APIV1TimerToken.fromJSON(object.timer) : undefined,
      clock: isSet(object.clock) ? APIV1Message_APIV1MessageToken_APIV1ClockToken.fromJSON(object.clock) : undefined,
    };
  },

  toJSON(message: APIV1Message_APIV1MessageToken): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.text !== undefined &&
      (obj.text = message.text ? APIV1Message_APIV1MessageToken_APIV1TextToken.toJSON(message.text) : undefined);
    message.timer !== undefined &&
      (obj.timer = message.timer ? APIV1Message_APIV1MessageToken_APIV1TimerToken.toJSON(message.timer) : undefined);
    message.clock !== undefined &&
      (obj.clock = message.clock ? APIV1Message_APIV1MessageToken_APIV1ClockToken.toJSON(message.clock) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Message_APIV1MessageToken>, I>>(
    object: I,
  ): APIV1Message_APIV1MessageToken {
    const message = createBaseAPIV1Message_APIV1MessageToken();
    message.name = object.name ?? "";
    message.text = (object.text !== undefined && object.text !== null)
      ? APIV1Message_APIV1MessageToken_APIV1TextToken.fromPartial(object.text)
      : undefined;
    message.timer = (object.timer !== undefined && object.timer !== null)
      ? APIV1Message_APIV1MessageToken_APIV1TimerToken.fromPartial(object.timer)
      : undefined;
    message.clock = (object.clock !== undefined && object.clock !== null)
      ? APIV1Message_APIV1MessageToken_APIV1ClockToken.fromPartial(object.clock)
      : undefined;
    return message;
  },
};

function createBaseAPIV1Message_APIV1MessageToken_APIV1TextToken(): APIV1Message_APIV1MessageToken_APIV1TextToken {
  return { text: "" };
}

export const APIV1Message_APIV1MessageToken_APIV1TextToken = {
  encode(message: APIV1Message_APIV1MessageToken_APIV1TextToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Message_APIV1MessageToken_APIV1TextToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Message_APIV1MessageToken_APIV1TextToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Message_APIV1MessageToken_APIV1TextToken {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: APIV1Message_APIV1MessageToken_APIV1TextToken): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Message_APIV1MessageToken_APIV1TextToken>, I>>(
    object: I,
  ): APIV1Message_APIV1MessageToken_APIV1TextToken {
    const message = createBaseAPIV1Message_APIV1MessageToken_APIV1TextToken();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseAPIV1Message_APIV1MessageToken_APIV1TimerToken(): APIV1Message_APIV1MessageToken_APIV1TimerToken {
  return {
    id: undefined,
    allowsOverrun: false,
    format: undefined,
    countdown: undefined,
    countDownToTime: undefined,
    elapsed: undefined,
  };
}

export const APIV1Message_APIV1MessageToken_APIV1TimerToken = {
  encode(
    message: APIV1Message_APIV1MessageToken_APIV1TimerToken,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.allowsOverrun === true) {
      writer.uint32(16).bool(message.allowsOverrun);
    }
    if (message.format !== undefined) {
      APIV1TimerFormat.encode(message.format, writer.uint32(50).fork()).ldelim();
    }
    if (message.countdown !== undefined) {
      APIV1Timer_APIV1TimerCountdown.encode(message.countdown, writer.uint32(26).fork()).ldelim();
    }
    if (message.countDownToTime !== undefined) {
      APIV1Timer_APIV1TimerCountdownToTime.encode(message.countDownToTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.elapsed !== undefined) {
      APIV1Timer_APIV1TimerElapsed.encode(message.elapsed, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Message_APIV1MessageToken_APIV1TimerToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Message_APIV1MessageToken_APIV1TimerToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.allowsOverrun = reader.bool();
          break;
        case 6:
          message.format = APIV1TimerFormat.decode(reader, reader.uint32());
          break;
        case 3:
          message.countdown = APIV1Timer_APIV1TimerCountdown.decode(reader, reader.uint32());
          break;
        case 4:
          message.countDownToTime = APIV1Timer_APIV1TimerCountdownToTime.decode(reader, reader.uint32());
          break;
        case 5:
          message.elapsed = APIV1Timer_APIV1TimerElapsed.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Message_APIV1MessageToken_APIV1TimerToken {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      allowsOverrun: isSet(object.allowsOverrun) ? Boolean(object.allowsOverrun) : false,
      format: isSet(object.format) ? APIV1TimerFormat.fromJSON(object.format) : undefined,
      countdown: isSet(object.countdown) ? APIV1Timer_APIV1TimerCountdown.fromJSON(object.countdown) : undefined,
      countDownToTime: isSet(object.countDownToTime)
        ? APIV1Timer_APIV1TimerCountdownToTime.fromJSON(object.countDownToTime)
        : undefined,
      elapsed: isSet(object.elapsed) ? APIV1Timer_APIV1TimerElapsed.fromJSON(object.elapsed) : undefined,
    };
  },

  toJSON(message: APIV1Message_APIV1MessageToken_APIV1TimerToken): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    message.allowsOverrun !== undefined && (obj.allowsOverrun = message.allowsOverrun);
    message.format !== undefined && (obj.format = message.format ? APIV1TimerFormat.toJSON(message.format) : undefined);
    message.countdown !== undefined &&
      (obj.countdown = message.countdown ? APIV1Timer_APIV1TimerCountdown.toJSON(message.countdown) : undefined);
    message.countDownToTime !== undefined && (obj.countDownToTime = message.countDownToTime
      ? APIV1Timer_APIV1TimerCountdownToTime.toJSON(message.countDownToTime)
      : undefined);
    message.elapsed !== undefined &&
      (obj.elapsed = message.elapsed ? APIV1Timer_APIV1TimerElapsed.toJSON(message.elapsed) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Message_APIV1MessageToken_APIV1TimerToken>, I>>(
    object: I,
  ): APIV1Message_APIV1MessageToken_APIV1TimerToken {
    const message = createBaseAPIV1Message_APIV1MessageToken_APIV1TimerToken();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.allowsOverrun = object.allowsOverrun ?? false;
    message.format = (object.format !== undefined && object.format !== null)
      ? APIV1TimerFormat.fromPartial(object.format)
      : undefined;
    message.countdown = (object.countdown !== undefined && object.countdown !== null)
      ? APIV1Timer_APIV1TimerCountdown.fromPartial(object.countdown)
      : undefined;
    message.countDownToTime = (object.countDownToTime !== undefined && object.countDownToTime !== null)
      ? APIV1Timer_APIV1TimerCountdownToTime.fromPartial(object.countDownToTime)
      : undefined;
    message.elapsed = (object.elapsed !== undefined && object.elapsed !== null)
      ? APIV1Timer_APIV1TimerElapsed.fromPartial(object.elapsed)
      : undefined;
    return message;
  },
};

function createBaseAPIV1Message_APIV1MessageToken_APIV1ClockToken(): APIV1Message_APIV1MessageToken_APIV1ClockToken {
  return { date: 0, time: 0, is24Hours: false };
}

export const APIV1Message_APIV1MessageToken_APIV1ClockToken = {
  encode(
    message: APIV1Message_APIV1MessageToken_APIV1ClockToken,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.date !== 0) {
      writer.uint32(8).int32(message.date);
    }
    if (message.time !== 0) {
      writer.uint32(16).int32(message.time);
    }
    if (message.is24Hours === true) {
      writer.uint32(24).bool(message.is24Hours);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Message_APIV1MessageToken_APIV1ClockToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Message_APIV1MessageToken_APIV1ClockToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.date = reader.int32() as any;
          break;
        case 2:
          message.time = reader.int32() as any;
          break;
        case 3:
          message.is24Hours = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Message_APIV1MessageToken_APIV1ClockToken {
    return {
      date: isSet(object.date)
        ? aPIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormatFromJSON(object.date)
        : 0,
      time: isSet(object.time)
        ? aPIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormatFromJSON(object.time)
        : 0,
      is24Hours: isSet(object.is24Hours) ? Boolean(object.is24Hours) : false,
    };
  },

  toJSON(message: APIV1Message_APIV1MessageToken_APIV1ClockToken): unknown {
    const obj: any = {};
    message.date !== undefined &&
      (obj.date = aPIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormatToJSON(message.date));
    message.time !== undefined &&
      (obj.time = aPIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormatToJSON(message.time));
    message.is24Hours !== undefined && (obj.is24Hours = message.is24Hours);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Message_APIV1MessageToken_APIV1ClockToken>, I>>(
    object: I,
  ): APIV1Message_APIV1MessageToken_APIV1ClockToken {
    const message = createBaseAPIV1Message_APIV1MessageToken_APIV1ClockToken();
    message.date = object.date ?? 0;
    message.time = object.time ?? 0;
    message.is24Hours = object.is24Hours ?? false;
    return message;
  },
};

function createBaseAPIV1Timer(): APIV1Timer {
  return { id: undefined, allowsOverrun: false, countdown: undefined, countDownToTime: undefined, elapsed: undefined };
}

export const APIV1Timer = {
  encode(message: APIV1Timer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.allowsOverrun === true) {
      writer.uint32(16).bool(message.allowsOverrun);
    }
    if (message.countdown !== undefined) {
      APIV1Timer_APIV1TimerCountdown.encode(message.countdown, writer.uint32(26).fork()).ldelim();
    }
    if (message.countDownToTime !== undefined) {
      APIV1Timer_APIV1TimerCountdownToTime.encode(message.countDownToTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.elapsed !== undefined) {
      APIV1Timer_APIV1TimerElapsed.encode(message.elapsed, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Timer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Timer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.allowsOverrun = reader.bool();
          break;
        case 3:
          message.countdown = APIV1Timer_APIV1TimerCountdown.decode(reader, reader.uint32());
          break;
        case 4:
          message.countDownToTime = APIV1Timer_APIV1TimerCountdownToTime.decode(reader, reader.uint32());
          break;
        case 5:
          message.elapsed = APIV1Timer_APIV1TimerElapsed.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Timer {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      allowsOverrun: isSet(object.allowsOverrun) ? Boolean(object.allowsOverrun) : false,
      countdown: isSet(object.countdown) ? APIV1Timer_APIV1TimerCountdown.fromJSON(object.countdown) : undefined,
      countDownToTime: isSet(object.countDownToTime)
        ? APIV1Timer_APIV1TimerCountdownToTime.fromJSON(object.countDownToTime)
        : undefined,
      elapsed: isSet(object.elapsed) ? APIV1Timer_APIV1TimerElapsed.fromJSON(object.elapsed) : undefined,
    };
  },

  toJSON(message: APIV1Timer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    message.allowsOverrun !== undefined && (obj.allowsOverrun = message.allowsOverrun);
    message.countdown !== undefined &&
      (obj.countdown = message.countdown ? APIV1Timer_APIV1TimerCountdown.toJSON(message.countdown) : undefined);
    message.countDownToTime !== undefined && (obj.countDownToTime = message.countDownToTime
      ? APIV1Timer_APIV1TimerCountdownToTime.toJSON(message.countDownToTime)
      : undefined);
    message.elapsed !== undefined &&
      (obj.elapsed = message.elapsed ? APIV1Timer_APIV1TimerElapsed.toJSON(message.elapsed) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Timer>, I>>(object: I): APIV1Timer {
    const message = createBaseAPIV1Timer();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.allowsOverrun = object.allowsOverrun ?? false;
    message.countdown = (object.countdown !== undefined && object.countdown !== null)
      ? APIV1Timer_APIV1TimerCountdown.fromPartial(object.countdown)
      : undefined;
    message.countDownToTime = (object.countDownToTime !== undefined && object.countDownToTime !== null)
      ? APIV1Timer_APIV1TimerCountdownToTime.fromPartial(object.countDownToTime)
      : undefined;
    message.elapsed = (object.elapsed !== undefined && object.elapsed !== null)
      ? APIV1Timer_APIV1TimerElapsed.fromPartial(object.elapsed)
      : undefined;
    return message;
  },
};

function createBaseAPIV1Timer_APIV1TimerCountdown(): APIV1Timer_APIV1TimerCountdown {
  return { duration: 0 };
}

export const APIV1Timer_APIV1TimerCountdown = {
  encode(message: APIV1Timer_APIV1TimerCountdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Timer_APIV1TimerCountdown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Timer_APIV1TimerCountdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Timer_APIV1TimerCountdown {
    return { duration: isSet(object.duration) ? Number(object.duration) : 0 };
  },

  toJSON(message: APIV1Timer_APIV1TimerCountdown): unknown {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Timer_APIV1TimerCountdown>, I>>(
    object: I,
  ): APIV1Timer_APIV1TimerCountdown {
    const message = createBaseAPIV1Timer_APIV1TimerCountdown();
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseAPIV1Timer_APIV1TimerCountdownToTime(): APIV1Timer_APIV1TimerCountdownToTime {
  return { timeOfDay: 0, period: 0 };
}

export const APIV1Timer_APIV1TimerCountdownToTime = {
  encode(message: APIV1Timer_APIV1TimerCountdownToTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeOfDay !== 0) {
      writer.uint32(8).int32(message.timeOfDay);
    }
    if (message.period !== 0) {
      writer.uint32(16).int32(message.period);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Timer_APIV1TimerCountdownToTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Timer_APIV1TimerCountdownToTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeOfDay = reader.int32();
          break;
        case 2:
          message.period = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Timer_APIV1TimerCountdownToTime {
    return {
      timeOfDay: isSet(object.timeOfDay) ? Number(object.timeOfDay) : 0,
      period: isSet(object.period) ? aPIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriodFromJSON(object.period) : 0,
    };
  },

  toJSON(message: APIV1Timer_APIV1TimerCountdownToTime): unknown {
    const obj: any = {};
    message.timeOfDay !== undefined && (obj.timeOfDay = Math.round(message.timeOfDay));
    message.period !== undefined &&
      (obj.period = aPIV1Timer_APIV1TimerCountdownToTime_APIV1TimePeriodToJSON(message.period));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Timer_APIV1TimerCountdownToTime>, I>>(
    object: I,
  ): APIV1Timer_APIV1TimerCountdownToTime {
    const message = createBaseAPIV1Timer_APIV1TimerCountdownToTime();
    message.timeOfDay = object.timeOfDay ?? 0;
    message.period = object.period ?? 0;
    return message;
  },
};

function createBaseAPIV1Timer_APIV1TimerElapsed(): APIV1Timer_APIV1TimerElapsed {
  return { startTime: 0, endTime: 0, hasEndTime: false };
}

export const APIV1Timer_APIV1TimerElapsed = {
  encode(message: APIV1Timer_APIV1TimerElapsed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTime !== 0) {
      writer.uint32(8).int32(message.startTime);
    }
    if (message.endTime !== 0) {
      writer.uint32(16).int32(message.endTime);
    }
    if (message.hasEndTime === true) {
      writer.uint32(24).bool(message.hasEndTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Timer_APIV1TimerElapsed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Timer_APIV1TimerElapsed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = reader.int32();
          break;
        case 2:
          message.endTime = reader.int32();
          break;
        case 3:
          message.hasEndTime = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Timer_APIV1TimerElapsed {
    return {
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      endTime: isSet(object.endTime) ? Number(object.endTime) : 0,
      hasEndTime: isSet(object.hasEndTime) ? Boolean(object.hasEndTime) : false,
    };
  },

  toJSON(message: APIV1Timer_APIV1TimerElapsed): unknown {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    message.endTime !== undefined && (obj.endTime = Math.round(message.endTime));
    message.hasEndTime !== undefined && (obj.hasEndTime = message.hasEndTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Timer_APIV1TimerElapsed>, I>>(object: I): APIV1Timer_APIV1TimerElapsed {
    const message = createBaseAPIV1Timer_APIV1TimerElapsed();
    message.startTime = object.startTime ?? 0;
    message.endTime = object.endTime ?? 0;
    message.hasEndTime = object.hasEndTime ?? false;
    return message;
  },
};

function createBaseAPIV1TimerFormat(): APIV1TimerFormat {
  return { hour: 0, minute: 0, second: 0, millisecond: 0 };
}

export const APIV1TimerFormat = {
  encode(message: APIV1TimerFormat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hour !== 0) {
      writer.uint32(48).int32(message.hour);
    }
    if (message.minute !== 0) {
      writer.uint32(56).int32(message.minute);
    }
    if (message.second !== 0) {
      writer.uint32(64).int32(message.second);
    }
    if (message.millisecond !== 0) {
      writer.uint32(72).int32(message.millisecond);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1TimerFormat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerFormat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.hour = reader.int32() as any;
          break;
        case 7:
          message.minute = reader.int32() as any;
          break;
        case 8:
          message.second = reader.int32() as any;
          break;
        case 9:
          message.millisecond = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerFormat {
    return {
      hour: isSet(object.hour) ? aPIV1TimerFormat_APIV1TimerUnitDisplayFormatFromJSON(object.hour) : 0,
      minute: isSet(object.minute) ? aPIV1TimerFormat_APIV1TimerUnitDisplayFormatFromJSON(object.minute) : 0,
      second: isSet(object.second) ? aPIV1TimerFormat_APIV1TimerUnitDisplayFormatFromJSON(object.second) : 0,
      millisecond: isSet(object.millisecond)
        ? aPIV1TimerFormat_APIV1TimerUnitDisplayFormatFromJSON(object.millisecond)
        : 0,
    };
  },

  toJSON(message: APIV1TimerFormat): unknown {
    const obj: any = {};
    message.hour !== undefined && (obj.hour = aPIV1TimerFormat_APIV1TimerUnitDisplayFormatToJSON(message.hour));
    message.minute !== undefined && (obj.minute = aPIV1TimerFormat_APIV1TimerUnitDisplayFormatToJSON(message.minute));
    message.second !== undefined && (obj.second = aPIV1TimerFormat_APIV1TimerUnitDisplayFormatToJSON(message.second));
    message.millisecond !== undefined &&
      (obj.millisecond = aPIV1TimerFormat_APIV1TimerUnitDisplayFormatToJSON(message.millisecond));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1TimerFormat>, I>>(object: I): APIV1TimerFormat {
    const message = createBaseAPIV1TimerFormat();
    message.hour = object.hour ?? 0;
    message.minute = object.minute ?? 0;
    message.second = object.second ?? 0;
    message.millisecond = object.millisecond ?? 0;
    return message;
  },
};

function createBaseAPIV1TimerValue(): APIV1TimerValue {
  return { id: undefined, time: "", state: 0 };
}

export const APIV1TimerValue = {
  encode(message: APIV1TimerValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.time !== "") {
      writer.uint32(18).string(message.time);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1TimerValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.time = reader.string();
          break;
        case 3:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerValue {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      time: isSet(object.time) ? String(object.time) : "",
      state: isSet(object.state) ? aPIV1TimerValue_APIV1TimerStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: APIV1TimerValue): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    message.time !== undefined && (obj.time = message.time);
    message.state !== undefined && (obj.state = aPIV1TimerValue_APIV1TimerStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1TimerValue>, I>>(object: I): APIV1TimerValue {
    const message = createBaseAPIV1TimerValue();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.time = object.time ?? "";
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseAPIV1Color(): APIV1Color {
  return { red: 0, green: 0, blue: 0, alpha: 0 };
}

export const APIV1Color = {
  encode(message: APIV1Color, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.red !== 0) {
      writer.uint32(9).double(message.red);
    }
    if (message.green !== 0) {
      writer.uint32(17).double(message.green);
    }
    if (message.blue !== 0) {
      writer.uint32(25).double(message.blue);
    }
    if (message.alpha !== 0) {
      writer.uint32(33).double(message.alpha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Color {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Color();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.red = reader.double();
          break;
        case 2:
          message.green = reader.double();
          break;
        case 3:
          message.blue = reader.double();
          break;
        case 4:
          message.alpha = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Color {
    return {
      red: isSet(object.red) ? Number(object.red) : 0,
      green: isSet(object.green) ? Number(object.green) : 0,
      blue: isSet(object.blue) ? Number(object.blue) : 0,
      alpha: isSet(object.alpha) ? Number(object.alpha) : 0,
    };
  },

  toJSON(message: APIV1Color): unknown {
    const obj: any = {};
    message.red !== undefined && (obj.red = message.red);
    message.green !== undefined && (obj.green = message.green);
    message.blue !== undefined && (obj.blue = message.blue);
    message.alpha !== undefined && (obj.alpha = message.alpha);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Color>, I>>(object: I): APIV1Color {
    const message = createBaseAPIV1Color();
    message.red = object.red ?? 0;
    message.green = object.green ?? 0;
    message.blue = object.blue ?? 0;
    message.alpha = object.alpha ?? 0;
    return message;
  },
};

function createBaseAPIV1Look(): APIV1Look {
  return { id: undefined, screens: [] };
}

export const APIV1Look = {
  encode(message: APIV1Look, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.screens) {
      APIV1Screen.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Look {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Look();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.screens.push(APIV1Screen.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Look {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      screens: Array.isArray(object?.screens) ? object.screens.map((e: any) => APIV1Screen.fromJSON(e)) : [],
    };
  },

  toJSON(message: APIV1Look): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    if (message.screens) {
      obj.screens = message.screens.map((e) => e ? APIV1Screen.toJSON(e) : undefined);
    } else {
      obj.screens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Look>, I>>(object: I): APIV1Look {
    const message = createBaseAPIV1Look();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.screens = object.screens?.map((e) => APIV1Screen.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1Screen(): APIV1Screen {
  return {
    videoInput: false,
    media: false,
    slide: false,
    announcements: false,
    props: false,
    messages: false,
    presentation: "",
    mask: "",
  };
}

export const APIV1Screen = {
  encode(message: APIV1Screen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.videoInput === true) {
      writer.uint32(8).bool(message.videoInput);
    }
    if (message.media === true) {
      writer.uint32(16).bool(message.media);
    }
    if (message.slide === true) {
      writer.uint32(24).bool(message.slide);
    }
    if (message.announcements === true) {
      writer.uint32(32).bool(message.announcements);
    }
    if (message.props === true) {
      writer.uint32(40).bool(message.props);
    }
    if (message.messages === true) {
      writer.uint32(48).bool(message.messages);
    }
    if (message.presentation !== "") {
      writer.uint32(58).string(message.presentation);
    }
    if (message.mask !== "") {
      writer.uint32(66).string(message.mask);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Screen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Screen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.videoInput = reader.bool();
          break;
        case 2:
          message.media = reader.bool();
          break;
        case 3:
          message.slide = reader.bool();
          break;
        case 4:
          message.announcements = reader.bool();
          break;
        case 5:
          message.props = reader.bool();
          break;
        case 6:
          message.messages = reader.bool();
          break;
        case 7:
          message.presentation = reader.string();
          break;
        case 8:
          message.mask = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Screen {
    return {
      videoInput: isSet(object.videoInput) ? Boolean(object.videoInput) : false,
      media: isSet(object.media) ? Boolean(object.media) : false,
      slide: isSet(object.slide) ? Boolean(object.slide) : false,
      announcements: isSet(object.announcements) ? Boolean(object.announcements) : false,
      props: isSet(object.props) ? Boolean(object.props) : false,
      messages: isSet(object.messages) ? Boolean(object.messages) : false,
      presentation: isSet(object.presentation) ? String(object.presentation) : "",
      mask: isSet(object.mask) ? String(object.mask) : "",
    };
  },

  toJSON(message: APIV1Screen): unknown {
    const obj: any = {};
    message.videoInput !== undefined && (obj.videoInput = message.videoInput);
    message.media !== undefined && (obj.media = message.media);
    message.slide !== undefined && (obj.slide = message.slide);
    message.announcements !== undefined && (obj.announcements = message.announcements);
    message.props !== undefined && (obj.props = message.props);
    message.messages !== undefined && (obj.messages = message.messages);
    message.presentation !== undefined && (obj.presentation = message.presentation);
    message.mask !== undefined && (obj.mask = message.mask);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Screen>, I>>(object: I): APIV1Screen {
    const message = createBaseAPIV1Screen();
    message.videoInput = object.videoInput ?? false;
    message.media = object.media ?? false;
    message.slide = object.slide ?? false;
    message.announcements = object.announcements ?? false;
    message.props = object.props ?? false;
    message.messages = object.messages ?? false;
    message.presentation = object.presentation ?? "";
    message.mask = object.mask ?? "";
    return message;
  },
};

function createBaseAPIV1Macro(): APIV1Macro {
  return { id: undefined, color: undefined };
}

export const APIV1Macro = {
  encode(message: APIV1Macro, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.color !== undefined) {
      APIV1Color.encode(message.color, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Macro {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Macro();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.color = APIV1Color.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Macro {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      color: isSet(object.color) ? APIV1Color.fromJSON(object.color) : undefined,
    };
  },

  toJSON(message: APIV1Macro): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    message.color !== undefined && (obj.color = message.color ? APIV1Color.toJSON(message.color) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Macro>, I>>(object: I): APIV1Macro {
    const message = createBaseAPIV1Macro();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.color = (object.color !== undefined && object.color !== null)
      ? APIV1Color.fromPartial(object.color)
      : undefined;
    return message;
  },
};

function createBaseAPIV1GroupMember(): APIV1GroupMember {
  return { ip: "", port: 0 };
}

export const APIV1GroupMember = {
  encode(message: APIV1GroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1GroupMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1GroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.string();
          break;
        case 2:
          message.port = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1GroupMember {
    return { ip: isSet(object.ip) ? String(object.ip) : "", port: isSet(object.port) ? Number(object.port) : 0 };
  },

  toJSON(message: APIV1GroupMember): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = Math.round(message.port));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1GroupMember>, I>>(object: I): APIV1GroupMember {
    const message = createBaseAPIV1GroupMember();
    message.ip = object.ip ?? "";
    message.port = object.port ?? 0;
    return message;
  },
};

function createBaseAPIV1GroupMemberStatus(): APIV1GroupMemberStatus {
  return {
    ip: "",
    port: 0,
    name: "",
    platform: 0,
    osVersion: "",
    hostDescription: "",
    apiVersion: "",
    connectionStatus: 0,
  };
}

export const APIV1GroupMemberStatus = {
  encode(message: APIV1GroupMemberStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.platform !== 0) {
      writer.uint32(32).int32(message.platform);
    }
    if (message.osVersion !== "") {
      writer.uint32(42).string(message.osVersion);
    }
    if (message.hostDescription !== "") {
      writer.uint32(50).string(message.hostDescription);
    }
    if (message.apiVersion !== "") {
      writer.uint32(58).string(message.apiVersion);
    }
    if (message.connectionStatus !== 0) {
      writer.uint32(64).int32(message.connectionStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1GroupMemberStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1GroupMemberStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.string();
          break;
        case 2:
          message.port = reader.uint32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.platform = reader.int32() as any;
          break;
        case 5:
          message.osVersion = reader.string();
          break;
        case 6:
          message.hostDescription = reader.string();
          break;
        case 7:
          message.apiVersion = reader.string();
          break;
        case 8:
          message.connectionStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1GroupMemberStatus {
    return {
      ip: isSet(object.ip) ? String(object.ip) : "",
      port: isSet(object.port) ? Number(object.port) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      platform: isSet(object.platform)
        ? aPIV1GroupMemberStatus_APIV1GroupMemberStatusPlatformFromJSON(object.platform)
        : 0,
      osVersion: isSet(object.osVersion) ? String(object.osVersion) : "",
      hostDescription: isSet(object.hostDescription) ? String(object.hostDescription) : "",
      apiVersion: isSet(object.apiVersion) ? String(object.apiVersion) : "",
      connectionStatus: isSet(object.connectionStatus)
        ? aPIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatusFromJSON(object.connectionStatus)
        : 0,
    };
  },

  toJSON(message: APIV1GroupMemberStatus): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.name !== undefined && (obj.name = message.name);
    message.platform !== undefined &&
      (obj.platform = aPIV1GroupMemberStatus_APIV1GroupMemberStatusPlatformToJSON(message.platform));
    message.osVersion !== undefined && (obj.osVersion = message.osVersion);
    message.hostDescription !== undefined && (obj.hostDescription = message.hostDescription);
    message.apiVersion !== undefined && (obj.apiVersion = message.apiVersion);
    message.connectionStatus !== undefined &&
      (obj.connectionStatus = aPIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatusToJSON(
        message.connectionStatus,
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1GroupMemberStatus>, I>>(object: I): APIV1GroupMemberStatus {
    const message = createBaseAPIV1GroupMemberStatus();
    message.ip = object.ip ?? "";
    message.port = object.port ?? 0;
    message.name = object.name ?? "";
    message.platform = object.platform ?? 0;
    message.osVersion = object.osVersion ?? "";
    message.hostDescription = object.hostDescription ?? "";
    message.apiVersion = object.apiVersion ?? "";
    message.connectionStatus = object.connectionStatus ?? 0;
    return message;
  },
};

function createBaseAPIV1GroupDefinition(): APIV1GroupDefinition {
  return { timestamp: undefined, secret: "", name: "", members: [], groupIdentifier: undefined };
}

export const APIV1GroupDefinition = {
  encode(message: APIV1GroupDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(10).fork()).ldelim();
    }
    if (message.secret !== "") {
      writer.uint32(18).string(message.secret);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    for (const v of message.members) {
      APIV1GroupMember.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.groupIdentifier !== undefined) {
      UUID.encode(message.groupIdentifier, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1GroupDefinition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1GroupDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.secret = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.members.push(APIV1GroupMember.decode(reader, reader.uint32()));
          break;
        case 5:
          message.groupIdentifier = UUID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1GroupDefinition {
    return {
      timestamp: isSet(object.timestamp) ? Timestamp.fromJSON(object.timestamp) : undefined,
      secret: isSet(object.secret) ? String(object.secret) : "",
      name: isSet(object.name) ? String(object.name) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => APIV1GroupMember.fromJSON(e)) : [],
      groupIdentifier: isSet(object.groupIdentifier) ? UUID.fromJSON(object.groupIdentifier) : undefined,
    };
  },

  toJSON(message: APIV1GroupDefinition): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp ? Timestamp.toJSON(message.timestamp) : undefined);
    message.secret !== undefined && (obj.secret = message.secret);
    message.name !== undefined && (obj.name = message.name);
    if (message.members) {
      obj.members = message.members.map((e) => e ? APIV1GroupMember.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.groupIdentifier !== undefined &&
      (obj.groupIdentifier = message.groupIdentifier ? UUID.toJSON(message.groupIdentifier) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1GroupDefinition>, I>>(object: I): APIV1GroupDefinition {
    const message = createBaseAPIV1GroupDefinition();
    message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
      ? Timestamp.fromPartial(object.timestamp)
      : undefined;
    message.secret = object.secret ?? "";
    message.name = object.name ?? "";
    message.members = object.members?.map((e) => APIV1GroupMember.fromPartial(e)) || [];
    message.groupIdentifier = (object.groupIdentifier !== undefined && object.groupIdentifier !== null)
      ? UUID.fromPartial(object.groupIdentifier)
      : undefined;
    return message;
  },
};

function createBaseAPIV1ErrorResponse(): APIV1ErrorResponse {
  return { error: 0 };
}

export const APIV1ErrorResponse = {
  encode(message: APIV1ErrorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ErrorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ErrorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1ErrorResponse {
    return { error: isSet(object.error) ? aPIV1ErrorResponse_APIV1ErrorTypeFromJSON(object.error) : 0 };
  },

  toJSON(message: APIV1ErrorResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = aPIV1ErrorResponse_APIV1ErrorTypeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1ErrorResponse>, I>>(object: I): APIV1ErrorResponse {
    const message = createBaseAPIV1ErrorResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseAPIV1CaptureSettings(): APIV1CaptureSettings {
  return { source: undefined, audioRouting: [], disk: undefined, rtmp: undefined, resi: undefined };
}

export const APIV1CaptureSettings = {
  encode(message: APIV1CaptureSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== undefined) {
      UUID.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.audioRouting) {
      APIV1AudioRouting.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.disk !== undefined) {
      APIV1DiskCapture.encode(message.disk, writer.uint32(26).fork()).ldelim();
    }
    if (message.rtmp !== undefined) {
      APIV1RTMPCapture.encode(message.rtmp, writer.uint32(34).fork()).ldelim();
    }
    if (message.resi !== undefined) {
      APIV1ResiCapture.encode(message.resi, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1CaptureSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1CaptureSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = UUID.decode(reader, reader.uint32());
          break;
        case 2:
          message.audioRouting.push(APIV1AudioRouting.decode(reader, reader.uint32()));
          break;
        case 3:
          message.disk = APIV1DiskCapture.decode(reader, reader.uint32());
          break;
        case 4:
          message.rtmp = APIV1RTMPCapture.decode(reader, reader.uint32());
          break;
        case 5:
          message.resi = APIV1ResiCapture.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1CaptureSettings {
    return {
      source: isSet(object.source) ? UUID.fromJSON(object.source) : undefined,
      audioRouting: Array.isArray(object?.audioRouting)
        ? object.audioRouting.map((e: any) => APIV1AudioRouting.fromJSON(e))
        : [],
      disk: isSet(object.disk) ? APIV1DiskCapture.fromJSON(object.disk) : undefined,
      rtmp: isSet(object.rtmp) ? APIV1RTMPCapture.fromJSON(object.rtmp) : undefined,
      resi: isSet(object.resi) ? APIV1ResiCapture.fromJSON(object.resi) : undefined,
    };
  },

  toJSON(message: APIV1CaptureSettings): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source ? UUID.toJSON(message.source) : undefined);
    if (message.audioRouting) {
      obj.audioRouting = message.audioRouting.map((e) => e ? APIV1AudioRouting.toJSON(e) : undefined);
    } else {
      obj.audioRouting = [];
    }
    message.disk !== undefined && (obj.disk = message.disk ? APIV1DiskCapture.toJSON(message.disk) : undefined);
    message.rtmp !== undefined && (obj.rtmp = message.rtmp ? APIV1RTMPCapture.toJSON(message.rtmp) : undefined);
    message.resi !== undefined && (obj.resi = message.resi ? APIV1ResiCapture.toJSON(message.resi) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1CaptureSettings>, I>>(object: I): APIV1CaptureSettings {
    const message = createBaseAPIV1CaptureSettings();
    message.source = (object.source !== undefined && object.source !== null)
      ? UUID.fromPartial(object.source)
      : undefined;
    message.audioRouting = object.audioRouting?.map((e) => APIV1AudioRouting.fromPartial(e)) || [];
    message.disk = (object.disk !== undefined && object.disk !== null)
      ? APIV1DiskCapture.fromPartial(object.disk)
      : undefined;
    message.rtmp = (object.rtmp !== undefined && object.rtmp !== null)
      ? APIV1RTMPCapture.fromPartial(object.rtmp)
      : undefined;
    message.resi = (object.resi !== undefined && object.resi !== null)
      ? APIV1ResiCapture.fromPartial(object.resi)
      : undefined;
    return message;
  },
};

function createBaseAPIV1Size(): APIV1Size {
  return { width: 0, height: 0 };
}

export const APIV1Size = {
  encode(message: APIV1Size, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Size {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Size();
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

  fromJSON(object: any): APIV1Size {
    return {
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: APIV1Size): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Size>, I>>(object: I): APIV1Size {
    const message = createBaseAPIV1Size();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseAPIV1AudioRouting(): APIV1AudioRouting {
  return { map: [] };
}

export const APIV1AudioRouting = {
  encode(message: APIV1AudioRouting, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.map) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1AudioRouting {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioRouting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.map.push(reader.uint32());
            }
          } else {
            message.map.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1AudioRouting {
    return { map: Array.isArray(object?.map) ? object.map.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: APIV1AudioRouting): unknown {
    const obj: any = {};
    if (message.map) {
      obj.map = message.map.map((e) => Math.round(e));
    } else {
      obj.map = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1AudioRouting>, I>>(object: I): APIV1AudioRouting {
    const message = createBaseAPIV1AudioRouting();
    message.map = object.map?.map((e) => e) || [];
    return message;
  },
};

function createBaseAPIV1DiskCapture(): APIV1DiskCapture {
  return { fileLocation: "", codec: "", resolution: undefined, frameRate: 0 };
}

export const APIV1DiskCapture = {
  encode(message: APIV1DiskCapture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileLocation !== "") {
      writer.uint32(10).string(message.fileLocation);
    }
    if (message.codec !== "") {
      writer.uint32(18).string(message.codec);
    }
    if (message.resolution !== undefined) {
      APIV1Size.encode(message.resolution, writer.uint32(26).fork()).ldelim();
    }
    if (message.frameRate !== 0) {
      writer.uint32(33).double(message.frameRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1DiskCapture {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1DiskCapture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileLocation = reader.string();
          break;
        case 2:
          message.codec = reader.string();
          break;
        case 3:
          message.resolution = APIV1Size.decode(reader, reader.uint32());
          break;
        case 4:
          message.frameRate = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1DiskCapture {
    return {
      fileLocation: isSet(object.fileLocation) ? String(object.fileLocation) : "",
      codec: isSet(object.codec) ? String(object.codec) : "",
      resolution: isSet(object.resolution) ? APIV1Size.fromJSON(object.resolution) : undefined,
      frameRate: isSet(object.frameRate) ? Number(object.frameRate) : 0,
    };
  },

  toJSON(message: APIV1DiskCapture): unknown {
    const obj: any = {};
    message.fileLocation !== undefined && (obj.fileLocation = message.fileLocation);
    message.codec !== undefined && (obj.codec = message.codec);
    message.resolution !== undefined &&
      (obj.resolution = message.resolution ? APIV1Size.toJSON(message.resolution) : undefined);
    message.frameRate !== undefined && (obj.frameRate = message.frameRate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1DiskCapture>, I>>(object: I): APIV1DiskCapture {
    const message = createBaseAPIV1DiskCapture();
    message.fileLocation = object.fileLocation ?? "";
    message.codec = object.codec ?? "";
    message.resolution = (object.resolution !== undefined && object.resolution !== null)
      ? APIV1Size.fromPartial(object.resolution)
      : undefined;
    message.frameRate = object.frameRate ?? 0;
    return message;
  },
};

function createBaseAPIV1RTMPCapture(): APIV1RTMPCapture {
  return { server: "", key: "", encoding: "", saveLocal: false, fileLocation: "" };
}

export const APIV1RTMPCapture = {
  encode(message: APIV1RTMPCapture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.server !== "") {
      writer.uint32(10).string(message.server);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.encoding !== "") {
      writer.uint32(26).string(message.encoding);
    }
    if (message.saveLocal === true) {
      writer.uint32(32).bool(message.saveLocal);
    }
    if (message.fileLocation !== "") {
      writer.uint32(42).string(message.fileLocation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1RTMPCapture {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1RTMPCapture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.server = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.encoding = reader.string();
          break;
        case 4:
          message.saveLocal = reader.bool();
          break;
        case 5:
          message.fileLocation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1RTMPCapture {
    return {
      server: isSet(object.server) ? String(object.server) : "",
      key: isSet(object.key) ? String(object.key) : "",
      encoding: isSet(object.encoding) ? String(object.encoding) : "",
      saveLocal: isSet(object.saveLocal) ? Boolean(object.saveLocal) : false,
      fileLocation: isSet(object.fileLocation) ? String(object.fileLocation) : "",
    };
  },

  toJSON(message: APIV1RTMPCapture): unknown {
    const obj: any = {};
    message.server !== undefined && (obj.server = message.server);
    message.key !== undefined && (obj.key = message.key);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.saveLocal !== undefined && (obj.saveLocal = message.saveLocal);
    message.fileLocation !== undefined && (obj.fileLocation = message.fileLocation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1RTMPCapture>, I>>(object: I): APIV1RTMPCapture {
    const message = createBaseAPIV1RTMPCapture();
    message.server = object.server ?? "";
    message.key = object.key ?? "";
    message.encoding = object.encoding ?? "";
    message.saveLocal = object.saveLocal ?? false;
    message.fileLocation = object.fileLocation ?? "";
    return message;
  },
};

function createBaseAPIV1ResiCapture(): APIV1ResiCapture {
  return { eventName: "", eventDescription: "", destinationGroup: "", encoding: "" };
}

export const APIV1ResiCapture = {
  encode(message: APIV1ResiCapture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventName !== "") {
      writer.uint32(10).string(message.eventName);
    }
    if (message.eventDescription !== "") {
      writer.uint32(18).string(message.eventDescription);
    }
    if (message.destinationGroup !== "") {
      writer.uint32(26).string(message.destinationGroup);
    }
    if (message.encoding !== "") {
      writer.uint32(34).string(message.encoding);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ResiCapture {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ResiCapture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventName = reader.string();
          break;
        case 2:
          message.eventDescription = reader.string();
          break;
        case 3:
          message.destinationGroup = reader.string();
          break;
        case 4:
          message.encoding = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1ResiCapture {
    return {
      eventName: isSet(object.eventName) ? String(object.eventName) : "",
      eventDescription: isSet(object.eventDescription) ? String(object.eventDescription) : "",
      destinationGroup: isSet(object.destinationGroup) ? String(object.destinationGroup) : "",
      encoding: isSet(object.encoding) ? String(object.encoding) : "",
    };
  },

  toJSON(message: APIV1ResiCapture): unknown {
    const obj: any = {};
    message.eventName !== undefined && (obj.eventName = message.eventName);
    message.eventDescription !== undefined && (obj.eventDescription = message.eventDescription);
    message.destinationGroup !== undefined && (obj.destinationGroup = message.destinationGroup);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1ResiCapture>, I>>(object: I): APIV1ResiCapture {
    const message = createBaseAPIV1ResiCapture();
    message.eventName = object.eventName ?? "";
    message.eventDescription = object.eventDescription ?? "";
    message.destinationGroup = object.destinationGroup ?? "";
    message.encoding = object.encoding ?? "";
    return message;
  },
};

function createBaseAPIV1Presentation(): APIV1Presentation {
  return { id: undefined, groups: [], hasTimeline: false, presentationPath: "", destination: 0 };
}

export const APIV1Presentation = {
  encode(message: APIV1Presentation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      APIV1Presentation_SlideGroup.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.hasTimeline === true) {
      writer.uint32(24).bool(message.hasTimeline);
    }
    if (message.presentationPath !== "") {
      writer.uint32(34).string(message.presentationPath);
    }
    if (message.destination !== 0) {
      writer.uint32(40).int32(message.destination);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Presentation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Presentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(APIV1Presentation_SlideGroup.decode(reader, reader.uint32()));
          break;
        case 3:
          message.hasTimeline = reader.bool();
          break;
        case 4:
          message.presentationPath = reader.string();
          break;
        case 5:
          message.destination = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Presentation {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      groups: Array.isArray(object?.groups)
        ? object.groups.map((e: any) => APIV1Presentation_SlideGroup.fromJSON(e))
        : [],
      hasTimeline: isSet(object.hasTimeline) ? Boolean(object.hasTimeline) : false,
      presentationPath: isSet(object.presentationPath) ? String(object.presentationPath) : "",
      destination: isSet(object.destination) ? aPIV1Presentation_DestinationFromJSON(object.destination) : 0,
    };
  },

  toJSON(message: APIV1Presentation): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? APIV1Presentation_SlideGroup.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.hasTimeline !== undefined && (obj.hasTimeline = message.hasTimeline);
    message.presentationPath !== undefined && (obj.presentationPath = message.presentationPath);
    message.destination !== undefined && (obj.destination = aPIV1Presentation_DestinationToJSON(message.destination));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Presentation>, I>>(object: I): APIV1Presentation {
    const message = createBaseAPIV1Presentation();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.groups = object.groups?.map((e) => APIV1Presentation_SlideGroup.fromPartial(e)) || [];
    message.hasTimeline = object.hasTimeline ?? false;
    message.presentationPath = object.presentationPath ?? "";
    message.destination = object.destination ?? 0;
    return message;
  },
};

function createBaseAPIV1Presentation_SlideGroup(): APIV1Presentation_SlideGroup {
  return { name: "", color: undefined, slides: [] };
}

export const APIV1Presentation_SlideGroup = {
  encode(message: APIV1Presentation_SlideGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.color !== undefined) {
      APIV1Color.encode(message.color, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.slides) {
      APIV1Presentation_SlideGroup_Slide.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Presentation_SlideGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Presentation_SlideGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.color = APIV1Color.decode(reader, reader.uint32());
          break;
        case 3:
          message.slides.push(APIV1Presentation_SlideGroup_Slide.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Presentation_SlideGroup {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      color: isSet(object.color) ? APIV1Color.fromJSON(object.color) : undefined,
      slides: Array.isArray(object?.slides)
        ? object.slides.map((e: any) => APIV1Presentation_SlideGroup_Slide.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1Presentation_SlideGroup): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.color !== undefined && (obj.color = message.color ? APIV1Color.toJSON(message.color) : undefined);
    if (message.slides) {
      obj.slides = message.slides.map((e) => e ? APIV1Presentation_SlideGroup_Slide.toJSON(e) : undefined);
    } else {
      obj.slides = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Presentation_SlideGroup>, I>>(object: I): APIV1Presentation_SlideGroup {
    const message = createBaseAPIV1Presentation_SlideGroup();
    message.name = object.name ?? "";
    message.color = (object.color !== undefined && object.color !== null)
      ? APIV1Color.fromPartial(object.color)
      : undefined;
    message.slides = object.slides?.map((e) => APIV1Presentation_SlideGroup_Slide.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1Presentation_SlideGroup_Slide(): APIV1Presentation_SlideGroup_Slide {
  return { enabled: false, notes: "", text: "", label: "", size: undefined };
}

export const APIV1Presentation_SlideGroup_Slide = {
  encode(message: APIV1Presentation_SlideGroup_Slide, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.notes !== "") {
      writer.uint32(18).string(message.notes);
    }
    if (message.text !== "") {
      writer.uint32(26).string(message.text);
    }
    if (message.label !== "") {
      writer.uint32(42).string(message.label);
    }
    if (message.size !== undefined) {
      APIV1Size.encode(message.size, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Presentation_SlideGroup_Slide {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Presentation_SlideGroup_Slide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.notes = reader.string();
          break;
        case 3:
          message.text = reader.string();
          break;
        case 5:
          message.label = reader.string();
          break;
        case 6:
          message.size = APIV1Size.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Presentation_SlideGroup_Slide {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      notes: isSet(object.notes) ? String(object.notes) : "",
      text: isSet(object.text) ? String(object.text) : "",
      label: isSet(object.label) ? String(object.label) : "",
      size: isSet(object.size) ? APIV1Size.fromJSON(object.size) : undefined,
    };
  },

  toJSON(message: APIV1Presentation_SlideGroup_Slide): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.notes !== undefined && (obj.notes = message.notes);
    message.text !== undefined && (obj.text = message.text);
    message.label !== undefined && (obj.label = message.label);
    message.size !== undefined && (obj.size = message.size ? APIV1Size.toJSON(message.size) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Presentation_SlideGroup_Slide>, I>>(
    object: I,
  ): APIV1Presentation_SlideGroup_Slide {
    const message = createBaseAPIV1Presentation_SlideGroup_Slide();
    message.enabled = object.enabled ?? false;
    message.notes = object.notes ?? "";
    message.text = object.text ?? "";
    message.label = object.label ?? "";
    message.size = (object.size !== undefined && object.size !== null) ? APIV1Size.fromPartial(object.size) : undefined;
    return message;
  },
};

function createBaseAPIV1StageLayoutMap(): APIV1StageLayoutMap {
  return { entries: [] };
}

export const APIV1StageLayoutMap = {
  encode(message: APIV1StageLayoutMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      APIV1StageLayoutMap_Entry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1StageLayoutMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageLayoutMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(APIV1StageLayoutMap_Entry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1StageLayoutMap {
    return {
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => APIV1StageLayoutMap_Entry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1StageLayoutMap): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? APIV1StageLayoutMap_Entry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1StageLayoutMap>, I>>(object: I): APIV1StageLayoutMap {
    const message = createBaseAPIV1StageLayoutMap();
    message.entries = object.entries?.map((e) => APIV1StageLayoutMap_Entry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1StageLayoutMap_Entry(): APIV1StageLayoutMap_Entry {
  return { screen: undefined, layout: undefined };
}

export const APIV1StageLayoutMap_Entry = {
  encode(message: APIV1StageLayoutMap_Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.screen !== undefined) {
      APIV1Identifier.encode(message.screen, writer.uint32(10).fork()).ldelim();
    }
    if (message.layout !== undefined) {
      APIV1Identifier.encode(message.layout, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1StageLayoutMap_Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageLayoutMap_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.screen = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.layout = APIV1Identifier.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1StageLayoutMap_Entry {
    return {
      screen: isSet(object.screen) ? APIV1Identifier.fromJSON(object.screen) : undefined,
      layout: isSet(object.layout) ? APIV1Identifier.fromJSON(object.layout) : undefined,
    };
  },

  toJSON(message: APIV1StageLayoutMap_Entry): unknown {
    const obj: any = {};
    message.screen !== undefined && (obj.screen = message.screen ? APIV1Identifier.toJSON(message.screen) : undefined);
    message.layout !== undefined && (obj.layout = message.layout ? APIV1Identifier.toJSON(message.layout) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1StageLayoutMap_Entry>, I>>(object: I): APIV1StageLayoutMap_Entry {
    const message = createBaseAPIV1StageLayoutMap_Entry();
    message.screen = (object.screen !== undefined && object.screen !== null)
      ? APIV1Identifier.fromPartial(object.screen)
      : undefined;
    message.layout = (object.layout !== undefined && object.layout !== null)
      ? APIV1Identifier.fromPartial(object.layout)
      : undefined;
    return message;
  },
};

function createBaseAPIV1ThemeGroup(): APIV1ThemeGroup {
  return { id: undefined, groups: [], themes: [] };
}

export const APIV1ThemeGroup = {
  encode(message: APIV1ThemeGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      APIV1ThemeGroup.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.themes) {
      APIV1Theme.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ThemeGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(APIV1ThemeGroup.decode(reader, reader.uint32()));
          break;
        case 3:
          message.themes.push(APIV1Theme.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1ThemeGroup {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => APIV1ThemeGroup.fromJSON(e)) : [],
      themes: Array.isArray(object?.themes) ? object.themes.map((e: any) => APIV1Theme.fromJSON(e)) : [],
    };
  },

  toJSON(message: APIV1ThemeGroup): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? APIV1ThemeGroup.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    if (message.themes) {
      obj.themes = message.themes.map((e) => e ? APIV1Theme.toJSON(e) : undefined);
    } else {
      obj.themes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1ThemeGroup>, I>>(object: I): APIV1ThemeGroup {
    const message = createBaseAPIV1ThemeGroup();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.groups = object.groups?.map((e) => APIV1ThemeGroup.fromPartial(e)) || [];
    message.themes = object.themes?.map((e) => APIV1Theme.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1Theme(): APIV1Theme {
  return { id: undefined, slides: [] };
}

export const APIV1Theme = {
  encode(message: APIV1Theme, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.slides) {
      APIV1ThemeSlide.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Theme {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Theme();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.slides.push(APIV1ThemeSlide.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1Theme {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      slides: Array.isArray(object?.slides) ? object.slides.map((e: any) => APIV1ThemeSlide.fromJSON(e)) : [],
    };
  },

  toJSON(message: APIV1Theme): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    if (message.slides) {
      obj.slides = message.slides.map((e) => e ? APIV1ThemeSlide.toJSON(e) : undefined);
    } else {
      obj.slides = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1Theme>, I>>(object: I): APIV1Theme {
    const message = createBaseAPIV1Theme();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.slides = object.slides?.map((e) => APIV1ThemeSlide.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1ThemeSlide(): APIV1ThemeSlide {
  return { id: undefined, size: undefined, background: undefined };
}

export const APIV1ThemeSlide = {
  encode(message: APIV1ThemeSlide, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.size !== undefined) {
      APIV1Size.encode(message.size, writer.uint32(18).fork()).ldelim();
    }
    if (message.background !== undefined) {
      APIV1Color.encode(message.background, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ThemeSlide {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeSlide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.size = APIV1Size.decode(reader, reader.uint32());
          break;
        case 3:
          message.background = APIV1Color.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1ThemeSlide {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      size: isSet(object.size) ? APIV1Size.fromJSON(object.size) : undefined,
      background: isSet(object.background) ? APIV1Color.fromJSON(object.background) : undefined,
    };
  },

  toJSON(message: APIV1ThemeSlide): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    message.size !== undefined && (obj.size = message.size ? APIV1Size.toJSON(message.size) : undefined);
    message.background !== undefined &&
      (obj.background = message.background ? APIV1Color.toJSON(message.background) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1ThemeSlide>, I>>(object: I): APIV1ThemeSlide {
    const message = createBaseAPIV1ThemeSlide();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.size = (object.size !== undefined && object.size !== null) ? APIV1Size.fromPartial(object.size) : undefined;
    message.background = (object.background !== undefined && object.background !== null)
      ? APIV1Color.fromPartial(object.background)
      : undefined;
    return message;
  },
};

function createBaseAPIV1SlideDisplayDetails(): APIV1SlideDisplayDetails {
  return { text: "", notes: "", uuid: "" };
}

export const APIV1SlideDisplayDetails = {
  encode(message: APIV1SlideDisplayDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.notes !== "") {
      writer.uint32(18).string(message.notes);
    }
    if (message.uuid !== "") {
      writer.uint32(26).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1SlideDisplayDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1SlideDisplayDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        case 2:
          message.notes = reader.string();
          break;
        case 3:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1SlideDisplayDetails {
    return {
      text: isSet(object.text) ? String(object.text) : "",
      notes: isSet(object.notes) ? String(object.notes) : "",
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
    };
  },

  toJSON(message: APIV1SlideDisplayDetails): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    message.notes !== undefined && (obj.notes = message.notes);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1SlideDisplayDetails>, I>>(object: I): APIV1SlideDisplayDetails {
    const message = createBaseAPIV1SlideDisplayDetails();
    message.text = object.text ?? "";
    message.notes = object.notes ?? "";
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBaseAPIV1ScreenConfig(): APIV1ScreenConfig {
  return { id: undefined, size: undefined, screenType: 0 };
}

export const APIV1ScreenConfig = {
  encode(message: APIV1ScreenConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.size !== undefined) {
      APIV1Size.encode(message.size, writer.uint32(18).fork()).ldelim();
    }
    if (message.screenType !== 0) {
      writer.uint32(24).int32(message.screenType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ScreenConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ScreenConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.size = APIV1Size.decode(reader, reader.uint32());
          break;
        case 3:
          message.screenType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1ScreenConfig {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      size: isSet(object.size) ? APIV1Size.fromJSON(object.size) : undefined,
      screenType: isSet(object.screenType) ? aPIV1ScreenConfig_APIV1ScreenTypeFromJSON(object.screenType) : 0,
    };
  },

  toJSON(message: APIV1ScreenConfig): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    message.size !== undefined && (obj.size = message.size ? APIV1Size.toJSON(message.size) : undefined);
    message.screenType !== undefined && (obj.screenType = aPIV1ScreenConfig_APIV1ScreenTypeToJSON(message.screenType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1ScreenConfig>, I>>(object: I): APIV1ScreenConfig {
    const message = createBaseAPIV1ScreenConfig();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.size = (object.size !== undefined && object.size !== null) ? APIV1Size.fromPartial(object.size) : undefined;
    message.screenType = object.screenType ?? 0;
    return message;
  },
};

function createBaseAPIV1PropData(): APIV1PropData {
  return { id: undefined, isActive: false };
}

export const APIV1PropData = {
  encode(message: APIV1PropData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.isActive === true) {
      writer.uint32(16).bool(message.isActive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1PropData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = APIV1Identifier.decode(reader, reader.uint32());
          break;
        case 2:
          message.isActive = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APIV1PropData {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
    };
  },

  toJSON(message: APIV1PropData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? APIV1Identifier.toJSON(message.id) : undefined);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APIV1PropData>, I>>(object: I): APIV1PropData {
    const message = createBaseAPIV1PropData();
    message.id = (object.id !== undefined && object.id !== null) ? APIV1Identifier.fromPartial(object.id) : undefined;
    message.isActive = object.isActive ?? false;
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
