/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { AlignmentGuide } from "./alignmentGuide";
import { Color, URL, UUID } from "./basicTypes";
import { Transition } from "./effects";
import { Graphics_Element, Graphics_Size } from "./graphicsData";
import { Clock_Format, Timer_Format } from "./timers";

export const protobufPackage = "rv.data";

export interface Slide {
  elements: Slide_Element[];
  elementBuildOrder: UUID[];
  guidelines: AlignmentGuide[];
  drawsBackgroundColor: boolean;
  backgroundColor: Color | undefined;
  size: Graphics_Size | undefined;
  uuid: UUID | undefined;
}

export interface Slide_Element {
  element: Graphics_Element | undefined;
  buildIn: Slide_Element_Build | undefined;
  buildOut: Slide_Element_Build | undefined;
  info: number;
  revealType: Slide_Element_TextRevealType;
  dataLinks: Slide_Element_DataLink[];
  childBuilds: Slide_Element_ChildBuild[];
  revealFromIndex: number;
  textScroller: Slide_Element_TextScroller | undefined;
}

export enum Slide_Element_TextRevealType {
  TEXT_REVEAL_TYPE_NONE = 0,
  TEXT_REVEAL_TYPE_BULLET = 1,
  TEXT_REVEAL_TYPE_UNDERLINE = 2,
  UNRECOGNIZED = -1,
}

export function slide_Element_TextRevealTypeFromJSON(object: any): Slide_Element_TextRevealType {
  switch (object) {
    case 0:
    case "TEXT_REVEAL_TYPE_NONE":
      return Slide_Element_TextRevealType.TEXT_REVEAL_TYPE_NONE;
    case 1:
    case "TEXT_REVEAL_TYPE_BULLET":
      return Slide_Element_TextRevealType.TEXT_REVEAL_TYPE_BULLET;
    case 2:
    case "TEXT_REVEAL_TYPE_UNDERLINE":
      return Slide_Element_TextRevealType.TEXT_REVEAL_TYPE_UNDERLINE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_TextRevealType.UNRECOGNIZED;
  }
}

export function slide_Element_TextRevealTypeToJSON(object: Slide_Element_TextRevealType): string {
  switch (object) {
    case Slide_Element_TextRevealType.TEXT_REVEAL_TYPE_NONE:
      return "TEXT_REVEAL_TYPE_NONE";
    case Slide_Element_TextRevealType.TEXT_REVEAL_TYPE_BULLET:
      return "TEXT_REVEAL_TYPE_BULLET";
    case Slide_Element_TextRevealType.TEXT_REVEAL_TYPE_UNDERLINE:
      return "TEXT_REVEAL_TYPE_UNDERLINE";
    case Slide_Element_TextRevealType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_Build {
  uuid: UUID | undefined;
  elementUUID: UUID | undefined;
  start: Slide_Element_Build_Start;
  delayTime: number;
  transition: Transition | undefined;
}

export enum Slide_Element_Build_Start {
  START_ON_CLICK = 0,
  START_WITH_PREVIOUS = 1,
  START_AFTER_PREVIOUS = 2,
  START_WITH_SLIDE = 3,
  UNRECOGNIZED = -1,
}

export function slide_Element_Build_StartFromJSON(object: any): Slide_Element_Build_Start {
  switch (object) {
    case 0:
    case "START_ON_CLICK":
      return Slide_Element_Build_Start.START_ON_CLICK;
    case 1:
    case "START_WITH_PREVIOUS":
      return Slide_Element_Build_Start.START_WITH_PREVIOUS;
    case 2:
    case "START_AFTER_PREVIOUS":
      return Slide_Element_Build_Start.START_AFTER_PREVIOUS;
    case 3:
    case "START_WITH_SLIDE":
      return Slide_Element_Build_Start.START_WITH_SLIDE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_Build_Start.UNRECOGNIZED;
  }
}

export function slide_Element_Build_StartToJSON(object: Slide_Element_Build_Start): string {
  switch (object) {
    case Slide_Element_Build_Start.START_ON_CLICK:
      return "START_ON_CLICK";
    case Slide_Element_Build_Start.START_WITH_PREVIOUS:
      return "START_WITH_PREVIOUS";
    case Slide_Element_Build_Start.START_AFTER_PREVIOUS:
      return "START_AFTER_PREVIOUS";
    case Slide_Element_Build_Start.START_WITH_SLIDE:
      return "START_WITH_SLIDE";
    case Slide_Element_Build_Start.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_ChildBuild {
  uuid: UUID | undefined;
  start: Slide_Element_ChildBuild_Start;
  delayTime: number;
  index: number;
}

export enum Slide_Element_ChildBuild_Start {
  START_ON_CLICK = 0,
  START_WITH_PREVIOUS = 1,
  START_AFTER_PREVIOUS = 2,
  START_WITH_SLIDE = 3,
  UNRECOGNIZED = -1,
}

export function slide_Element_ChildBuild_StartFromJSON(object: any): Slide_Element_ChildBuild_Start {
  switch (object) {
    case 0:
    case "START_ON_CLICK":
      return Slide_Element_ChildBuild_Start.START_ON_CLICK;
    case 1:
    case "START_WITH_PREVIOUS":
      return Slide_Element_ChildBuild_Start.START_WITH_PREVIOUS;
    case 2:
    case "START_AFTER_PREVIOUS":
      return Slide_Element_ChildBuild_Start.START_AFTER_PREVIOUS;
    case 3:
    case "START_WITH_SLIDE":
      return Slide_Element_ChildBuild_Start.START_WITH_SLIDE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_ChildBuild_Start.UNRECOGNIZED;
  }
}

export function slide_Element_ChildBuild_StartToJSON(object: Slide_Element_ChildBuild_Start): string {
  switch (object) {
    case Slide_Element_ChildBuild_Start.START_ON_CLICK:
      return "START_ON_CLICK";
    case Slide_Element_ChildBuild_Start.START_WITH_PREVIOUS:
      return "START_WITH_PREVIOUS";
    case Slide_Element_ChildBuild_Start.START_AFTER_PREVIOUS:
      return "START_AFTER_PREVIOUS";
    case Slide_Element_ChildBuild_Start.START_WITH_SLIDE:
      return "START_WITH_SLIDE";
    case Slide_Element_ChildBuild_Start.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink {
  ticker?: Slide_Element_DataLink_Ticker | undefined;
  alternateText?: Slide_Element_DataLink_AlternateElementText | undefined;
  timerText?: Slide_Element_DataLink_TimerText | undefined;
  clockText?: Slide_Element_DataLink_ClockText | undefined;
  chordChart?: Slide_Element_DataLink_ChordChart | undefined;
  outputScreen?: Slide_Element_DataLink_OutputScreen | undefined;
  pcoLive?: Slide_Element_DataLink_PCOLive | undefined;
  alternateFill?: Slide_Element_DataLink_AlternateElementFill | undefined;
  visibilityLink?: Slide_Element_DataLink_VisibilityLink | undefined;
  slideText?: Slide_Element_DataLink_SlideText | undefined;
  stageMessage?: Slide_Element_DataLink_StageMessage | undefined;
  videoCountdown?: Slide_Element_DataLink_VideoCountdown | undefined;
  slideImage?: Slide_Element_DataLink_SlideImage | undefined;
  ccliText?: Slide_Element_DataLink_CCLIText | undefined;
  groupName?: Slide_Element_DataLink_GroupName | undefined;
  groupColor?: Slide_Element_DataLink_GroupColor | undefined;
  presentationNotes?: Slide_Element_DataLink_PresentationNotes | undefined;
  playlistItem?: Slide_Element_DataLink_PlaylistItem | undefined;
  autoAdvanceTimeRemaining?: Slide_Element_DataLink_AutoAdvanceTimeRemaining | undefined;
  captureStatusText?: Slide_Element_DataLink_CaptureStatusText | undefined;
  captureStatusColor?: Slide_Element_DataLink_CaptureStatusColor | undefined;
  slideCount?: Slide_Element_DataLink_SlideCount | undefined;
  audioCountdown?: Slide_Element_DataLink_AudioCountdown | undefined;
  presentation?: Slide_Element_DataLink_Presentation | undefined;
  slideLabelText?: Slide_Element_DataLink_SlideLabelText | undefined;
  slideLabelColor?: Slide_Element_DataLink_SlideLabelColor | undefined;
  rssFeed?: Slide_Element_DataLink_RSSFeed | undefined;
  fileFeed?: Slide_Element_DataLink_FileFeed | undefined;
  chordProChart?: Slide_Element_DataLink_ChordProChart | undefined;
}

export interface Slide_Element_DataLink_RSSFeed {
  url: URL | undefined;
  content: Slide_Element_DataLink_RSSFeed_ContentType;
  textDelimiter: string;
}

export enum Slide_Element_DataLink_RSSFeed_ContentType {
  CONTENT_TYPE_TITLE_ONLY = 0,
  CONTENT_TYPE_TITLE_AND_DESCRIPTION = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_RSSFeed_ContentTypeFromJSON(
  object: any,
): Slide_Element_DataLink_RSSFeed_ContentType {
  switch (object) {
    case 0:
    case "CONTENT_TYPE_TITLE_ONLY":
      return Slide_Element_DataLink_RSSFeed_ContentType.CONTENT_TYPE_TITLE_ONLY;
    case 1:
    case "CONTENT_TYPE_TITLE_AND_DESCRIPTION":
      return Slide_Element_DataLink_RSSFeed_ContentType.CONTENT_TYPE_TITLE_AND_DESCRIPTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_RSSFeed_ContentType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_RSSFeed_ContentTypeToJSON(
  object: Slide_Element_DataLink_RSSFeed_ContentType,
): string {
  switch (object) {
    case Slide_Element_DataLink_RSSFeed_ContentType.CONTENT_TYPE_TITLE_ONLY:
      return "CONTENT_TYPE_TITLE_ONLY";
    case Slide_Element_DataLink_RSSFeed_ContentType.CONTENT_TYPE_TITLE_AND_DESCRIPTION:
      return "CONTENT_TYPE_TITLE_AND_DESCRIPTION";
    case Slide_Element_DataLink_RSSFeed_ContentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_FileFeed {
  url: URL | undefined;
}

export interface Slide_Element_DataLink_Ticker {
  playRate: number;
  shouldLoop: boolean;
  loopDelay: number;
  textDelimiter: string;
  textType?: Slide_Element_DataLink_Ticker_TextType | undefined;
  rssType?: Slide_Element_DataLink_Ticker_RSSType | undefined;
  fileType?: Slide_Element_DataLink_Ticker_FileType | undefined;
}

export interface Slide_Element_DataLink_Ticker_TextType {
  text: string;
}

export interface Slide_Element_DataLink_Ticker_RSSType {
  url: URL | undefined;
  content: Slide_Element_DataLink_Ticker_RSSType_ContentType;
}

export enum Slide_Element_DataLink_Ticker_RSSType_ContentType {
  CONTENT_TYPE_TITLE_ONLY = 0,
  CONTENT_TYPE_TITLE_AND_DESCRIPTION = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_Ticker_RSSType_ContentTypeFromJSON(
  object: any,
): Slide_Element_DataLink_Ticker_RSSType_ContentType {
  switch (object) {
    case 0:
    case "CONTENT_TYPE_TITLE_ONLY":
      return Slide_Element_DataLink_Ticker_RSSType_ContentType.CONTENT_TYPE_TITLE_ONLY;
    case 1:
    case "CONTENT_TYPE_TITLE_AND_DESCRIPTION":
      return Slide_Element_DataLink_Ticker_RSSType_ContentType.CONTENT_TYPE_TITLE_AND_DESCRIPTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_Ticker_RSSType_ContentType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_Ticker_RSSType_ContentTypeToJSON(
  object: Slide_Element_DataLink_Ticker_RSSType_ContentType,
): string {
  switch (object) {
    case Slide_Element_DataLink_Ticker_RSSType_ContentType.CONTENT_TYPE_TITLE_ONLY:
      return "CONTENT_TYPE_TITLE_ONLY";
    case Slide_Element_DataLink_Ticker_RSSType_ContentType.CONTENT_TYPE_TITLE_AND_DESCRIPTION:
      return "CONTENT_TYPE_TITLE_AND_DESCRIPTION";
    case Slide_Element_DataLink_Ticker_RSSType_ContentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_Ticker_FileType {
  url: URL | undefined;
}

export interface Slide_Element_DataLink_AlternateElementText {
  otherElementUuid: UUID | undefined;
  otherElementName: string;
  textTransformOptions: number;
  textTransform: Slide_Element_DataLink_AlternateElementText_TextTransformOption;
}

export enum Slide_Element_DataLink_AlternateElementText_TextTransformOption {
  TEXT_TRANSFORM_OPTION_NONE = 0,
  TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS = 1,
  TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE = 2,
  TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE = 3,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_AlternateElementText_TextTransformOptionFromJSON(
  object: any,
): Slide_Element_DataLink_AlternateElementText_TextTransformOption {
  switch (object) {
    case 0:
    case "TEXT_TRANSFORM_OPTION_NONE":
      return Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_NONE;
    case 1:
    case "TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS":
      return Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS;
    case 2:
    case "TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE":
      return Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE;
    case 3:
    case "TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE":
      return Slide_Element_DataLink_AlternateElementText_TextTransformOption
        .TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_AlternateElementText_TextTransformOption.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_AlternateElementText_TextTransformOptionToJSON(
  object: Slide_Element_DataLink_AlternateElementText_TextTransformOption,
): string {
  switch (object) {
    case Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_NONE:
      return "TEXT_TRANSFORM_OPTION_NONE";
    case Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS:
      return "TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS";
    case Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE:
      return "TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE";
    case Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE:
      return "TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE";
    case Slide_Element_DataLink_AlternateElementText_TextTransformOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_CCLIText {
}

export interface Slide_Element_DataLink_ColorTrigger {
  time: number;
  color: Color | undefined;
}

export interface Slide_Element_DataLink_TimerText {
  timerUuid: UUID | undefined;
  timerName: string;
  timerFormat: Timer_Format | undefined;
  timerFormatString: string;
  colorTriggers: Slide_Element_DataLink_ColorTrigger[];
}

export interface Slide_Element_DataLink_ClockText {
  clockFormatString: string;
  format: Clock_Format | undefined;
}

export interface Slide_Element_DataLink_ChordChart {
}

export interface Slide_Element_DataLink_OutputScreen {
  screenId: UUID | undefined;
  screenName: string;
}

export interface Slide_Element_DataLink_PCOLive {
  theme: Slide_Element_DataLink_PCOLive_Theme;
  countdownType: Slide_Element_DataLink_PCOLive_CountdownType;
}

export enum Slide_Element_DataLink_PCOLive_Theme {
  PCOLIVE_THEME_LIGHT = 0,
  PCOLIVE_THEME_DARK = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_PCOLive_ThemeFromJSON(object: any): Slide_Element_DataLink_PCOLive_Theme {
  switch (object) {
    case 0:
    case "PCOLIVE_THEME_LIGHT":
      return Slide_Element_DataLink_PCOLive_Theme.PCOLIVE_THEME_LIGHT;
    case 1:
    case "PCOLIVE_THEME_DARK":
      return Slide_Element_DataLink_PCOLive_Theme.PCOLIVE_THEME_DARK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_PCOLive_Theme.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_PCOLive_ThemeToJSON(object: Slide_Element_DataLink_PCOLive_Theme): string {
  switch (object) {
    case Slide_Element_DataLink_PCOLive_Theme.PCOLIVE_THEME_LIGHT:
      return "PCOLIVE_THEME_LIGHT";
    case Slide_Element_DataLink_PCOLive_Theme.PCOLIVE_THEME_DARK:
      return "PCOLIVE_THEME_DARK";
    case Slide_Element_DataLink_PCOLive_Theme.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Slide_Element_DataLink_PCOLive_CountdownType {
  COUNTDOWN_TYPE_FULL_ITEM_LENGTH = 0,
  COUNTDOWN_TYPE_END_ITEM_ON_TIME = 1,
  COUNTDOWN_TYPE_END_SERVICE_ON_TIME = 2,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_PCOLive_CountdownTypeFromJSON(
  object: any,
): Slide_Element_DataLink_PCOLive_CountdownType {
  switch (object) {
    case 0:
    case "COUNTDOWN_TYPE_FULL_ITEM_LENGTH":
      return Slide_Element_DataLink_PCOLive_CountdownType.COUNTDOWN_TYPE_FULL_ITEM_LENGTH;
    case 1:
    case "COUNTDOWN_TYPE_END_ITEM_ON_TIME":
      return Slide_Element_DataLink_PCOLive_CountdownType.COUNTDOWN_TYPE_END_ITEM_ON_TIME;
    case 2:
    case "COUNTDOWN_TYPE_END_SERVICE_ON_TIME":
      return Slide_Element_DataLink_PCOLive_CountdownType.COUNTDOWN_TYPE_END_SERVICE_ON_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_PCOLive_CountdownType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_PCOLive_CountdownTypeToJSON(
  object: Slide_Element_DataLink_PCOLive_CountdownType,
): string {
  switch (object) {
    case Slide_Element_DataLink_PCOLive_CountdownType.COUNTDOWN_TYPE_FULL_ITEM_LENGTH:
      return "COUNTDOWN_TYPE_FULL_ITEM_LENGTH";
    case Slide_Element_DataLink_PCOLive_CountdownType.COUNTDOWN_TYPE_END_ITEM_ON_TIME:
      return "COUNTDOWN_TYPE_END_ITEM_ON_TIME";
    case Slide_Element_DataLink_PCOLive_CountdownType.COUNTDOWN_TYPE_END_SERVICE_ON_TIME:
      return "COUNTDOWN_TYPE_END_SERVICE_ON_TIME";
    case Slide_Element_DataLink_PCOLive_CountdownType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_AlternateElementFill {
  otherElementUuid: UUID | undefined;
  otherElementName: string;
}

export interface Slide_Element_DataLink_VisibilityLink {
  visibilityCriterion: Slide_Element_DataLink_VisibilityLink_VisibilityCriterion;
  conditions: Slide_Element_DataLink_VisibilityLink_Condition[];
}

export enum Slide_Element_DataLink_VisibilityLink_VisibilityCriterion {
  VISIBILITY_CRITERION_ALL = 0,
  VISIBILITY_CRITERION_ANY = 1,
  VISIBILITY_CRITERION_NONE = 2,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VisibilityLink_VisibilityCriterionFromJSON(
  object: any,
): Slide_Element_DataLink_VisibilityLink_VisibilityCriterion {
  switch (object) {
    case 0:
    case "VISIBILITY_CRITERION_ALL":
      return Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.VISIBILITY_CRITERION_ALL;
    case 1:
    case "VISIBILITY_CRITERION_ANY":
      return Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.VISIBILITY_CRITERION_ANY;
    case 2:
    case "VISIBILITY_CRITERION_NONE":
      return Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.VISIBILITY_CRITERION_NONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VisibilityLink_VisibilityCriterionToJSON(
  object: Slide_Element_DataLink_VisibilityLink_VisibilityCriterion,
): string {
  switch (object) {
    case Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.VISIBILITY_CRITERION_ALL:
      return "VISIBILITY_CRITERION_ALL";
    case Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.VISIBILITY_CRITERION_ANY:
      return "VISIBILITY_CRITERION_ANY";
    case Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.VISIBILITY_CRITERION_NONE:
      return "VISIBILITY_CRITERION_NONE";
    case Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_VisibilityLink_Condition {
  elementVisibility?: Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility | undefined;
  timerVisibility?: Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility | undefined;
  videoCountdownVisibility?: Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility | undefined;
  captureSessionVisibility?: Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility | undefined;
  videoInputVisibility?: Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility | undefined;
  audioCountdownVisibility?: Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility | undefined;
}

export interface Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility {
  otherElementUuid: UUID | undefined;
  otherElementName: string;
  visibilityCriterion: Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion;
}

export enum Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion {
  ELEMENT_VISIBILITY_CRITERION_HAS_TEXT = 0,
  ELEMENT_VISIBILITY_CRITERION_HAS_NO_TEXT = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterionFromJSON(
  object: any,
): Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion {
  switch (object) {
    case 0:
    case "ELEMENT_VISIBILITY_CRITERION_HAS_TEXT":
      return Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion
        .ELEMENT_VISIBILITY_CRITERION_HAS_TEXT;
    case 1:
    case "ELEMENT_VISIBILITY_CRITERION_HAS_NO_TEXT":
      return Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion
        .ELEMENT_VISIBILITY_CRITERION_HAS_NO_TEXT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterionToJSON(
  object: Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion,
): string {
  switch (object) {
    case Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion
      .ELEMENT_VISIBILITY_CRITERION_HAS_TEXT:
      return "ELEMENT_VISIBILITY_CRITERION_HAS_TEXT";
    case Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion
      .ELEMENT_VISIBILITY_CRITERION_HAS_NO_TEXT:
      return "ELEMENT_VISIBILITY_CRITERION_HAS_NO_TEXT";
    case Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility {
  timerUuid: UUID | undefined;
  timerName: string;
  visibilityCriterion: Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion;
}

export enum Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion {
  TIMER_VISIBILITY_CRITERION_HAS_TIME_REMAINING = 0,
  TIMER_VISIBILITY_CRITERION_HAS_EXPIRED = 1,
  TIMER_VISIBILITY_CRITERION_IS_RUNNING = 2,
  TIMER_VISIBILITY_CRITERION_NOT_RUNNING = 3,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterionFromJSON(
  object: any,
): Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion {
  switch (object) {
    case 0:
    case "TIMER_VISIBILITY_CRITERION_HAS_TIME_REMAINING":
      return Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion
        .TIMER_VISIBILITY_CRITERION_HAS_TIME_REMAINING;
    case 1:
    case "TIMER_VISIBILITY_CRITERION_HAS_EXPIRED":
      return Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion
        .TIMER_VISIBILITY_CRITERION_HAS_EXPIRED;
    case 2:
    case "TIMER_VISIBILITY_CRITERION_IS_RUNNING":
      return Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion
        .TIMER_VISIBILITY_CRITERION_IS_RUNNING;
    case 3:
    case "TIMER_VISIBILITY_CRITERION_NOT_RUNNING":
      return Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion
        .TIMER_VISIBILITY_CRITERION_NOT_RUNNING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterionToJSON(
  object: Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion,
): string {
  switch (object) {
    case Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion
      .TIMER_VISIBILITY_CRITERION_HAS_TIME_REMAINING:
      return "TIMER_VISIBILITY_CRITERION_HAS_TIME_REMAINING";
    case Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion
      .TIMER_VISIBILITY_CRITERION_HAS_EXPIRED:
      return "TIMER_VISIBILITY_CRITERION_HAS_EXPIRED";
    case Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion
      .TIMER_VISIBILITY_CRITERION_IS_RUNNING:
      return "TIMER_VISIBILITY_CRITERION_IS_RUNNING";
    case Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion
      .TIMER_VISIBILITY_CRITERION_NOT_RUNNING:
      return "TIMER_VISIBILITY_CRITERION_NOT_RUNNING";
    case Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility {
  visibilityCriterion:
    Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion;
}

export enum Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion {
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING = 0,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED = 1,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING = 2,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING = 3,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING = 4,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING = 5,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterionFromJSON(
  object: any,
): Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion {
  switch (object) {
    case 0:
    case "VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING":
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion
        .VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING;
    case 1:
    case "VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED":
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion
        .VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED;
    case 2:
    case "VIDEO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING":
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion
        .VIDEO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING;
    case 3:
    case "VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING":
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion
        .VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING;
    case 4:
    case "VIDEO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING":
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion
        .VIDEO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING;
    case 5:
    case "VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING":
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion
        .VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion
        .UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterionToJSON(
  object: Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion,
): string {
  switch (object) {
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion
      .VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING:
      return "VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING";
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion
      .VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED:
      return "VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED";
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion
      .VIDEO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING:
      return "VIDEO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING";
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion
      .VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING:
      return "VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING";
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion
      .VIDEO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING:
      return "VIDEO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING";
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion
      .VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING:
      return "VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING";
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion
      .UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility {
  visibilityCriterion:
    Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion;
}

export enum Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion {
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING = 0,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED = 1,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING = 2,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING = 3,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING = 4,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING = 5,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterionFromJSON(
  object: any,
): Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion {
  switch (object) {
    case 0:
    case "AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING":
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion
        .AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING;
    case 1:
    case "AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED":
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion
        .AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED;
    case 2:
    case "AUDIO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING":
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion
        .AUDIO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING;
    case 3:
    case "AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING":
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion
        .AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING;
    case 4:
    case "AUDIO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING":
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion
        .AUDIO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING;
    case 5:
    case "AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING":
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion
        .AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion
        .UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterionToJSON(
  object: Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion,
): string {
  switch (object) {
    case Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion
      .AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING:
      return "AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING";
    case Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion
      .AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED:
      return "AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED";
    case Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion
      .AUDIO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING:
      return "AUDIO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING";
    case Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion
      .AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING:
      return "AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING";
    case Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion
      .AUDIO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING:
      return "AUDIO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING";
    case Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion
      .AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING:
      return "AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING";
    case Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion
      .UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility {
  visibilityCriterion:
    Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion;
}

export enum Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion {
  CAPTURE_SESSION_VISIBILITY_CRITERION_ACTIVE = 0,
  CAPTURE_SESSION_VISIBILITY_CRITERION_INACTIVE = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterionFromJSON(
  object: any,
): Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion {
  switch (object) {
    case 0:
    case "CAPTURE_SESSION_VISIBILITY_CRITERION_ACTIVE":
      return Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion
        .CAPTURE_SESSION_VISIBILITY_CRITERION_ACTIVE;
    case 1:
    case "CAPTURE_SESSION_VISIBILITY_CRITERION_INACTIVE":
      return Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion
        .CAPTURE_SESSION_VISIBILITY_CRITERION_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion
        .UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterionToJSON(
  object: Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion,
): string {
  switch (object) {
    case Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion
      .CAPTURE_SESSION_VISIBILITY_CRITERION_ACTIVE:
      return "CAPTURE_SESSION_VISIBILITY_CRITERION_ACTIVE";
    case Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion
      .CAPTURE_SESSION_VISIBILITY_CRITERION_INACTIVE:
      return "CAPTURE_SESSION_VISIBILITY_CRITERION_INACTIVE";
    case Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion
      .UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility {
  videoInputIndex: number;
  visibilityCriterion:
    Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion;
}

export enum Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion {
  VIDEO_INPUT_VISIBILITY_CRITERION_ACTIVE = 0,
  VIDEO_INPUT_VISIBILITY_CRITERION_INACTIVE = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterionFromJSON(
  object: any,
): Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion {
  switch (object) {
    case 0:
    case "VIDEO_INPUT_VISIBILITY_CRITERION_ACTIVE":
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion
        .VIDEO_INPUT_VISIBILITY_CRITERION_ACTIVE;
    case 1:
    case "VIDEO_INPUT_VISIBILITY_CRITERION_INACTIVE":
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion
        .VIDEO_INPUT_VISIBILITY_CRITERION_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion
        .UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterionToJSON(
  object: Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion,
): string {
  switch (object) {
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion
      .VIDEO_INPUT_VISIBILITY_CRITERION_ACTIVE:
      return "VIDEO_INPUT_VISIBILITY_CRITERION_ACTIVE";
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion
      .VIDEO_INPUT_VISIBILITY_CRITERION_INACTIVE:
      return "VIDEO_INPUT_VISIBILITY_CRITERION_INACTIVE";
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion
      .UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_SlideText {
  sourceSlide: Slide_Element_DataLink_SlideText_SlideSourceType;
  sourceOption: Slide_Element_DataLink_SlideText_TextSourceOption;
  preserveNotesFormat: boolean;
  nameToMatch: string;
  elementTextTransform: Slide_Element_DataLink_SlideText_TextTransformOption;
}

export enum Slide_Element_DataLink_SlideText_SlideSourceType {
  SLIDE_SOURCE_TYPE_CURRENT_SLIDE = 0,
  SLIDE_SOURCE_TYPE_NEXT_SLIDE = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_SlideText_SlideSourceTypeFromJSON(
  object: any,
): Slide_Element_DataLink_SlideText_SlideSourceType {
  switch (object) {
    case 0:
    case "SLIDE_SOURCE_TYPE_CURRENT_SLIDE":
      return Slide_Element_DataLink_SlideText_SlideSourceType.SLIDE_SOURCE_TYPE_CURRENT_SLIDE;
    case 1:
    case "SLIDE_SOURCE_TYPE_NEXT_SLIDE":
      return Slide_Element_DataLink_SlideText_SlideSourceType.SLIDE_SOURCE_TYPE_NEXT_SLIDE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_SlideText_SlideSourceType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_SlideText_SlideSourceTypeToJSON(
  object: Slide_Element_DataLink_SlideText_SlideSourceType,
): string {
  switch (object) {
    case Slide_Element_DataLink_SlideText_SlideSourceType.SLIDE_SOURCE_TYPE_CURRENT_SLIDE:
      return "SLIDE_SOURCE_TYPE_CURRENT_SLIDE";
    case Slide_Element_DataLink_SlideText_SlideSourceType.SLIDE_SOURCE_TYPE_NEXT_SLIDE:
      return "SLIDE_SOURCE_TYPE_NEXT_SLIDE";
    case Slide_Element_DataLink_SlideText_SlideSourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Slide_Element_DataLink_SlideText_TextSourceOption {
  TEXT_SOURCE_OPTION_TEXT = 0,
  TEXT_SOURCE_OPTION_NOTES = 1,
  TEXT_SOURCE_OPTION_ELEMENT_MATCHING_NAME = 2,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_SlideText_TextSourceOptionFromJSON(
  object: any,
): Slide_Element_DataLink_SlideText_TextSourceOption {
  switch (object) {
    case 0:
    case "TEXT_SOURCE_OPTION_TEXT":
      return Slide_Element_DataLink_SlideText_TextSourceOption.TEXT_SOURCE_OPTION_TEXT;
    case 1:
    case "TEXT_SOURCE_OPTION_NOTES":
      return Slide_Element_DataLink_SlideText_TextSourceOption.TEXT_SOURCE_OPTION_NOTES;
    case 2:
    case "TEXT_SOURCE_OPTION_ELEMENT_MATCHING_NAME":
      return Slide_Element_DataLink_SlideText_TextSourceOption.TEXT_SOURCE_OPTION_ELEMENT_MATCHING_NAME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_SlideText_TextSourceOption.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_SlideText_TextSourceOptionToJSON(
  object: Slide_Element_DataLink_SlideText_TextSourceOption,
): string {
  switch (object) {
    case Slide_Element_DataLink_SlideText_TextSourceOption.TEXT_SOURCE_OPTION_TEXT:
      return "TEXT_SOURCE_OPTION_TEXT";
    case Slide_Element_DataLink_SlideText_TextSourceOption.TEXT_SOURCE_OPTION_NOTES:
      return "TEXT_SOURCE_OPTION_NOTES";
    case Slide_Element_DataLink_SlideText_TextSourceOption.TEXT_SOURCE_OPTION_ELEMENT_MATCHING_NAME:
      return "TEXT_SOURCE_OPTION_ELEMENT_MATCHING_NAME";
    case Slide_Element_DataLink_SlideText_TextSourceOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Slide_Element_DataLink_SlideText_TextTransformOption {
  TEXT_TRANSFORM_OPTION_NONE = 0,
  TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS = 1,
  TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE = 2,
  TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE = 3,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_SlideText_TextTransformOptionFromJSON(
  object: any,
): Slide_Element_DataLink_SlideText_TextTransformOption {
  switch (object) {
    case 0:
    case "TEXT_TRANSFORM_OPTION_NONE":
      return Slide_Element_DataLink_SlideText_TextTransformOption.TEXT_TRANSFORM_OPTION_NONE;
    case 1:
    case "TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS":
      return Slide_Element_DataLink_SlideText_TextTransformOption.TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS;
    case 2:
    case "TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE":
      return Slide_Element_DataLink_SlideText_TextTransformOption.TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE;
    case 3:
    case "TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE":
      return Slide_Element_DataLink_SlideText_TextTransformOption.TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_SlideText_TextTransformOption.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_SlideText_TextTransformOptionToJSON(
  object: Slide_Element_DataLink_SlideText_TextTransformOption,
): string {
  switch (object) {
    case Slide_Element_DataLink_SlideText_TextTransformOption.TEXT_TRANSFORM_OPTION_NONE:
      return "TEXT_TRANSFORM_OPTION_NONE";
    case Slide_Element_DataLink_SlideText_TextTransformOption.TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS:
      return "TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS";
    case Slide_Element_DataLink_SlideText_TextTransformOption.TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE:
      return "TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE";
    case Slide_Element_DataLink_SlideText_TextTransformOption.TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE:
      return "TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE";
    case Slide_Element_DataLink_SlideText_TextTransformOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_SlideImage {
  sourceSlide: Slide_Element_DataLink_SlideImage_SlideSourceType;
}

export enum Slide_Element_DataLink_SlideImage_SlideSourceType {
  SLIDE_SOURCE_TYPE_CURRENT_SLIDE = 0,
  SLIDE_SOURCE_TYPE_NEXT_SLIDE = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_SlideImage_SlideSourceTypeFromJSON(
  object: any,
): Slide_Element_DataLink_SlideImage_SlideSourceType {
  switch (object) {
    case 0:
    case "SLIDE_SOURCE_TYPE_CURRENT_SLIDE":
      return Slide_Element_DataLink_SlideImage_SlideSourceType.SLIDE_SOURCE_TYPE_CURRENT_SLIDE;
    case 1:
    case "SLIDE_SOURCE_TYPE_NEXT_SLIDE":
      return Slide_Element_DataLink_SlideImage_SlideSourceType.SLIDE_SOURCE_TYPE_NEXT_SLIDE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_SlideImage_SlideSourceType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_SlideImage_SlideSourceTypeToJSON(
  object: Slide_Element_DataLink_SlideImage_SlideSourceType,
): string {
  switch (object) {
    case Slide_Element_DataLink_SlideImage_SlideSourceType.SLIDE_SOURCE_TYPE_CURRENT_SLIDE:
      return "SLIDE_SOURCE_TYPE_CURRENT_SLIDE";
    case Slide_Element_DataLink_SlideImage_SlideSourceType.SLIDE_SOURCE_TYPE_NEXT_SLIDE:
      return "SLIDE_SOURCE_TYPE_NEXT_SLIDE";
    case Slide_Element_DataLink_SlideImage_SlideSourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_StageMessage {
  shouldFlash: boolean;
  flashColor: Color | undefined;
}

export interface Slide_Element_DataLink_VideoCountdown {
  timerFormat: Timer_Format | undefined;
  timerFormatString: string;
  colorTriggers: Slide_Element_DataLink_ColorTrigger[];
  ignoreLoopingVideos: boolean;
  videoCountdownSource: Slide_Element_DataLink_VideoCountdown_VideoCountdownSource;
}

export enum Slide_Element_DataLink_VideoCountdown_VideoCountdownSource {
  VIDEO_COUNTDOWN_SOURCE_PRESENTATION = 0,
  VIDEO_COUNTDOWN_SOURCE_ANNOUNCEMENT = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VideoCountdown_VideoCountdownSourceFromJSON(
  object: any,
): Slide_Element_DataLink_VideoCountdown_VideoCountdownSource {
  switch (object) {
    case 0:
    case "VIDEO_COUNTDOWN_SOURCE_PRESENTATION":
      return Slide_Element_DataLink_VideoCountdown_VideoCountdownSource.VIDEO_COUNTDOWN_SOURCE_PRESENTATION;
    case 1:
    case "VIDEO_COUNTDOWN_SOURCE_ANNOUNCEMENT":
      return Slide_Element_DataLink_VideoCountdown_VideoCountdownSource.VIDEO_COUNTDOWN_SOURCE_ANNOUNCEMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_VideoCountdown_VideoCountdownSource.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VideoCountdown_VideoCountdownSourceToJSON(
  object: Slide_Element_DataLink_VideoCountdown_VideoCountdownSource,
): string {
  switch (object) {
    case Slide_Element_DataLink_VideoCountdown_VideoCountdownSource.VIDEO_COUNTDOWN_SOURCE_PRESENTATION:
      return "VIDEO_COUNTDOWN_SOURCE_PRESENTATION";
    case Slide_Element_DataLink_VideoCountdown_VideoCountdownSource.VIDEO_COUNTDOWN_SOURCE_ANNOUNCEMENT:
      return "VIDEO_COUNTDOWN_SOURCE_ANNOUNCEMENT";
    case Slide_Element_DataLink_VideoCountdown_VideoCountdownSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_AudioCountdown {
  timerFormat: Timer_Format | undefined;
  timerFormatString: string;
  colorTriggers: Slide_Element_DataLink_ColorTrigger[];
  ignoreLoopingAudio: boolean;
}

export interface Slide_Element_DataLink_GroupName {
  groupSource: Slide_Element_DataLink_GroupName_GroupSourceType;
}

export enum Slide_Element_DataLink_GroupName_GroupSourceType {
  GROUP_SOURCE_TYPE_CURRENT_SLIDE = 0,
  GROUP_SOURCE_TYPE_NEXT_SLIDE = 1,
  GROUP_SOURCE_TYPE_NEXT_GROUP = 2,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_GroupName_GroupSourceTypeFromJSON(
  object: any,
): Slide_Element_DataLink_GroupName_GroupSourceType {
  switch (object) {
    case 0:
    case "GROUP_SOURCE_TYPE_CURRENT_SLIDE":
      return Slide_Element_DataLink_GroupName_GroupSourceType.GROUP_SOURCE_TYPE_CURRENT_SLIDE;
    case 1:
    case "GROUP_SOURCE_TYPE_NEXT_SLIDE":
      return Slide_Element_DataLink_GroupName_GroupSourceType.GROUP_SOURCE_TYPE_NEXT_SLIDE;
    case 2:
    case "GROUP_SOURCE_TYPE_NEXT_GROUP":
      return Slide_Element_DataLink_GroupName_GroupSourceType.GROUP_SOURCE_TYPE_NEXT_GROUP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_GroupName_GroupSourceType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_GroupName_GroupSourceTypeToJSON(
  object: Slide_Element_DataLink_GroupName_GroupSourceType,
): string {
  switch (object) {
    case Slide_Element_DataLink_GroupName_GroupSourceType.GROUP_SOURCE_TYPE_CURRENT_SLIDE:
      return "GROUP_SOURCE_TYPE_CURRENT_SLIDE";
    case Slide_Element_DataLink_GroupName_GroupSourceType.GROUP_SOURCE_TYPE_NEXT_SLIDE:
      return "GROUP_SOURCE_TYPE_NEXT_SLIDE";
    case Slide_Element_DataLink_GroupName_GroupSourceType.GROUP_SOURCE_TYPE_NEXT_GROUP:
      return "GROUP_SOURCE_TYPE_NEXT_GROUP";
    case Slide_Element_DataLink_GroupName_GroupSourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_GroupColor {
  groupSource: Slide_Element_DataLink_GroupColor_GroupSourceType;
}

export enum Slide_Element_DataLink_GroupColor_GroupSourceType {
  GROUP_SOURCE_TYPE_CURRENT_SLIDE = 0,
  GROUP_SOURCE_TYPE_NEXT_SLIDE = 1,
  GROUP_SOURCE_TYPE_NEXT_GROUP = 2,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_GroupColor_GroupSourceTypeFromJSON(
  object: any,
): Slide_Element_DataLink_GroupColor_GroupSourceType {
  switch (object) {
    case 0:
    case "GROUP_SOURCE_TYPE_CURRENT_SLIDE":
      return Slide_Element_DataLink_GroupColor_GroupSourceType.GROUP_SOURCE_TYPE_CURRENT_SLIDE;
    case 1:
    case "GROUP_SOURCE_TYPE_NEXT_SLIDE":
      return Slide_Element_DataLink_GroupColor_GroupSourceType.GROUP_SOURCE_TYPE_NEXT_SLIDE;
    case 2:
    case "GROUP_SOURCE_TYPE_NEXT_GROUP":
      return Slide_Element_DataLink_GroupColor_GroupSourceType.GROUP_SOURCE_TYPE_NEXT_GROUP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_GroupColor_GroupSourceType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_GroupColor_GroupSourceTypeToJSON(
  object: Slide_Element_DataLink_GroupColor_GroupSourceType,
): string {
  switch (object) {
    case Slide_Element_DataLink_GroupColor_GroupSourceType.GROUP_SOURCE_TYPE_CURRENT_SLIDE:
      return "GROUP_SOURCE_TYPE_CURRENT_SLIDE";
    case Slide_Element_DataLink_GroupColor_GroupSourceType.GROUP_SOURCE_TYPE_NEXT_SLIDE:
      return "GROUP_SOURCE_TYPE_NEXT_SLIDE";
    case Slide_Element_DataLink_GroupColor_GroupSourceType.GROUP_SOURCE_TYPE_NEXT_GROUP:
      return "GROUP_SOURCE_TYPE_NEXT_GROUP";
    case Slide_Element_DataLink_GroupColor_GroupSourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_SlideLabelText {
  slideLabelSource: Slide_Element_DataLink_SlideLabelText_SlideLabelSource;
}

export enum Slide_Element_DataLink_SlideLabelText_SlideLabelSource {
  SLIDE_LABEL_SOURCE_CURRENT_SLIDE = 0,
  SLIDE_LABEL_SOURCE_NEXT_SLIDE = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_SlideLabelText_SlideLabelSourceFromJSON(
  object: any,
): Slide_Element_DataLink_SlideLabelText_SlideLabelSource {
  switch (object) {
    case 0:
    case "SLIDE_LABEL_SOURCE_CURRENT_SLIDE":
      return Slide_Element_DataLink_SlideLabelText_SlideLabelSource.SLIDE_LABEL_SOURCE_CURRENT_SLIDE;
    case 1:
    case "SLIDE_LABEL_SOURCE_NEXT_SLIDE":
      return Slide_Element_DataLink_SlideLabelText_SlideLabelSource.SLIDE_LABEL_SOURCE_NEXT_SLIDE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_SlideLabelText_SlideLabelSource.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_SlideLabelText_SlideLabelSourceToJSON(
  object: Slide_Element_DataLink_SlideLabelText_SlideLabelSource,
): string {
  switch (object) {
    case Slide_Element_DataLink_SlideLabelText_SlideLabelSource.SLIDE_LABEL_SOURCE_CURRENT_SLIDE:
      return "SLIDE_LABEL_SOURCE_CURRENT_SLIDE";
    case Slide_Element_DataLink_SlideLabelText_SlideLabelSource.SLIDE_LABEL_SOURCE_NEXT_SLIDE:
      return "SLIDE_LABEL_SOURCE_NEXT_SLIDE";
    case Slide_Element_DataLink_SlideLabelText_SlideLabelSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_SlideLabelColor {
  slideLabelSource: Slide_Element_DataLink_SlideLabelColor_SlideLabelSource;
}

export enum Slide_Element_DataLink_SlideLabelColor_SlideLabelSource {
  SLIDE_LABEL_SOURCE_CURRENT_SLIDE = 0,
  SLIDE_LABEL_SOURCE_NEXT_SLIDE = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_SlideLabelColor_SlideLabelSourceFromJSON(
  object: any,
): Slide_Element_DataLink_SlideLabelColor_SlideLabelSource {
  switch (object) {
    case 0:
    case "SLIDE_LABEL_SOURCE_CURRENT_SLIDE":
      return Slide_Element_DataLink_SlideLabelColor_SlideLabelSource.SLIDE_LABEL_SOURCE_CURRENT_SLIDE;
    case 1:
    case "SLIDE_LABEL_SOURCE_NEXT_SLIDE":
      return Slide_Element_DataLink_SlideLabelColor_SlideLabelSource.SLIDE_LABEL_SOURCE_NEXT_SLIDE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_SlideLabelColor_SlideLabelSource.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_SlideLabelColor_SlideLabelSourceToJSON(
  object: Slide_Element_DataLink_SlideLabelColor_SlideLabelSource,
): string {
  switch (object) {
    case Slide_Element_DataLink_SlideLabelColor_SlideLabelSource.SLIDE_LABEL_SOURCE_CURRENT_SLIDE:
      return "SLIDE_LABEL_SOURCE_CURRENT_SLIDE";
    case Slide_Element_DataLink_SlideLabelColor_SlideLabelSource.SLIDE_LABEL_SOURCE_NEXT_SLIDE:
      return "SLIDE_LABEL_SOURCE_NEXT_SLIDE";
    case Slide_Element_DataLink_SlideLabelColor_SlideLabelSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_PresentationNotes {
}

export interface Slide_Element_DataLink_Presentation {
  presentationSource: Slide_Element_DataLink_Presentation_PresentationSource;
}

export enum Slide_Element_DataLink_Presentation_PresentationSource {
  PRESENTATION_SOURCE_PRESENTATION = 0,
  PRESENTATION_SOURCE_ANNOUNCEMENT = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_Presentation_PresentationSourceFromJSON(
  object: any,
): Slide_Element_DataLink_Presentation_PresentationSource {
  switch (object) {
    case 0:
    case "PRESENTATION_SOURCE_PRESENTATION":
      return Slide_Element_DataLink_Presentation_PresentationSource.PRESENTATION_SOURCE_PRESENTATION;
    case 1:
    case "PRESENTATION_SOURCE_ANNOUNCEMENT":
      return Slide_Element_DataLink_Presentation_PresentationSource.PRESENTATION_SOURCE_ANNOUNCEMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_Presentation_PresentationSource.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_Presentation_PresentationSourceToJSON(
  object: Slide_Element_DataLink_Presentation_PresentationSource,
): string {
  switch (object) {
    case Slide_Element_DataLink_Presentation_PresentationSource.PRESENTATION_SOURCE_PRESENTATION:
      return "PRESENTATION_SOURCE_PRESENTATION";
    case Slide_Element_DataLink_Presentation_PresentationSource.PRESENTATION_SOURCE_ANNOUNCEMENT:
      return "PRESENTATION_SOURCE_ANNOUNCEMENT";
    case Slide_Element_DataLink_Presentation_PresentationSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_PlaylistItem {
  playlistItemSource: Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType;
  showArrangement: boolean;
}

export enum Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType {
  PLAYLIST_ITEM_SOURCE_TYPE_CURRENT = 0,
  PLAYLIST_ITEM_SOURCE_TYPE_NEXT = 1,
  PLAYLIST_ITEM_SOURCE_TYPE_CURRENT_HEADER = 2,
  PLAYLIST_ITEM_SOURCE_TYPE_NEXT_HEADER = 3,
  PLAYLIST_ITEM_SOURCE_TYPE_PARENT_PLAYLIST = 4,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_PlaylistItem_PlaylistItemSourceTypeFromJSON(
  object: any,
): Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType {
  switch (object) {
    case 0:
    case "PLAYLIST_ITEM_SOURCE_TYPE_CURRENT":
      return Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_CURRENT;
    case 1:
    case "PLAYLIST_ITEM_SOURCE_TYPE_NEXT":
      return Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_NEXT;
    case 2:
    case "PLAYLIST_ITEM_SOURCE_TYPE_CURRENT_HEADER":
      return Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_CURRENT_HEADER;
    case 3:
    case "PLAYLIST_ITEM_SOURCE_TYPE_NEXT_HEADER":
      return Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_NEXT_HEADER;
    case 4:
    case "PLAYLIST_ITEM_SOURCE_TYPE_PARENT_PLAYLIST":
      return Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_PARENT_PLAYLIST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_PlaylistItem_PlaylistItemSourceTypeToJSON(
  object: Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType,
): string {
  switch (object) {
    case Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_CURRENT:
      return "PLAYLIST_ITEM_SOURCE_TYPE_CURRENT";
    case Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_NEXT:
      return "PLAYLIST_ITEM_SOURCE_TYPE_NEXT";
    case Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_CURRENT_HEADER:
      return "PLAYLIST_ITEM_SOURCE_TYPE_CURRENT_HEADER";
    case Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_NEXT_HEADER:
      return "PLAYLIST_ITEM_SOURCE_TYPE_NEXT_HEADER";
    case Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_PARENT_PLAYLIST:
      return "PLAYLIST_ITEM_SOURCE_TYPE_PARENT_PLAYLIST";
    case Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_AutoAdvanceTimeRemaining {
  autoAdvanceSource: Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource;
  timerFormat: Timer_Format | undefined;
}

export enum Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource {
  AUTO_ADVANCE_SOURCE_PRESENTATION = 0,
  AUTO_ADVANCE_SOURCE_ANNOUNCEMENT = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSourceFromJSON(
  object: any,
): Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource {
  switch (object) {
    case 0:
    case "AUTO_ADVANCE_SOURCE_PRESENTATION":
      return Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource.AUTO_ADVANCE_SOURCE_PRESENTATION;
    case 1:
    case "AUTO_ADVANCE_SOURCE_ANNOUNCEMENT":
      return Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource.AUTO_ADVANCE_SOURCE_ANNOUNCEMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSourceToJSON(
  object: Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource,
): string {
  switch (object) {
    case Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource.AUTO_ADVANCE_SOURCE_PRESENTATION:
      return "AUTO_ADVANCE_SOURCE_PRESENTATION";
    case Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource.AUTO_ADVANCE_SOURCE_ANNOUNCEMENT:
      return "AUTO_ADVANCE_SOURCE_ANNOUNCEMENT";
    case Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_CaptureStatusText {
  statusText?: Slide_Element_DataLink_CaptureStatusText_StatusText | undefined;
  elapsedTime?: Slide_Element_DataLink_CaptureStatusText_ElapsedTime | undefined;
}

export interface Slide_Element_DataLink_CaptureStatusText_StatusText {
}

export interface Slide_Element_DataLink_CaptureStatusText_ElapsedTime {
  timerFormat: Timer_Format | undefined;
}

export interface Slide_Element_DataLink_CaptureStatusColor {
}

export interface Slide_Element_DataLink_SlideCount {
  slideCountSourceType: Slide_Element_DataLink_SlideCount_SlideCountSourceType;
}

export enum Slide_Element_DataLink_SlideCount_SlideCountSourceType {
  SLIDE_COUNT_SOURCE_TYPE_CURRENT = 0,
  SLIDE_COUNT_SOURCE_TYPE_REMAINING = 1,
  SLIDE_COUNT_SOURCE_TYPE_TOTAL = 2,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_SlideCount_SlideCountSourceTypeFromJSON(
  object: any,
): Slide_Element_DataLink_SlideCount_SlideCountSourceType {
  switch (object) {
    case 0:
    case "SLIDE_COUNT_SOURCE_TYPE_CURRENT":
      return Slide_Element_DataLink_SlideCount_SlideCountSourceType.SLIDE_COUNT_SOURCE_TYPE_CURRENT;
    case 1:
    case "SLIDE_COUNT_SOURCE_TYPE_REMAINING":
      return Slide_Element_DataLink_SlideCount_SlideCountSourceType.SLIDE_COUNT_SOURCE_TYPE_REMAINING;
    case 2:
    case "SLIDE_COUNT_SOURCE_TYPE_TOTAL":
      return Slide_Element_DataLink_SlideCount_SlideCountSourceType.SLIDE_COUNT_SOURCE_TYPE_TOTAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_DataLink_SlideCount_SlideCountSourceType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_SlideCount_SlideCountSourceTypeToJSON(
  object: Slide_Element_DataLink_SlideCount_SlideCountSourceType,
): string {
  switch (object) {
    case Slide_Element_DataLink_SlideCount_SlideCountSourceType.SLIDE_COUNT_SOURCE_TYPE_CURRENT:
      return "SLIDE_COUNT_SOURCE_TYPE_CURRENT";
    case Slide_Element_DataLink_SlideCount_SlideCountSourceType.SLIDE_COUNT_SOURCE_TYPE_REMAINING:
      return "SLIDE_COUNT_SOURCE_TYPE_REMAINING";
    case Slide_Element_DataLink_SlideCount_SlideCountSourceType.SLIDE_COUNT_SOURCE_TYPE_TOTAL:
      return "SLIDE_COUNT_SOURCE_TYPE_TOTAL";
    case Slide_Element_DataLink_SlideCount_SlideCountSourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Slide_Element_DataLink_ChordProChart {
}

export interface Slide_Element_TextScroller {
  shouldScroll: boolean;
  scrollRate: number;
  shouldRepeat: boolean;
  repeatDistance: number;
  scrollingDirection: Slide_Element_TextScroller_Direction;
  startsOffScreen: boolean;
  fadeLeft: number;
  fadeRight: number;
}

export enum Slide_Element_TextScroller_Direction {
  DIRECTION_LEFT = 0,
  DIRECTION_RIGHT = 1,
  DIRECTION_UP = 2,
  DIRECTION_DOWN = 3,
  UNRECOGNIZED = -1,
}

export function slide_Element_TextScroller_DirectionFromJSON(object: any): Slide_Element_TextScroller_Direction {
  switch (object) {
    case 0:
    case "DIRECTION_LEFT":
      return Slide_Element_TextScroller_Direction.DIRECTION_LEFT;
    case 1:
    case "DIRECTION_RIGHT":
      return Slide_Element_TextScroller_Direction.DIRECTION_RIGHT;
    case 2:
    case "DIRECTION_UP":
      return Slide_Element_TextScroller_Direction.DIRECTION_UP;
    case 3:
    case "DIRECTION_DOWN":
      return Slide_Element_TextScroller_Direction.DIRECTION_DOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Slide_Element_TextScroller_Direction.UNRECOGNIZED;
  }
}

export function slide_Element_TextScroller_DirectionToJSON(object: Slide_Element_TextScroller_Direction): string {
  switch (object) {
    case Slide_Element_TextScroller_Direction.DIRECTION_LEFT:
      return "DIRECTION_LEFT";
    case Slide_Element_TextScroller_Direction.DIRECTION_RIGHT:
      return "DIRECTION_RIGHT";
    case Slide_Element_TextScroller_Direction.DIRECTION_UP:
      return "DIRECTION_UP";
    case Slide_Element_TextScroller_Direction.DIRECTION_DOWN:
      return "DIRECTION_DOWN";
    case Slide_Element_TextScroller_Direction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseSlide(): Slide {
  return {
    elements: [],
    elementBuildOrder: [],
    guidelines: [],
    drawsBackgroundColor: false,
    backgroundColor: undefined,
    size: undefined,
    uuid: undefined,
  };
}

export const Slide = {
  encode(message: Slide, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.elements) {
      Slide_Element.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.elementBuildOrder) {
      UUID.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.guidelines) {
      AlignmentGuide.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.drawsBackgroundColor === true) {
      writer.uint32(32).bool(message.drawsBackgroundColor);
    }
    if (message.backgroundColor !== undefined) {
      Color.encode(message.backgroundColor, writer.uint32(42).fork()).ldelim();
    }
    if (message.size !== undefined) {
      Graphics_Size.encode(message.size, writer.uint32(50).fork()).ldelim();
    }
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elements.push(Slide_Element.decode(reader, reader.uint32()));
          break;
        case 2:
          message.elementBuildOrder.push(UUID.decode(reader, reader.uint32()));
          break;
        case 3:
          message.guidelines.push(AlignmentGuide.decode(reader, reader.uint32()));
          break;
        case 4:
          message.drawsBackgroundColor = reader.bool();
          break;
        case 5:
          message.backgroundColor = Color.decode(reader, reader.uint32());
          break;
        case 6:
          message.size = Graphics_Size.decode(reader, reader.uint32());
          break;
        case 7:
          message.uuid = UUID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide {
    return {
      elements: Array.isArray(object?.elements) ? object.elements.map((e: any) => Slide_Element.fromJSON(e)) : [],
      elementBuildOrder: Array.isArray(object?.elementBuildOrder)
        ? object.elementBuildOrder.map((e: any) => UUID.fromJSON(e))
        : [],
      guidelines: Array.isArray(object?.guidelines)
        ? object.guidelines.map((e: any) => AlignmentGuide.fromJSON(e))
        : [],
      drawsBackgroundColor: isSet(object.drawsBackgroundColor) ? Boolean(object.drawsBackgroundColor) : false,
      backgroundColor: isSet(object.backgroundColor) ? Color.fromJSON(object.backgroundColor) : undefined,
      size: isSet(object.size) ? Graphics_Size.fromJSON(object.size) : undefined,
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
    };
  },

  toJSON(message: Slide): unknown {
    const obj: any = {};
    if (message.elements) {
      obj.elements = message.elements.map((e) => e ? Slide_Element.toJSON(e) : undefined);
    } else {
      obj.elements = [];
    }
    if (message.elementBuildOrder) {
      obj.elementBuildOrder = message.elementBuildOrder.map((e) => e ? UUID.toJSON(e) : undefined);
    } else {
      obj.elementBuildOrder = [];
    }
    if (message.guidelines) {
      obj.guidelines = message.guidelines.map((e) => e ? AlignmentGuide.toJSON(e) : undefined);
    } else {
      obj.guidelines = [];
    }
    message.drawsBackgroundColor !== undefined && (obj.drawsBackgroundColor = message.drawsBackgroundColor);
    message.backgroundColor !== undefined &&
      (obj.backgroundColor = message.backgroundColor ? Color.toJSON(message.backgroundColor) : undefined);
    message.size !== undefined && (obj.size = message.size ? Graphics_Size.toJSON(message.size) : undefined);
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide>, I>>(object: I): Slide {
    const message = createBaseSlide();
    message.elements = object.elements?.map((e) => Slide_Element.fromPartial(e)) || [];
    message.elementBuildOrder = object.elementBuildOrder?.map((e) => UUID.fromPartial(e)) || [];
    message.guidelines = object.guidelines?.map((e) => AlignmentGuide.fromPartial(e)) || [];
    message.drawsBackgroundColor = object.drawsBackgroundColor ?? false;
    message.backgroundColor = (object.backgroundColor !== undefined && object.backgroundColor !== null)
      ? Color.fromPartial(object.backgroundColor)
      : undefined;
    message.size = (object.size !== undefined && object.size !== null)
      ? Graphics_Size.fromPartial(object.size)
      : undefined;
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    return message;
  },
};

function createBaseSlide_Element(): Slide_Element {
  return {
    element: undefined,
    buildIn: undefined,
    buildOut: undefined,
    info: 0,
    revealType: 0,
    dataLinks: [],
    childBuilds: [],
    revealFromIndex: 0,
    textScroller: undefined,
  };
}

export const Slide_Element = {
  encode(message: Slide_Element, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.element !== undefined) {
      Graphics_Element.encode(message.element, writer.uint32(10).fork()).ldelim();
    }
    if (message.buildIn !== undefined) {
      Slide_Element_Build.encode(message.buildIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.buildOut !== undefined) {
      Slide_Element_Build.encode(message.buildOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== 0) {
      writer.uint32(32).uint32(message.info);
    }
    if (message.revealType !== 0) {
      writer.uint32(40).int32(message.revealType);
    }
    for (const v of message.dataLinks) {
      Slide_Element_DataLink.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.childBuilds) {
      Slide_Element_ChildBuild.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.revealFromIndex !== 0) {
      writer.uint32(64).uint32(message.revealFromIndex);
    }
    if (message.textScroller !== undefined) {
      Slide_Element_TextScroller.encode(message.textScroller, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.element = Graphics_Element.decode(reader, reader.uint32());
          break;
        case 2:
          message.buildIn = Slide_Element_Build.decode(reader, reader.uint32());
          break;
        case 3:
          message.buildOut = Slide_Element_Build.decode(reader, reader.uint32());
          break;
        case 4:
          message.info = reader.uint32();
          break;
        case 5:
          message.revealType = reader.int32() as any;
          break;
        case 6:
          message.dataLinks.push(Slide_Element_DataLink.decode(reader, reader.uint32()));
          break;
        case 7:
          message.childBuilds.push(Slide_Element_ChildBuild.decode(reader, reader.uint32()));
          break;
        case 8:
          message.revealFromIndex = reader.uint32();
          break;
        case 9:
          message.textScroller = Slide_Element_TextScroller.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element {
    return {
      element: isSet(object.element) ? Graphics_Element.fromJSON(object.element) : undefined,
      buildIn: isSet(object.buildIn) ? Slide_Element_Build.fromJSON(object.buildIn) : undefined,
      buildOut: isSet(object.buildOut) ? Slide_Element_Build.fromJSON(object.buildOut) : undefined,
      info: isSet(object.info) ? Number(object.info) : 0,
      revealType: isSet(object.revealType) ? slide_Element_TextRevealTypeFromJSON(object.revealType) : 0,
      dataLinks: Array.isArray(object?.dataLinks)
        ? object.dataLinks.map((e: any) => Slide_Element_DataLink.fromJSON(e))
        : [],
      childBuilds: Array.isArray(object?.childBuilds)
        ? object.childBuilds.map((e: any) => Slide_Element_ChildBuild.fromJSON(e))
        : [],
      revealFromIndex: isSet(object.revealFromIndex) ? Number(object.revealFromIndex) : 0,
      textScroller: isSet(object.textScroller) ? Slide_Element_TextScroller.fromJSON(object.textScroller) : undefined,
    };
  },

  toJSON(message: Slide_Element): unknown {
    const obj: any = {};
    message.element !== undefined &&
      (obj.element = message.element ? Graphics_Element.toJSON(message.element) : undefined);
    message.buildIn !== undefined &&
      (obj.buildIn = message.buildIn ? Slide_Element_Build.toJSON(message.buildIn) : undefined);
    message.buildOut !== undefined &&
      (obj.buildOut = message.buildOut ? Slide_Element_Build.toJSON(message.buildOut) : undefined);
    message.info !== undefined && (obj.info = Math.round(message.info));
    message.revealType !== undefined && (obj.revealType = slide_Element_TextRevealTypeToJSON(message.revealType));
    if (message.dataLinks) {
      obj.dataLinks = message.dataLinks.map((e) => e ? Slide_Element_DataLink.toJSON(e) : undefined);
    } else {
      obj.dataLinks = [];
    }
    if (message.childBuilds) {
      obj.childBuilds = message.childBuilds.map((e) => e ? Slide_Element_ChildBuild.toJSON(e) : undefined);
    } else {
      obj.childBuilds = [];
    }
    message.revealFromIndex !== undefined && (obj.revealFromIndex = Math.round(message.revealFromIndex));
    message.textScroller !== undefined &&
      (obj.textScroller = message.textScroller ? Slide_Element_TextScroller.toJSON(message.textScroller) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element>, I>>(object: I): Slide_Element {
    const message = createBaseSlide_Element();
    message.element = (object.element !== undefined && object.element !== null)
      ? Graphics_Element.fromPartial(object.element)
      : undefined;
    message.buildIn = (object.buildIn !== undefined && object.buildIn !== null)
      ? Slide_Element_Build.fromPartial(object.buildIn)
      : undefined;
    message.buildOut = (object.buildOut !== undefined && object.buildOut !== null)
      ? Slide_Element_Build.fromPartial(object.buildOut)
      : undefined;
    message.info = object.info ?? 0;
    message.revealType = object.revealType ?? 0;
    message.dataLinks = object.dataLinks?.map((e) => Slide_Element_DataLink.fromPartial(e)) || [];
    message.childBuilds = object.childBuilds?.map((e) => Slide_Element_ChildBuild.fromPartial(e)) || [];
    message.revealFromIndex = object.revealFromIndex ?? 0;
    message.textScroller = (object.textScroller !== undefined && object.textScroller !== null)
      ? Slide_Element_TextScroller.fromPartial(object.textScroller)
      : undefined;
    return message;
  },
};

function createBaseSlide_Element_Build(): Slide_Element_Build {
  return { uuid: undefined, elementUUID: undefined, start: 0, delayTime: 0, transition: undefined };
}

export const Slide_Element_Build = {
  encode(message: Slide_Element_Build, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.elementUUID !== undefined) {
      UUID.encode(message.elementUUID, writer.uint32(18).fork()).ldelim();
    }
    if (message.start !== 0) {
      writer.uint32(24).int32(message.start);
    }
    if (message.delayTime !== 0) {
      writer.uint32(33).double(message.delayTime);
    }
    if (message.transition !== undefined) {
      Transition.encode(message.transition, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_Build {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_Build();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = UUID.decode(reader, reader.uint32());
          break;
        case 2:
          message.elementUUID = UUID.decode(reader, reader.uint32());
          break;
        case 3:
          message.start = reader.int32() as any;
          break;
        case 4:
          message.delayTime = reader.double();
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

  fromJSON(object: any): Slide_Element_Build {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      elementUUID: isSet(object.elementUUID) ? UUID.fromJSON(object.elementUUID) : undefined,
      start: isSet(object.start) ? slide_Element_Build_StartFromJSON(object.start) : 0,
      delayTime: isSet(object.delayTime) ? Number(object.delayTime) : 0,
      transition: isSet(object.transition) ? Transition.fromJSON(object.transition) : undefined,
    };
  },

  toJSON(message: Slide_Element_Build): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.elementUUID !== undefined &&
      (obj.elementUUID = message.elementUUID ? UUID.toJSON(message.elementUUID) : undefined);
    message.start !== undefined && (obj.start = slide_Element_Build_StartToJSON(message.start));
    message.delayTime !== undefined && (obj.delayTime = message.delayTime);
    message.transition !== undefined &&
      (obj.transition = message.transition ? Transition.toJSON(message.transition) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_Build>, I>>(object: I): Slide_Element_Build {
    const message = createBaseSlide_Element_Build();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.elementUUID = (object.elementUUID !== undefined && object.elementUUID !== null)
      ? UUID.fromPartial(object.elementUUID)
      : undefined;
    message.start = object.start ?? 0;
    message.delayTime = object.delayTime ?? 0;
    message.transition = (object.transition !== undefined && object.transition !== null)
      ? Transition.fromPartial(object.transition)
      : undefined;
    return message;
  },
};

function createBaseSlide_Element_ChildBuild(): Slide_Element_ChildBuild {
  return { uuid: undefined, start: 0, delayTime: 0, index: 0 };
}

export const Slide_Element_ChildBuild = {
  encode(message: Slide_Element_ChildBuild, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.start !== 0) {
      writer.uint32(16).int32(message.start);
    }
    if (message.delayTime !== 0) {
      writer.uint32(25).double(message.delayTime);
    }
    if (message.index !== 0) {
      writer.uint32(32).uint32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_ChildBuild {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_ChildBuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = UUID.decode(reader, reader.uint32());
          break;
        case 2:
          message.start = reader.int32() as any;
          break;
        case 3:
          message.delayTime = reader.double();
          break;
        case 4:
          message.index = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_ChildBuild {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      start: isSet(object.start) ? slide_Element_ChildBuild_StartFromJSON(object.start) : 0,
      delayTime: isSet(object.delayTime) ? Number(object.delayTime) : 0,
      index: isSet(object.index) ? Number(object.index) : 0,
    };
  },

  toJSON(message: Slide_Element_ChildBuild): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.start !== undefined && (obj.start = slide_Element_ChildBuild_StartToJSON(message.start));
    message.delayTime !== undefined && (obj.delayTime = message.delayTime);
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_ChildBuild>, I>>(object: I): Slide_Element_ChildBuild {
    const message = createBaseSlide_Element_ChildBuild();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.start = object.start ?? 0;
    message.delayTime = object.delayTime ?? 0;
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink(): Slide_Element_DataLink {
  return {
    ticker: undefined,
    alternateText: undefined,
    timerText: undefined,
    clockText: undefined,
    chordChart: undefined,
    outputScreen: undefined,
    pcoLive: undefined,
    alternateFill: undefined,
    visibilityLink: undefined,
    slideText: undefined,
    stageMessage: undefined,
    videoCountdown: undefined,
    slideImage: undefined,
    ccliText: undefined,
    groupName: undefined,
    groupColor: undefined,
    presentationNotes: undefined,
    playlistItem: undefined,
    autoAdvanceTimeRemaining: undefined,
    captureStatusText: undefined,
    captureStatusColor: undefined,
    slideCount: undefined,
    audioCountdown: undefined,
    presentation: undefined,
    slideLabelText: undefined,
    slideLabelColor: undefined,
    rssFeed: undefined,
    fileFeed: undefined,
    chordProChart: undefined,
  };
}

export const Slide_Element_DataLink = {
  encode(message: Slide_Element_DataLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticker !== undefined) {
      Slide_Element_DataLink_Ticker.encode(message.ticker, writer.uint32(10).fork()).ldelim();
    }
    if (message.alternateText !== undefined) {
      Slide_Element_DataLink_AlternateElementText.encode(message.alternateText, writer.uint32(18).fork()).ldelim();
    }
    if (message.timerText !== undefined) {
      Slide_Element_DataLink_TimerText.encode(message.timerText, writer.uint32(26).fork()).ldelim();
    }
    if (message.clockText !== undefined) {
      Slide_Element_DataLink_ClockText.encode(message.clockText, writer.uint32(34).fork()).ldelim();
    }
    if (message.chordChart !== undefined) {
      Slide_Element_DataLink_ChordChart.encode(message.chordChart, writer.uint32(42).fork()).ldelim();
    }
    if (message.outputScreen !== undefined) {
      Slide_Element_DataLink_OutputScreen.encode(message.outputScreen, writer.uint32(50).fork()).ldelim();
    }
    if (message.pcoLive !== undefined) {
      Slide_Element_DataLink_PCOLive.encode(message.pcoLive, writer.uint32(58).fork()).ldelim();
    }
    if (message.alternateFill !== undefined) {
      Slide_Element_DataLink_AlternateElementFill.encode(message.alternateFill, writer.uint32(66).fork()).ldelim();
    }
    if (message.visibilityLink !== undefined) {
      Slide_Element_DataLink_VisibilityLink.encode(message.visibilityLink, writer.uint32(74).fork()).ldelim();
    }
    if (message.slideText !== undefined) {
      Slide_Element_DataLink_SlideText.encode(message.slideText, writer.uint32(82).fork()).ldelim();
    }
    if (message.stageMessage !== undefined) {
      Slide_Element_DataLink_StageMessage.encode(message.stageMessage, writer.uint32(90).fork()).ldelim();
    }
    if (message.videoCountdown !== undefined) {
      Slide_Element_DataLink_VideoCountdown.encode(message.videoCountdown, writer.uint32(98).fork()).ldelim();
    }
    if (message.slideImage !== undefined) {
      Slide_Element_DataLink_SlideImage.encode(message.slideImage, writer.uint32(106).fork()).ldelim();
    }
    if (message.ccliText !== undefined) {
      Slide_Element_DataLink_CCLIText.encode(message.ccliText, writer.uint32(114).fork()).ldelim();
    }
    if (message.groupName !== undefined) {
      Slide_Element_DataLink_GroupName.encode(message.groupName, writer.uint32(122).fork()).ldelim();
    }
    if (message.groupColor !== undefined) {
      Slide_Element_DataLink_GroupColor.encode(message.groupColor, writer.uint32(130).fork()).ldelim();
    }
    if (message.presentationNotes !== undefined) {
      Slide_Element_DataLink_PresentationNotes.encode(message.presentationNotes, writer.uint32(138).fork()).ldelim();
    }
    if (message.playlistItem !== undefined) {
      Slide_Element_DataLink_PlaylistItem.encode(message.playlistItem, writer.uint32(146).fork()).ldelim();
    }
    if (message.autoAdvanceTimeRemaining !== undefined) {
      Slide_Element_DataLink_AutoAdvanceTimeRemaining.encode(
        message.autoAdvanceTimeRemaining,
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.captureStatusText !== undefined) {
      Slide_Element_DataLink_CaptureStatusText.encode(message.captureStatusText, writer.uint32(162).fork()).ldelim();
    }
    if (message.captureStatusColor !== undefined) {
      Slide_Element_DataLink_CaptureStatusColor.encode(message.captureStatusColor, writer.uint32(170).fork()).ldelim();
    }
    if (message.slideCount !== undefined) {
      Slide_Element_DataLink_SlideCount.encode(message.slideCount, writer.uint32(178).fork()).ldelim();
    }
    if (message.audioCountdown !== undefined) {
      Slide_Element_DataLink_AudioCountdown.encode(message.audioCountdown, writer.uint32(186).fork()).ldelim();
    }
    if (message.presentation !== undefined) {
      Slide_Element_DataLink_Presentation.encode(message.presentation, writer.uint32(194).fork()).ldelim();
    }
    if (message.slideLabelText !== undefined) {
      Slide_Element_DataLink_SlideLabelText.encode(message.slideLabelText, writer.uint32(202).fork()).ldelim();
    }
    if (message.slideLabelColor !== undefined) {
      Slide_Element_DataLink_SlideLabelColor.encode(message.slideLabelColor, writer.uint32(210).fork()).ldelim();
    }
    if (message.rssFeed !== undefined) {
      Slide_Element_DataLink_RSSFeed.encode(message.rssFeed, writer.uint32(218).fork()).ldelim();
    }
    if (message.fileFeed !== undefined) {
      Slide_Element_DataLink_FileFeed.encode(message.fileFeed, writer.uint32(226).fork()).ldelim();
    }
    if (message.chordProChart !== undefined) {
      Slide_Element_DataLink_ChordProChart.encode(message.chordProChart, writer.uint32(234).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticker = Slide_Element_DataLink_Ticker.decode(reader, reader.uint32());
          break;
        case 2:
          message.alternateText = Slide_Element_DataLink_AlternateElementText.decode(reader, reader.uint32());
          break;
        case 3:
          message.timerText = Slide_Element_DataLink_TimerText.decode(reader, reader.uint32());
          break;
        case 4:
          message.clockText = Slide_Element_DataLink_ClockText.decode(reader, reader.uint32());
          break;
        case 5:
          message.chordChart = Slide_Element_DataLink_ChordChart.decode(reader, reader.uint32());
          break;
        case 6:
          message.outputScreen = Slide_Element_DataLink_OutputScreen.decode(reader, reader.uint32());
          break;
        case 7:
          message.pcoLive = Slide_Element_DataLink_PCOLive.decode(reader, reader.uint32());
          break;
        case 8:
          message.alternateFill = Slide_Element_DataLink_AlternateElementFill.decode(reader, reader.uint32());
          break;
        case 9:
          message.visibilityLink = Slide_Element_DataLink_VisibilityLink.decode(reader, reader.uint32());
          break;
        case 10:
          message.slideText = Slide_Element_DataLink_SlideText.decode(reader, reader.uint32());
          break;
        case 11:
          message.stageMessage = Slide_Element_DataLink_StageMessage.decode(reader, reader.uint32());
          break;
        case 12:
          message.videoCountdown = Slide_Element_DataLink_VideoCountdown.decode(reader, reader.uint32());
          break;
        case 13:
          message.slideImage = Slide_Element_DataLink_SlideImage.decode(reader, reader.uint32());
          break;
        case 14:
          message.ccliText = Slide_Element_DataLink_CCLIText.decode(reader, reader.uint32());
          break;
        case 15:
          message.groupName = Slide_Element_DataLink_GroupName.decode(reader, reader.uint32());
          break;
        case 16:
          message.groupColor = Slide_Element_DataLink_GroupColor.decode(reader, reader.uint32());
          break;
        case 17:
          message.presentationNotes = Slide_Element_DataLink_PresentationNotes.decode(reader, reader.uint32());
          break;
        case 18:
          message.playlistItem = Slide_Element_DataLink_PlaylistItem.decode(reader, reader.uint32());
          break;
        case 19:
          message.autoAdvanceTimeRemaining = Slide_Element_DataLink_AutoAdvanceTimeRemaining.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 20:
          message.captureStatusText = Slide_Element_DataLink_CaptureStatusText.decode(reader, reader.uint32());
          break;
        case 21:
          message.captureStatusColor = Slide_Element_DataLink_CaptureStatusColor.decode(reader, reader.uint32());
          break;
        case 22:
          message.slideCount = Slide_Element_DataLink_SlideCount.decode(reader, reader.uint32());
          break;
        case 23:
          message.audioCountdown = Slide_Element_DataLink_AudioCountdown.decode(reader, reader.uint32());
          break;
        case 24:
          message.presentation = Slide_Element_DataLink_Presentation.decode(reader, reader.uint32());
          break;
        case 25:
          message.slideLabelText = Slide_Element_DataLink_SlideLabelText.decode(reader, reader.uint32());
          break;
        case 26:
          message.slideLabelColor = Slide_Element_DataLink_SlideLabelColor.decode(reader, reader.uint32());
          break;
        case 27:
          message.rssFeed = Slide_Element_DataLink_RSSFeed.decode(reader, reader.uint32());
          break;
        case 28:
          message.fileFeed = Slide_Element_DataLink_FileFeed.decode(reader, reader.uint32());
          break;
        case 29:
          message.chordProChart = Slide_Element_DataLink_ChordProChart.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink {
    return {
      ticker: isSet(object.ticker) ? Slide_Element_DataLink_Ticker.fromJSON(object.ticker) : undefined,
      alternateText: isSet(object.alternateText)
        ? Slide_Element_DataLink_AlternateElementText.fromJSON(object.alternateText)
        : undefined,
      timerText: isSet(object.timerText) ? Slide_Element_DataLink_TimerText.fromJSON(object.timerText) : undefined,
      clockText: isSet(object.clockText) ? Slide_Element_DataLink_ClockText.fromJSON(object.clockText) : undefined,
      chordChart: isSet(object.chordChart) ? Slide_Element_DataLink_ChordChart.fromJSON(object.chordChart) : undefined,
      outputScreen: isSet(object.outputScreen)
        ? Slide_Element_DataLink_OutputScreen.fromJSON(object.outputScreen)
        : undefined,
      pcoLive: isSet(object.pcoLive) ? Slide_Element_DataLink_PCOLive.fromJSON(object.pcoLive) : undefined,
      alternateFill: isSet(object.alternateFill)
        ? Slide_Element_DataLink_AlternateElementFill.fromJSON(object.alternateFill)
        : undefined,
      visibilityLink: isSet(object.visibilityLink)
        ? Slide_Element_DataLink_VisibilityLink.fromJSON(object.visibilityLink)
        : undefined,
      slideText: isSet(object.slideText) ? Slide_Element_DataLink_SlideText.fromJSON(object.slideText) : undefined,
      stageMessage: isSet(object.stageMessage)
        ? Slide_Element_DataLink_StageMessage.fromJSON(object.stageMessage)
        : undefined,
      videoCountdown: isSet(object.videoCountdown)
        ? Slide_Element_DataLink_VideoCountdown.fromJSON(object.videoCountdown)
        : undefined,
      slideImage: isSet(object.slideImage) ? Slide_Element_DataLink_SlideImage.fromJSON(object.slideImage) : undefined,
      ccliText: isSet(object.ccliText) ? Slide_Element_DataLink_CCLIText.fromJSON(object.ccliText) : undefined,
      groupName: isSet(object.groupName) ? Slide_Element_DataLink_GroupName.fromJSON(object.groupName) : undefined,
      groupColor: isSet(object.groupColor) ? Slide_Element_DataLink_GroupColor.fromJSON(object.groupColor) : undefined,
      presentationNotes: isSet(object.presentationNotes)
        ? Slide_Element_DataLink_PresentationNotes.fromJSON(object.presentationNotes)
        : undefined,
      playlistItem: isSet(object.playlistItem)
        ? Slide_Element_DataLink_PlaylistItem.fromJSON(object.playlistItem)
        : undefined,
      autoAdvanceTimeRemaining: isSet(object.autoAdvanceTimeRemaining)
        ? Slide_Element_DataLink_AutoAdvanceTimeRemaining.fromJSON(object.autoAdvanceTimeRemaining)
        : undefined,
      captureStatusText: isSet(object.captureStatusText)
        ? Slide_Element_DataLink_CaptureStatusText.fromJSON(object.captureStatusText)
        : undefined,
      captureStatusColor: isSet(object.captureStatusColor)
        ? Slide_Element_DataLink_CaptureStatusColor.fromJSON(object.captureStatusColor)
        : undefined,
      slideCount: isSet(object.slideCount) ? Slide_Element_DataLink_SlideCount.fromJSON(object.slideCount) : undefined,
      audioCountdown: isSet(object.audioCountdown)
        ? Slide_Element_DataLink_AudioCountdown.fromJSON(object.audioCountdown)
        : undefined,
      presentation: isSet(object.presentation)
        ? Slide_Element_DataLink_Presentation.fromJSON(object.presentation)
        : undefined,
      slideLabelText: isSet(object.slideLabelText)
        ? Slide_Element_DataLink_SlideLabelText.fromJSON(object.slideLabelText)
        : undefined,
      slideLabelColor: isSet(object.slideLabelColor)
        ? Slide_Element_DataLink_SlideLabelColor.fromJSON(object.slideLabelColor)
        : undefined,
      rssFeed: isSet(object.rssFeed) ? Slide_Element_DataLink_RSSFeed.fromJSON(object.rssFeed) : undefined,
      fileFeed: isSet(object.fileFeed) ? Slide_Element_DataLink_FileFeed.fromJSON(object.fileFeed) : undefined,
      chordProChart: isSet(object.chordProChart)
        ? Slide_Element_DataLink_ChordProChart.fromJSON(object.chordProChart)
        : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink): unknown {
    const obj: any = {};
    message.ticker !== undefined &&
      (obj.ticker = message.ticker ? Slide_Element_DataLink_Ticker.toJSON(message.ticker) : undefined);
    message.alternateText !== undefined && (obj.alternateText = message.alternateText
      ? Slide_Element_DataLink_AlternateElementText.toJSON(message.alternateText)
      : undefined);
    message.timerText !== undefined &&
      (obj.timerText = message.timerText ? Slide_Element_DataLink_TimerText.toJSON(message.timerText) : undefined);
    message.clockText !== undefined &&
      (obj.clockText = message.clockText ? Slide_Element_DataLink_ClockText.toJSON(message.clockText) : undefined);
    message.chordChart !== undefined &&
      (obj.chordChart = message.chordChart ? Slide_Element_DataLink_ChordChart.toJSON(message.chordChart) : undefined);
    message.outputScreen !== undefined && (obj.outputScreen = message.outputScreen
      ? Slide_Element_DataLink_OutputScreen.toJSON(message.outputScreen)
      : undefined);
    message.pcoLive !== undefined &&
      (obj.pcoLive = message.pcoLive ? Slide_Element_DataLink_PCOLive.toJSON(message.pcoLive) : undefined);
    message.alternateFill !== undefined && (obj.alternateFill = message.alternateFill
      ? Slide_Element_DataLink_AlternateElementFill.toJSON(message.alternateFill)
      : undefined);
    message.visibilityLink !== undefined && (obj.visibilityLink = message.visibilityLink
      ? Slide_Element_DataLink_VisibilityLink.toJSON(message.visibilityLink)
      : undefined);
    message.slideText !== undefined &&
      (obj.slideText = message.slideText ? Slide_Element_DataLink_SlideText.toJSON(message.slideText) : undefined);
    message.stageMessage !== undefined && (obj.stageMessage = message.stageMessage
      ? Slide_Element_DataLink_StageMessage.toJSON(message.stageMessage)
      : undefined);
    message.videoCountdown !== undefined && (obj.videoCountdown = message.videoCountdown
      ? Slide_Element_DataLink_VideoCountdown.toJSON(message.videoCountdown)
      : undefined);
    message.slideImage !== undefined &&
      (obj.slideImage = message.slideImage ? Slide_Element_DataLink_SlideImage.toJSON(message.slideImage) : undefined);
    message.ccliText !== undefined &&
      (obj.ccliText = message.ccliText ? Slide_Element_DataLink_CCLIText.toJSON(message.ccliText) : undefined);
    message.groupName !== undefined &&
      (obj.groupName = message.groupName ? Slide_Element_DataLink_GroupName.toJSON(message.groupName) : undefined);
    message.groupColor !== undefined &&
      (obj.groupColor = message.groupColor ? Slide_Element_DataLink_GroupColor.toJSON(message.groupColor) : undefined);
    message.presentationNotes !== undefined && (obj.presentationNotes = message.presentationNotes
      ? Slide_Element_DataLink_PresentationNotes.toJSON(message.presentationNotes)
      : undefined);
    message.playlistItem !== undefined && (obj.playlistItem = message.playlistItem
      ? Slide_Element_DataLink_PlaylistItem.toJSON(message.playlistItem)
      : undefined);
    message.autoAdvanceTimeRemaining !== undefined && (obj.autoAdvanceTimeRemaining = message.autoAdvanceTimeRemaining
      ? Slide_Element_DataLink_AutoAdvanceTimeRemaining.toJSON(message.autoAdvanceTimeRemaining)
      : undefined);
    message.captureStatusText !== undefined && (obj.captureStatusText = message.captureStatusText
      ? Slide_Element_DataLink_CaptureStatusText.toJSON(message.captureStatusText)
      : undefined);
    message.captureStatusColor !== undefined && (obj.captureStatusColor = message.captureStatusColor
      ? Slide_Element_DataLink_CaptureStatusColor.toJSON(message.captureStatusColor)
      : undefined);
    message.slideCount !== undefined &&
      (obj.slideCount = message.slideCount ? Slide_Element_DataLink_SlideCount.toJSON(message.slideCount) : undefined);
    message.audioCountdown !== undefined && (obj.audioCountdown = message.audioCountdown
      ? Slide_Element_DataLink_AudioCountdown.toJSON(message.audioCountdown)
      : undefined);
    message.presentation !== undefined && (obj.presentation = message.presentation
      ? Slide_Element_DataLink_Presentation.toJSON(message.presentation)
      : undefined);
    message.slideLabelText !== undefined && (obj.slideLabelText = message.slideLabelText
      ? Slide_Element_DataLink_SlideLabelText.toJSON(message.slideLabelText)
      : undefined);
    message.slideLabelColor !== undefined && (obj.slideLabelColor = message.slideLabelColor
      ? Slide_Element_DataLink_SlideLabelColor.toJSON(message.slideLabelColor)
      : undefined);
    message.rssFeed !== undefined &&
      (obj.rssFeed = message.rssFeed ? Slide_Element_DataLink_RSSFeed.toJSON(message.rssFeed) : undefined);
    message.fileFeed !== undefined &&
      (obj.fileFeed = message.fileFeed ? Slide_Element_DataLink_FileFeed.toJSON(message.fileFeed) : undefined);
    message.chordProChart !== undefined && (obj.chordProChart = message.chordProChart
      ? Slide_Element_DataLink_ChordProChart.toJSON(message.chordProChart)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink>, I>>(object: I): Slide_Element_DataLink {
    const message = createBaseSlide_Element_DataLink();
    message.ticker = (object.ticker !== undefined && object.ticker !== null)
      ? Slide_Element_DataLink_Ticker.fromPartial(object.ticker)
      : undefined;
    message.alternateText = (object.alternateText !== undefined && object.alternateText !== null)
      ? Slide_Element_DataLink_AlternateElementText.fromPartial(object.alternateText)
      : undefined;
    message.timerText = (object.timerText !== undefined && object.timerText !== null)
      ? Slide_Element_DataLink_TimerText.fromPartial(object.timerText)
      : undefined;
    message.clockText = (object.clockText !== undefined && object.clockText !== null)
      ? Slide_Element_DataLink_ClockText.fromPartial(object.clockText)
      : undefined;
    message.chordChart = (object.chordChart !== undefined && object.chordChart !== null)
      ? Slide_Element_DataLink_ChordChart.fromPartial(object.chordChart)
      : undefined;
    message.outputScreen = (object.outputScreen !== undefined && object.outputScreen !== null)
      ? Slide_Element_DataLink_OutputScreen.fromPartial(object.outputScreen)
      : undefined;
    message.pcoLive = (object.pcoLive !== undefined && object.pcoLive !== null)
      ? Slide_Element_DataLink_PCOLive.fromPartial(object.pcoLive)
      : undefined;
    message.alternateFill = (object.alternateFill !== undefined && object.alternateFill !== null)
      ? Slide_Element_DataLink_AlternateElementFill.fromPartial(object.alternateFill)
      : undefined;
    message.visibilityLink = (object.visibilityLink !== undefined && object.visibilityLink !== null)
      ? Slide_Element_DataLink_VisibilityLink.fromPartial(object.visibilityLink)
      : undefined;
    message.slideText = (object.slideText !== undefined && object.slideText !== null)
      ? Slide_Element_DataLink_SlideText.fromPartial(object.slideText)
      : undefined;
    message.stageMessage = (object.stageMessage !== undefined && object.stageMessage !== null)
      ? Slide_Element_DataLink_StageMessage.fromPartial(object.stageMessage)
      : undefined;
    message.videoCountdown = (object.videoCountdown !== undefined && object.videoCountdown !== null)
      ? Slide_Element_DataLink_VideoCountdown.fromPartial(object.videoCountdown)
      : undefined;
    message.slideImage = (object.slideImage !== undefined && object.slideImage !== null)
      ? Slide_Element_DataLink_SlideImage.fromPartial(object.slideImage)
      : undefined;
    message.ccliText = (object.ccliText !== undefined && object.ccliText !== null)
      ? Slide_Element_DataLink_CCLIText.fromPartial(object.ccliText)
      : undefined;
    message.groupName = (object.groupName !== undefined && object.groupName !== null)
      ? Slide_Element_DataLink_GroupName.fromPartial(object.groupName)
      : undefined;
    message.groupColor = (object.groupColor !== undefined && object.groupColor !== null)
      ? Slide_Element_DataLink_GroupColor.fromPartial(object.groupColor)
      : undefined;
    message.presentationNotes = (object.presentationNotes !== undefined && object.presentationNotes !== null)
      ? Slide_Element_DataLink_PresentationNotes.fromPartial(object.presentationNotes)
      : undefined;
    message.playlistItem = (object.playlistItem !== undefined && object.playlistItem !== null)
      ? Slide_Element_DataLink_PlaylistItem.fromPartial(object.playlistItem)
      : undefined;
    message.autoAdvanceTimeRemaining =
      (object.autoAdvanceTimeRemaining !== undefined && object.autoAdvanceTimeRemaining !== null)
        ? Slide_Element_DataLink_AutoAdvanceTimeRemaining.fromPartial(object.autoAdvanceTimeRemaining)
        : undefined;
    message.captureStatusText = (object.captureStatusText !== undefined && object.captureStatusText !== null)
      ? Slide_Element_DataLink_CaptureStatusText.fromPartial(object.captureStatusText)
      : undefined;
    message.captureStatusColor = (object.captureStatusColor !== undefined && object.captureStatusColor !== null)
      ? Slide_Element_DataLink_CaptureStatusColor.fromPartial(object.captureStatusColor)
      : undefined;
    message.slideCount = (object.slideCount !== undefined && object.slideCount !== null)
      ? Slide_Element_DataLink_SlideCount.fromPartial(object.slideCount)
      : undefined;
    message.audioCountdown = (object.audioCountdown !== undefined && object.audioCountdown !== null)
      ? Slide_Element_DataLink_AudioCountdown.fromPartial(object.audioCountdown)
      : undefined;
    message.presentation = (object.presentation !== undefined && object.presentation !== null)
      ? Slide_Element_DataLink_Presentation.fromPartial(object.presentation)
      : undefined;
    message.slideLabelText = (object.slideLabelText !== undefined && object.slideLabelText !== null)
      ? Slide_Element_DataLink_SlideLabelText.fromPartial(object.slideLabelText)
      : undefined;
    message.slideLabelColor = (object.slideLabelColor !== undefined && object.slideLabelColor !== null)
      ? Slide_Element_DataLink_SlideLabelColor.fromPartial(object.slideLabelColor)
      : undefined;
    message.rssFeed = (object.rssFeed !== undefined && object.rssFeed !== null)
      ? Slide_Element_DataLink_RSSFeed.fromPartial(object.rssFeed)
      : undefined;
    message.fileFeed = (object.fileFeed !== undefined && object.fileFeed !== null)
      ? Slide_Element_DataLink_FileFeed.fromPartial(object.fileFeed)
      : undefined;
    message.chordProChart = (object.chordProChart !== undefined && object.chordProChart !== null)
      ? Slide_Element_DataLink_ChordProChart.fromPartial(object.chordProChart)
      : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_RSSFeed(): Slide_Element_DataLink_RSSFeed {
  return { url: undefined, content: 0, textDelimiter: "" };
}

export const Slide_Element_DataLink_RSSFeed = {
  encode(message: Slide_Element_DataLink_RSSFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(10).fork()).ldelim();
    }
    if (message.content !== 0) {
      writer.uint32(16).int32(message.content);
    }
    if (message.textDelimiter !== "") {
      writer.uint32(26).string(message.textDelimiter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_RSSFeed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_RSSFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = URL.decode(reader, reader.uint32());
          break;
        case 2:
          message.content = reader.int32() as any;
          break;
        case 3:
          message.textDelimiter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_RSSFeed {
    return {
      url: isSet(object.url) ? URL.fromJSON(object.url) : undefined,
      content: isSet(object.content) ? slide_Element_DataLink_RSSFeed_ContentTypeFromJSON(object.content) : 0,
      textDelimiter: isSet(object.textDelimiter) ? String(object.textDelimiter) : "",
    };
  },

  toJSON(message: Slide_Element_DataLink_RSSFeed): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url ? URL.toJSON(message.url) : undefined);
    message.content !== undefined && (obj.content = slide_Element_DataLink_RSSFeed_ContentTypeToJSON(message.content));
    message.textDelimiter !== undefined && (obj.textDelimiter = message.textDelimiter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_RSSFeed>, I>>(
    object: I,
  ): Slide_Element_DataLink_RSSFeed {
    const message = createBaseSlide_Element_DataLink_RSSFeed();
    message.url = (object.url !== undefined && object.url !== null) ? URL.fromPartial(object.url) : undefined;
    message.content = object.content ?? 0;
    message.textDelimiter = object.textDelimiter ?? "";
    return message;
  },
};

function createBaseSlide_Element_DataLink_FileFeed(): Slide_Element_DataLink_FileFeed {
  return { url: undefined };
}

export const Slide_Element_DataLink_FileFeed = {
  encode(message: Slide_Element_DataLink_FileFeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_FileFeed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_FileFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = URL.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_FileFeed {
    return { url: isSet(object.url) ? URL.fromJSON(object.url) : undefined };
  },

  toJSON(message: Slide_Element_DataLink_FileFeed): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url ? URL.toJSON(message.url) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_FileFeed>, I>>(
    object: I,
  ): Slide_Element_DataLink_FileFeed {
    const message = createBaseSlide_Element_DataLink_FileFeed();
    message.url = (object.url !== undefined && object.url !== null) ? URL.fromPartial(object.url) : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_Ticker(): Slide_Element_DataLink_Ticker {
  return {
    playRate: 0,
    shouldLoop: false,
    loopDelay: 0,
    textDelimiter: "",
    textType: undefined,
    rssType: undefined,
    fileType: undefined,
  };
}

export const Slide_Element_DataLink_Ticker = {
  encode(message: Slide_Element_DataLink_Ticker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playRate !== 0) {
      writer.uint32(33).double(message.playRate);
    }
    if (message.shouldLoop === true) {
      writer.uint32(40).bool(message.shouldLoop);
    }
    if (message.loopDelay !== 0) {
      writer.uint32(49).double(message.loopDelay);
    }
    if (message.textDelimiter !== "") {
      writer.uint32(58).string(message.textDelimiter);
    }
    if (message.textType !== undefined) {
      Slide_Element_DataLink_Ticker_TextType.encode(message.textType, writer.uint32(10).fork()).ldelim();
    }
    if (message.rssType !== undefined) {
      Slide_Element_DataLink_Ticker_RSSType.encode(message.rssType, writer.uint32(18).fork()).ldelim();
    }
    if (message.fileType !== undefined) {
      Slide_Element_DataLink_Ticker_FileType.encode(message.fileType, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_Ticker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_Ticker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.playRate = reader.double();
          break;
        case 5:
          message.shouldLoop = reader.bool();
          break;
        case 6:
          message.loopDelay = reader.double();
          break;
        case 7:
          message.textDelimiter = reader.string();
          break;
        case 1:
          message.textType = Slide_Element_DataLink_Ticker_TextType.decode(reader, reader.uint32());
          break;
        case 2:
          message.rssType = Slide_Element_DataLink_Ticker_RSSType.decode(reader, reader.uint32());
          break;
        case 3:
          message.fileType = Slide_Element_DataLink_Ticker_FileType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_Ticker {
    return {
      playRate: isSet(object.playRate) ? Number(object.playRate) : 0,
      shouldLoop: isSet(object.shouldLoop) ? Boolean(object.shouldLoop) : false,
      loopDelay: isSet(object.loopDelay) ? Number(object.loopDelay) : 0,
      textDelimiter: isSet(object.textDelimiter) ? String(object.textDelimiter) : "",
      textType: isSet(object.textType) ? Slide_Element_DataLink_Ticker_TextType.fromJSON(object.textType) : undefined,
      rssType: isSet(object.rssType) ? Slide_Element_DataLink_Ticker_RSSType.fromJSON(object.rssType) : undefined,
      fileType: isSet(object.fileType) ? Slide_Element_DataLink_Ticker_FileType.fromJSON(object.fileType) : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_Ticker): unknown {
    const obj: any = {};
    message.playRate !== undefined && (obj.playRate = message.playRate);
    message.shouldLoop !== undefined && (obj.shouldLoop = message.shouldLoop);
    message.loopDelay !== undefined && (obj.loopDelay = message.loopDelay);
    message.textDelimiter !== undefined && (obj.textDelimiter = message.textDelimiter);
    message.textType !== undefined &&
      (obj.textType = message.textType ? Slide_Element_DataLink_Ticker_TextType.toJSON(message.textType) : undefined);
    message.rssType !== undefined &&
      (obj.rssType = message.rssType ? Slide_Element_DataLink_Ticker_RSSType.toJSON(message.rssType) : undefined);
    message.fileType !== undefined &&
      (obj.fileType = message.fileType ? Slide_Element_DataLink_Ticker_FileType.toJSON(message.fileType) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_Ticker>, I>>(
    object: I,
  ): Slide_Element_DataLink_Ticker {
    const message = createBaseSlide_Element_DataLink_Ticker();
    message.playRate = object.playRate ?? 0;
    message.shouldLoop = object.shouldLoop ?? false;
    message.loopDelay = object.loopDelay ?? 0;
    message.textDelimiter = object.textDelimiter ?? "";
    message.textType = (object.textType !== undefined && object.textType !== null)
      ? Slide_Element_DataLink_Ticker_TextType.fromPartial(object.textType)
      : undefined;
    message.rssType = (object.rssType !== undefined && object.rssType !== null)
      ? Slide_Element_DataLink_Ticker_RSSType.fromPartial(object.rssType)
      : undefined;
    message.fileType = (object.fileType !== undefined && object.fileType !== null)
      ? Slide_Element_DataLink_Ticker_FileType.fromPartial(object.fileType)
      : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_Ticker_TextType(): Slide_Element_DataLink_Ticker_TextType {
  return { text: "" };
}

export const Slide_Element_DataLink_Ticker_TextType = {
  encode(message: Slide_Element_DataLink_Ticker_TextType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_Ticker_TextType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_Ticker_TextType();
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

  fromJSON(object: any): Slide_Element_DataLink_Ticker_TextType {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: Slide_Element_DataLink_Ticker_TextType): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_Ticker_TextType>, I>>(
    object: I,
  ): Slide_Element_DataLink_Ticker_TextType {
    const message = createBaseSlide_Element_DataLink_Ticker_TextType();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseSlide_Element_DataLink_Ticker_RSSType(): Slide_Element_DataLink_Ticker_RSSType {
  return { url: undefined, content: 0 };
}

export const Slide_Element_DataLink_Ticker_RSSType = {
  encode(message: Slide_Element_DataLink_Ticker_RSSType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(10).fork()).ldelim();
    }
    if (message.content !== 0) {
      writer.uint32(16).int32(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_Ticker_RSSType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_Ticker_RSSType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = URL.decode(reader, reader.uint32());
          break;
        case 2:
          message.content = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_Ticker_RSSType {
    return {
      url: isSet(object.url) ? URL.fromJSON(object.url) : undefined,
      content: isSet(object.content) ? slide_Element_DataLink_Ticker_RSSType_ContentTypeFromJSON(object.content) : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_Ticker_RSSType): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url ? URL.toJSON(message.url) : undefined);
    message.content !== undefined &&
      (obj.content = slide_Element_DataLink_Ticker_RSSType_ContentTypeToJSON(message.content));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_Ticker_RSSType>, I>>(
    object: I,
  ): Slide_Element_DataLink_Ticker_RSSType {
    const message = createBaseSlide_Element_DataLink_Ticker_RSSType();
    message.url = (object.url !== undefined && object.url !== null) ? URL.fromPartial(object.url) : undefined;
    message.content = object.content ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_Ticker_FileType(): Slide_Element_DataLink_Ticker_FileType {
  return { url: undefined };
}

export const Slide_Element_DataLink_Ticker_FileType = {
  encode(message: Slide_Element_DataLink_Ticker_FileType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_Ticker_FileType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_Ticker_FileType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = URL.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_Ticker_FileType {
    return { url: isSet(object.url) ? URL.fromJSON(object.url) : undefined };
  },

  toJSON(message: Slide_Element_DataLink_Ticker_FileType): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url ? URL.toJSON(message.url) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_Ticker_FileType>, I>>(
    object: I,
  ): Slide_Element_DataLink_Ticker_FileType {
    const message = createBaseSlide_Element_DataLink_Ticker_FileType();
    message.url = (object.url !== undefined && object.url !== null) ? URL.fromPartial(object.url) : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_AlternateElementText(): Slide_Element_DataLink_AlternateElementText {
  return { otherElementUuid: undefined, otherElementName: "", textTransformOptions: 0, textTransform: 0 };
}

export const Slide_Element_DataLink_AlternateElementText = {
  encode(message: Slide_Element_DataLink_AlternateElementText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.otherElementUuid !== undefined) {
      UUID.encode(message.otherElementUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.otherElementName !== "") {
      writer.uint32(18).string(message.otherElementName);
    }
    if (message.textTransformOptions !== 0) {
      writer.uint32(24).uint32(message.textTransformOptions);
    }
    if (message.textTransform !== 0) {
      writer.uint32(32).int32(message.textTransform);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_AlternateElementText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_AlternateElementText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.otherElementUuid = UUID.decode(reader, reader.uint32());
          break;
        case 2:
          message.otherElementName = reader.string();
          break;
        case 3:
          message.textTransformOptions = reader.uint32();
          break;
        case 4:
          message.textTransform = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_AlternateElementText {
    return {
      otherElementUuid: isSet(object.otherElementUuid) ? UUID.fromJSON(object.otherElementUuid) : undefined,
      otherElementName: isSet(object.otherElementName) ? String(object.otherElementName) : "",
      textTransformOptions: isSet(object.textTransformOptions) ? Number(object.textTransformOptions) : 0,
      textTransform: isSet(object.textTransform)
        ? slide_Element_DataLink_AlternateElementText_TextTransformOptionFromJSON(object.textTransform)
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_AlternateElementText): unknown {
    const obj: any = {};
    message.otherElementUuid !== undefined &&
      (obj.otherElementUuid = message.otherElementUuid ? UUID.toJSON(message.otherElementUuid) : undefined);
    message.otherElementName !== undefined && (obj.otherElementName = message.otherElementName);
    message.textTransformOptions !== undefined && (obj.textTransformOptions = Math.round(message.textTransformOptions));
    message.textTransform !== undefined &&
      (obj.textTransform = slide_Element_DataLink_AlternateElementText_TextTransformOptionToJSON(
        message.textTransform,
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_AlternateElementText>, I>>(
    object: I,
  ): Slide_Element_DataLink_AlternateElementText {
    const message = createBaseSlide_Element_DataLink_AlternateElementText();
    message.otherElementUuid = (object.otherElementUuid !== undefined && object.otherElementUuid !== null)
      ? UUID.fromPartial(object.otherElementUuid)
      : undefined;
    message.otherElementName = object.otherElementName ?? "";
    message.textTransformOptions = object.textTransformOptions ?? 0;
    message.textTransform = object.textTransform ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_CCLIText(): Slide_Element_DataLink_CCLIText {
  return {};
}

export const Slide_Element_DataLink_CCLIText = {
  encode(_: Slide_Element_DataLink_CCLIText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_CCLIText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_CCLIText();
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

  fromJSON(_: any): Slide_Element_DataLink_CCLIText {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_CCLIText): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_CCLIText>, I>>(_: I): Slide_Element_DataLink_CCLIText {
    const message = createBaseSlide_Element_DataLink_CCLIText();
    return message;
  },
};

function createBaseSlide_Element_DataLink_ColorTrigger(): Slide_Element_DataLink_ColorTrigger {
  return { time: 0, color: undefined };
}

export const Slide_Element_DataLink_ColorTrigger = {
  encode(message: Slide_Element_DataLink_ColorTrigger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_ColorTrigger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_ColorTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.double();
          break;
        case 2:
          message.color = Color.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_ColorTrigger {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_ColorTrigger): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_ColorTrigger>, I>>(
    object: I,
  ): Slide_Element_DataLink_ColorTrigger {
    const message = createBaseSlide_Element_DataLink_ColorTrigger();
    message.time = object.time ?? 0;
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_TimerText(): Slide_Element_DataLink_TimerText {
  return { timerUuid: undefined, timerName: "", timerFormat: undefined, timerFormatString: "", colorTriggers: [] };
}

export const Slide_Element_DataLink_TimerText = {
  encode(message: Slide_Element_DataLink_TimerText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timerUuid !== undefined) {
      UUID.encode(message.timerUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.timerName !== "") {
      writer.uint32(18).string(message.timerName);
    }
    if (message.timerFormat !== undefined) {
      Timer_Format.encode(message.timerFormat, writer.uint32(26).fork()).ldelim();
    }
    if (message.timerFormatString !== "") {
      writer.uint32(34).string(message.timerFormatString);
    }
    for (const v of message.colorTriggers) {
      Slide_Element_DataLink_ColorTrigger.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_TimerText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_TimerText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timerUuid = UUID.decode(reader, reader.uint32());
          break;
        case 2:
          message.timerName = reader.string();
          break;
        case 3:
          message.timerFormat = Timer_Format.decode(reader, reader.uint32());
          break;
        case 4:
          message.timerFormatString = reader.string();
          break;
        case 5:
          message.colorTriggers.push(Slide_Element_DataLink_ColorTrigger.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_TimerText {
    return {
      timerUuid: isSet(object.timerUuid) ? UUID.fromJSON(object.timerUuid) : undefined,
      timerName: isSet(object.timerName) ? String(object.timerName) : "",
      timerFormat: isSet(object.timerFormat) ? Timer_Format.fromJSON(object.timerFormat) : undefined,
      timerFormatString: isSet(object.timerFormatString) ? String(object.timerFormatString) : "",
      colorTriggers: Array.isArray(object?.colorTriggers)
        ? object.colorTriggers.map((e: any) => Slide_Element_DataLink_ColorTrigger.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Slide_Element_DataLink_TimerText): unknown {
    const obj: any = {};
    message.timerUuid !== undefined && (obj.timerUuid = message.timerUuid ? UUID.toJSON(message.timerUuid) : undefined);
    message.timerName !== undefined && (obj.timerName = message.timerName);
    message.timerFormat !== undefined &&
      (obj.timerFormat = message.timerFormat ? Timer_Format.toJSON(message.timerFormat) : undefined);
    message.timerFormatString !== undefined && (obj.timerFormatString = message.timerFormatString);
    if (message.colorTriggers) {
      obj.colorTriggers = message.colorTriggers.map((e) =>
        e ? Slide_Element_DataLink_ColorTrigger.toJSON(e) : undefined
      );
    } else {
      obj.colorTriggers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_TimerText>, I>>(
    object: I,
  ): Slide_Element_DataLink_TimerText {
    const message = createBaseSlide_Element_DataLink_TimerText();
    message.timerUuid = (object.timerUuid !== undefined && object.timerUuid !== null)
      ? UUID.fromPartial(object.timerUuid)
      : undefined;
    message.timerName = object.timerName ?? "";
    message.timerFormat = (object.timerFormat !== undefined && object.timerFormat !== null)
      ? Timer_Format.fromPartial(object.timerFormat)
      : undefined;
    message.timerFormatString = object.timerFormatString ?? "";
    message.colorTriggers = object.colorTriggers?.map((e) => Slide_Element_DataLink_ColorTrigger.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSlide_Element_DataLink_ClockText(): Slide_Element_DataLink_ClockText {
  return { clockFormatString: "", format: undefined };
}

export const Slide_Element_DataLink_ClockText = {
  encode(message: Slide_Element_DataLink_ClockText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clockFormatString !== "") {
      writer.uint32(10).string(message.clockFormatString);
    }
    if (message.format !== undefined) {
      Clock_Format.encode(message.format, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_ClockText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_ClockText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clockFormatString = reader.string();
          break;
        case 5:
          message.format = Clock_Format.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_ClockText {
    return {
      clockFormatString: isSet(object.clockFormatString) ? String(object.clockFormatString) : "",
      format: isSet(object.format) ? Clock_Format.fromJSON(object.format) : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_ClockText): unknown {
    const obj: any = {};
    message.clockFormatString !== undefined && (obj.clockFormatString = message.clockFormatString);
    message.format !== undefined && (obj.format = message.format ? Clock_Format.toJSON(message.format) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_ClockText>, I>>(
    object: I,
  ): Slide_Element_DataLink_ClockText {
    const message = createBaseSlide_Element_DataLink_ClockText();
    message.clockFormatString = object.clockFormatString ?? "";
    message.format = (object.format !== undefined && object.format !== null)
      ? Clock_Format.fromPartial(object.format)
      : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_ChordChart(): Slide_Element_DataLink_ChordChart {
  return {};
}

export const Slide_Element_DataLink_ChordChart = {
  encode(_: Slide_Element_DataLink_ChordChart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_ChordChart {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_ChordChart();
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

  fromJSON(_: any): Slide_Element_DataLink_ChordChart {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_ChordChart): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_ChordChart>, I>>(
    _: I,
  ): Slide_Element_DataLink_ChordChart {
    const message = createBaseSlide_Element_DataLink_ChordChart();
    return message;
  },
};

function createBaseSlide_Element_DataLink_OutputScreen(): Slide_Element_DataLink_OutputScreen {
  return { screenId: undefined, screenName: "" };
}

export const Slide_Element_DataLink_OutputScreen = {
  encode(message: Slide_Element_DataLink_OutputScreen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.screenId !== undefined) {
      UUID.encode(message.screenId, writer.uint32(10).fork()).ldelim();
    }
    if (message.screenName !== "") {
      writer.uint32(18).string(message.screenName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_OutputScreen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_OutputScreen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.screenId = UUID.decode(reader, reader.uint32());
          break;
        case 2:
          message.screenName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_OutputScreen {
    return {
      screenId: isSet(object.screenId) ? UUID.fromJSON(object.screenId) : undefined,
      screenName: isSet(object.screenName) ? String(object.screenName) : "",
    };
  },

  toJSON(message: Slide_Element_DataLink_OutputScreen): unknown {
    const obj: any = {};
    message.screenId !== undefined && (obj.screenId = message.screenId ? UUID.toJSON(message.screenId) : undefined);
    message.screenName !== undefined && (obj.screenName = message.screenName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_OutputScreen>, I>>(
    object: I,
  ): Slide_Element_DataLink_OutputScreen {
    const message = createBaseSlide_Element_DataLink_OutputScreen();
    message.screenId = (object.screenId !== undefined && object.screenId !== null)
      ? UUID.fromPartial(object.screenId)
      : undefined;
    message.screenName = object.screenName ?? "";
    return message;
  },
};

function createBaseSlide_Element_DataLink_PCOLive(): Slide_Element_DataLink_PCOLive {
  return { theme: 0, countdownType: 0 };
}

export const Slide_Element_DataLink_PCOLive = {
  encode(message: Slide_Element_DataLink_PCOLive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.theme !== 0) {
      writer.uint32(16).int32(message.theme);
    }
    if (message.countdownType !== 0) {
      writer.uint32(24).int32(message.countdownType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_PCOLive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_PCOLive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.theme = reader.int32() as any;
          break;
        case 3:
          message.countdownType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_PCOLive {
    return {
      theme: isSet(object.theme) ? slide_Element_DataLink_PCOLive_ThemeFromJSON(object.theme) : 0,
      countdownType: isSet(object.countdownType)
        ? slide_Element_DataLink_PCOLive_CountdownTypeFromJSON(object.countdownType)
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_PCOLive): unknown {
    const obj: any = {};
    message.theme !== undefined && (obj.theme = slide_Element_DataLink_PCOLive_ThemeToJSON(message.theme));
    message.countdownType !== undefined &&
      (obj.countdownType = slide_Element_DataLink_PCOLive_CountdownTypeToJSON(message.countdownType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_PCOLive>, I>>(
    object: I,
  ): Slide_Element_DataLink_PCOLive {
    const message = createBaseSlide_Element_DataLink_PCOLive();
    message.theme = object.theme ?? 0;
    message.countdownType = object.countdownType ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_AlternateElementFill(): Slide_Element_DataLink_AlternateElementFill {
  return { otherElementUuid: undefined, otherElementName: "" };
}

export const Slide_Element_DataLink_AlternateElementFill = {
  encode(message: Slide_Element_DataLink_AlternateElementFill, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.otherElementUuid !== undefined) {
      UUID.encode(message.otherElementUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.otherElementName !== "") {
      writer.uint32(18).string(message.otherElementName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_AlternateElementFill {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_AlternateElementFill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.otherElementUuid = UUID.decode(reader, reader.uint32());
          break;
        case 2:
          message.otherElementName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_AlternateElementFill {
    return {
      otherElementUuid: isSet(object.otherElementUuid) ? UUID.fromJSON(object.otherElementUuid) : undefined,
      otherElementName: isSet(object.otherElementName) ? String(object.otherElementName) : "",
    };
  },

  toJSON(message: Slide_Element_DataLink_AlternateElementFill): unknown {
    const obj: any = {};
    message.otherElementUuid !== undefined &&
      (obj.otherElementUuid = message.otherElementUuid ? UUID.toJSON(message.otherElementUuid) : undefined);
    message.otherElementName !== undefined && (obj.otherElementName = message.otherElementName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_AlternateElementFill>, I>>(
    object: I,
  ): Slide_Element_DataLink_AlternateElementFill {
    const message = createBaseSlide_Element_DataLink_AlternateElementFill();
    message.otherElementUuid = (object.otherElementUuid !== undefined && object.otherElementUuid !== null)
      ? UUID.fromPartial(object.otherElementUuid)
      : undefined;
    message.otherElementName = object.otherElementName ?? "";
    return message;
  },
};

function createBaseSlide_Element_DataLink_VisibilityLink(): Slide_Element_DataLink_VisibilityLink {
  return { visibilityCriterion: 0, conditions: [] };
}

export const Slide_Element_DataLink_VisibilityLink = {
  encode(message: Slide_Element_DataLink_VisibilityLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.visibilityCriterion !== 0) {
      writer.uint32(8).int32(message.visibilityCriterion);
    }
    for (const v of message.conditions) {
      Slide_Element_DataLink_VisibilityLink_Condition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_VisibilityLink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_VisibilityLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibilityCriterion = reader.int32() as any;
          break;
        case 2:
          message.conditions.push(Slide_Element_DataLink_VisibilityLink_Condition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_VisibilityLink {
    return {
      visibilityCriterion: isSet(object.visibilityCriterion)
        ? slide_Element_DataLink_VisibilityLink_VisibilityCriterionFromJSON(object.visibilityCriterion)
        : 0,
      conditions: Array.isArray(object?.conditions)
        ? object.conditions.map((e: any) => Slide_Element_DataLink_VisibilityLink_Condition.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Slide_Element_DataLink_VisibilityLink): unknown {
    const obj: any = {};
    message.visibilityCriterion !== undefined &&
      (obj.visibilityCriterion = slide_Element_DataLink_VisibilityLink_VisibilityCriterionToJSON(
        message.visibilityCriterion,
      ));
    if (message.conditions) {
      obj.conditions = message.conditions.map((e) =>
        e ? Slide_Element_DataLink_VisibilityLink_Condition.toJSON(e) : undefined
      );
    } else {
      obj.conditions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_VisibilityLink>, I>>(
    object: I,
  ): Slide_Element_DataLink_VisibilityLink {
    const message = createBaseSlide_Element_DataLink_VisibilityLink();
    message.visibilityCriterion = object.visibilityCriterion ?? 0;
    message.conditions =
      object.conditions?.map((e) => Slide_Element_DataLink_VisibilityLink_Condition.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSlide_Element_DataLink_VisibilityLink_Condition(): Slide_Element_DataLink_VisibilityLink_Condition {
  return {
    elementVisibility: undefined,
    timerVisibility: undefined,
    videoCountdownVisibility: undefined,
    captureSessionVisibility: undefined,
    videoInputVisibility: undefined,
    audioCountdownVisibility: undefined,
  };
}

export const Slide_Element_DataLink_VisibilityLink_Condition = {
  encode(
    message: Slide_Element_DataLink_VisibilityLink_Condition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.elementVisibility !== undefined) {
      Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility.encode(
        message.elementVisibility,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.timerVisibility !== undefined) {
      Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility.encode(
        message.timerVisibility,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.videoCountdownVisibility !== undefined) {
      Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility.encode(
        message.videoCountdownVisibility,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.captureSessionVisibility !== undefined) {
      Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility.encode(
        message.captureSessionVisibility,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.videoInputVisibility !== undefined) {
      Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility.encode(
        message.videoInputVisibility,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.audioCountdownVisibility !== undefined) {
      Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility.encode(
        message.audioCountdownVisibility,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_VisibilityLink_Condition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elementVisibility = Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.timerVisibility = Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.videoCountdownVisibility = Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility
            .decode(reader, reader.uint32());
          break;
        case 4:
          message.captureSessionVisibility = Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility
            .decode(reader, reader.uint32());
          break;
        case 5:
          message.videoInputVisibility = Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.audioCountdownVisibility = Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility
            .decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_VisibilityLink_Condition {
    return {
      elementVisibility: isSet(object.elementVisibility)
        ? Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility.fromJSON(object.elementVisibility)
        : undefined,
      timerVisibility: isSet(object.timerVisibility)
        ? Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility.fromJSON(object.timerVisibility)
        : undefined,
      videoCountdownVisibility: isSet(object.videoCountdownVisibility)
        ? Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility.fromJSON(
          object.videoCountdownVisibility,
        )
        : undefined,
      captureSessionVisibility: isSet(object.captureSessionVisibility)
        ? Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility.fromJSON(
          object.captureSessionVisibility,
        )
        : undefined,
      videoInputVisibility: isSet(object.videoInputVisibility)
        ? Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility.fromJSON(object.videoInputVisibility)
        : undefined,
      audioCountdownVisibility: isSet(object.audioCountdownVisibility)
        ? Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility.fromJSON(
          object.audioCountdownVisibility,
        )
        : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_VisibilityLink_Condition): unknown {
    const obj: any = {};
    message.elementVisibility !== undefined && (obj.elementVisibility = message.elementVisibility
      ? Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility.toJSON(message.elementVisibility)
      : undefined);
    message.timerVisibility !== undefined && (obj.timerVisibility = message.timerVisibility
      ? Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility.toJSON(message.timerVisibility)
      : undefined);
    message.videoCountdownVisibility !== undefined && (obj.videoCountdownVisibility = message.videoCountdownVisibility
      ? Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility.toJSON(
        message.videoCountdownVisibility,
      )
      : undefined);
    message.captureSessionVisibility !== undefined && (obj.captureSessionVisibility = message.captureSessionVisibility
      ? Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility.toJSON(
        message.captureSessionVisibility,
      )
      : undefined);
    message.videoInputVisibility !== undefined && (obj.videoInputVisibility = message.videoInputVisibility
      ? Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility.toJSON(message.videoInputVisibility)
      : undefined);
    message.audioCountdownVisibility !== undefined && (obj.audioCountdownVisibility = message.audioCountdownVisibility
      ? Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility.toJSON(
        message.audioCountdownVisibility,
      )
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition>, I>>(
    object: I,
  ): Slide_Element_DataLink_VisibilityLink_Condition {
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition();
    message.elementVisibility = (object.elementVisibility !== undefined && object.elementVisibility !== null)
      ? Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility.fromPartial(object.elementVisibility)
      : undefined;
    message.timerVisibility = (object.timerVisibility !== undefined && object.timerVisibility !== null)
      ? Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility.fromPartial(object.timerVisibility)
      : undefined;
    message.videoCountdownVisibility =
      (object.videoCountdownVisibility !== undefined && object.videoCountdownVisibility !== null)
        ? Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility.fromPartial(
          object.videoCountdownVisibility,
        )
        : undefined;
    message.captureSessionVisibility =
      (object.captureSessionVisibility !== undefined && object.captureSessionVisibility !== null)
        ? Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility.fromPartial(
          object.captureSessionVisibility,
        )
        : undefined;
    message.videoInputVisibility = (object.videoInputVisibility !== undefined && object.videoInputVisibility !== null)
      ? Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility.fromPartial(object.videoInputVisibility)
      : undefined;
    message.audioCountdownVisibility =
      (object.audioCountdownVisibility !== undefined && object.audioCountdownVisibility !== null)
        ? Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility.fromPartial(
          object.audioCountdownVisibility,
        )
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_VisibilityLink_Condition_ElementVisibility(): Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility {
  return { otherElementUuid: undefined, otherElementName: "", visibilityCriterion: 0 };
}

export const Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility = {
  encode(
    message: Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.otherElementUuid !== undefined) {
      UUID.encode(message.otherElementUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.otherElementName !== "") {
      writer.uint32(18).string(message.otherElementName);
    }
    if (message.visibilityCriterion !== 0) {
      writer.uint32(24).int32(message.visibilityCriterion);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition_ElementVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.otherElementUuid = UUID.decode(reader, reader.uint32());
          break;
        case 2:
          message.otherElementName = reader.string();
          break;
        case 3:
          message.visibilityCriterion = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility {
    return {
      otherElementUuid: isSet(object.otherElementUuid) ? UUID.fromJSON(object.otherElementUuid) : undefined,
      otherElementName: isSet(object.otherElementName) ? String(object.otherElementName) : "",
      visibilityCriterion: isSet(object.visibilityCriterion)
        ? slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterionFromJSON(
          object.visibilityCriterion,
        )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility): unknown {
    const obj: any = {};
    message.otherElementUuid !== undefined &&
      (obj.otherElementUuid = message.otherElementUuid ? UUID.toJSON(message.otherElementUuid) : undefined);
    message.otherElementName !== undefined && (obj.otherElementName = message.otherElementName);
    message.visibilityCriterion !== undefined &&
      (obj.visibilityCriterion =
        slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterionToJSON(
          message.visibilityCriterion,
        ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility>, I>>(
    object: I,
  ): Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility {
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition_ElementVisibility();
    message.otherElementUuid = (object.otherElementUuid !== undefined && object.otherElementUuid !== null)
      ? UUID.fromPartial(object.otherElementUuid)
      : undefined;
    message.otherElementName = object.otherElementName ?? "";
    message.visibilityCriterion = object.visibilityCriterion ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_VisibilityLink_Condition_TimerVisibility(): Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility {
  return { timerUuid: undefined, timerName: "", visibilityCriterion: 0 };
}

export const Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility = {
  encode(
    message: Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timerUuid !== undefined) {
      UUID.encode(message.timerUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.timerName !== "") {
      writer.uint32(18).string(message.timerName);
    }
    if (message.visibilityCriterion !== 0) {
      writer.uint32(24).int32(message.visibilityCriterion);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition_TimerVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timerUuid = UUID.decode(reader, reader.uint32());
          break;
        case 2:
          message.timerName = reader.string();
          break;
        case 3:
          message.visibilityCriterion = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility {
    return {
      timerUuid: isSet(object.timerUuid) ? UUID.fromJSON(object.timerUuid) : undefined,
      timerName: isSet(object.timerName) ? String(object.timerName) : "",
      visibilityCriterion: isSet(object.visibilityCriterion)
        ? slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterionFromJSON(
          object.visibilityCriterion,
        )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility): unknown {
    const obj: any = {};
    message.timerUuid !== undefined && (obj.timerUuid = message.timerUuid ? UUID.toJSON(message.timerUuid) : undefined);
    message.timerName !== undefined && (obj.timerName = message.timerName);
    message.visibilityCriterion !== undefined &&
      (obj.visibilityCriterion =
        slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterionToJSON(
          message.visibilityCriterion,
        ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility>, I>>(
    object: I,
  ): Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility {
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition_TimerVisibility();
    message.timerUuid = (object.timerUuid !== undefined && object.timerUuid !== null)
      ? UUID.fromPartial(object.timerUuid)
      : undefined;
    message.timerName = object.timerName ?? "";
    message.visibilityCriterion = object.visibilityCriterion ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility(): Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility {
  return { visibilityCriterion: 0 };
}

export const Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility = {
  encode(
    message: Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.visibilityCriterion !== 0) {
      writer.uint32(8).int32(message.visibilityCriterion);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibilityCriterion = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility {
    return {
      visibilityCriterion: isSet(object.visibilityCriterion)
        ? slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterionFromJSON(
          object.visibilityCriterion,
        )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility): unknown {
    const obj: any = {};
    message.visibilityCriterion !== undefined &&
      (obj.visibilityCriterion =
        slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterionToJSON(
          message.visibilityCriterion,
        ));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility>, I>,
  >(object: I): Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility {
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility();
    message.visibilityCriterion = object.visibilityCriterion ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility(): Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility {
  return { visibilityCriterion: 0 };
}

export const Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility = {
  encode(
    message: Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.visibilityCriterion !== 0) {
      writer.uint32(8).int32(message.visibilityCriterion);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibilityCriterion = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility {
    return {
      visibilityCriterion: isSet(object.visibilityCriterion)
        ? slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterionFromJSON(
          object.visibilityCriterion,
        )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility): unknown {
    const obj: any = {};
    message.visibilityCriterion !== undefined &&
      (obj.visibilityCriterion =
        slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterionToJSON(
          message.visibilityCriterion,
        ));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility>, I>,
  >(object: I): Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility {
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility();
    message.visibilityCriterion = object.visibilityCriterion ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility(): Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility {
  return { visibilityCriterion: 0 };
}

export const Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility = {
  encode(
    message: Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.visibilityCriterion !== 0) {
      writer.uint32(8).int32(message.visibilityCriterion);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibilityCriterion = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility {
    return {
      visibilityCriterion: isSet(object.visibilityCriterion)
        ? slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterionFromJSON(
          object.visibilityCriterion,
        )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility): unknown {
    const obj: any = {};
    message.visibilityCriterion !== undefined &&
      (obj.visibilityCriterion =
        slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterionToJSON(
          message.visibilityCriterion,
        ));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility>, I>,
  >(object: I): Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility {
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility();
    message.visibilityCriterion = object.visibilityCriterion ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility(): Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility {
  return { videoInputIndex: 0, visibilityCriterion: 0 };
}

export const Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility = {
  encode(
    message: Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.videoInputIndex !== 0) {
      writer.uint32(8).int32(message.videoInputIndex);
    }
    if (message.visibilityCriterion !== 0) {
      writer.uint32(16).int32(message.visibilityCriterion);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.videoInputIndex = reader.int32();
          break;
        case 2:
          message.visibilityCriterion = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility {
    return {
      videoInputIndex: isSet(object.videoInputIndex) ? Number(object.videoInputIndex) : 0,
      visibilityCriterion: isSet(object.visibilityCriterion)
        ? slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterionFromJSON(
          object.visibilityCriterion,
        )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility): unknown {
    const obj: any = {};
    message.videoInputIndex !== undefined && (obj.videoInputIndex = Math.round(message.videoInputIndex));
    message.visibilityCriterion !== undefined &&
      (obj.visibilityCriterion =
        slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterionToJSON(
          message.visibilityCriterion,
        ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility>, I>>(
    object: I,
  ): Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility {
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility();
    message.videoInputIndex = object.videoInputIndex ?? 0;
    message.visibilityCriterion = object.visibilityCriterion ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_SlideText(): Slide_Element_DataLink_SlideText {
  return { sourceSlide: 0, sourceOption: 0, preserveNotesFormat: false, nameToMatch: "", elementTextTransform: 0 };
}

export const Slide_Element_DataLink_SlideText = {
  encode(message: Slide_Element_DataLink_SlideText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceSlide !== 0) {
      writer.uint32(8).int32(message.sourceSlide);
    }
    if (message.sourceOption !== 0) {
      writer.uint32(16).int32(message.sourceOption);
    }
    if (message.preserveNotesFormat === true) {
      writer.uint32(24).bool(message.preserveNotesFormat);
    }
    if (message.nameToMatch !== "") {
      writer.uint32(34).string(message.nameToMatch);
    }
    if (message.elementTextTransform !== 0) {
      writer.uint32(40).int32(message.elementTextTransform);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_SlideText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_SlideText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceSlide = reader.int32() as any;
          break;
        case 2:
          message.sourceOption = reader.int32() as any;
          break;
        case 3:
          message.preserveNotesFormat = reader.bool();
          break;
        case 4:
          message.nameToMatch = reader.string();
          break;
        case 5:
          message.elementTextTransform = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_SlideText {
    return {
      sourceSlide: isSet(object.sourceSlide)
        ? slide_Element_DataLink_SlideText_SlideSourceTypeFromJSON(object.sourceSlide)
        : 0,
      sourceOption: isSet(object.sourceOption)
        ? slide_Element_DataLink_SlideText_TextSourceOptionFromJSON(object.sourceOption)
        : 0,
      preserveNotesFormat: isSet(object.preserveNotesFormat) ? Boolean(object.preserveNotesFormat) : false,
      nameToMatch: isSet(object.nameToMatch) ? String(object.nameToMatch) : "",
      elementTextTransform: isSet(object.elementTextTransform)
        ? slide_Element_DataLink_SlideText_TextTransformOptionFromJSON(object.elementTextTransform)
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_SlideText): unknown {
    const obj: any = {};
    message.sourceSlide !== undefined &&
      (obj.sourceSlide = slide_Element_DataLink_SlideText_SlideSourceTypeToJSON(message.sourceSlide));
    message.sourceOption !== undefined &&
      (obj.sourceOption = slide_Element_DataLink_SlideText_TextSourceOptionToJSON(message.sourceOption));
    message.preserveNotesFormat !== undefined && (obj.preserveNotesFormat = message.preserveNotesFormat);
    message.nameToMatch !== undefined && (obj.nameToMatch = message.nameToMatch);
    message.elementTextTransform !== undefined &&
      (obj.elementTextTransform = slide_Element_DataLink_SlideText_TextTransformOptionToJSON(
        message.elementTextTransform,
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_SlideText>, I>>(
    object: I,
  ): Slide_Element_DataLink_SlideText {
    const message = createBaseSlide_Element_DataLink_SlideText();
    message.sourceSlide = object.sourceSlide ?? 0;
    message.sourceOption = object.sourceOption ?? 0;
    message.preserveNotesFormat = object.preserveNotesFormat ?? false;
    message.nameToMatch = object.nameToMatch ?? "";
    message.elementTextTransform = object.elementTextTransform ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_SlideImage(): Slide_Element_DataLink_SlideImage {
  return { sourceSlide: 0 };
}

export const Slide_Element_DataLink_SlideImage = {
  encode(message: Slide_Element_DataLink_SlideImage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceSlide !== 0) {
      writer.uint32(8).int32(message.sourceSlide);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_SlideImage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_SlideImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceSlide = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_SlideImage {
    return {
      sourceSlide: isSet(object.sourceSlide)
        ? slide_Element_DataLink_SlideImage_SlideSourceTypeFromJSON(object.sourceSlide)
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_SlideImage): unknown {
    const obj: any = {};
    message.sourceSlide !== undefined &&
      (obj.sourceSlide = slide_Element_DataLink_SlideImage_SlideSourceTypeToJSON(message.sourceSlide));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_SlideImage>, I>>(
    object: I,
  ): Slide_Element_DataLink_SlideImage {
    const message = createBaseSlide_Element_DataLink_SlideImage();
    message.sourceSlide = object.sourceSlide ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_StageMessage(): Slide_Element_DataLink_StageMessage {
  return { shouldFlash: false, flashColor: undefined };
}

export const Slide_Element_DataLink_StageMessage = {
  encode(message: Slide_Element_DataLink_StageMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shouldFlash === true) {
      writer.uint32(8).bool(message.shouldFlash);
    }
    if (message.flashColor !== undefined) {
      Color.encode(message.flashColor, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_StageMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_StageMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shouldFlash = reader.bool();
          break;
        case 2:
          message.flashColor = Color.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_StageMessage {
    return {
      shouldFlash: isSet(object.shouldFlash) ? Boolean(object.shouldFlash) : false,
      flashColor: isSet(object.flashColor) ? Color.fromJSON(object.flashColor) : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_StageMessage): unknown {
    const obj: any = {};
    message.shouldFlash !== undefined && (obj.shouldFlash = message.shouldFlash);
    message.flashColor !== undefined &&
      (obj.flashColor = message.flashColor ? Color.toJSON(message.flashColor) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_StageMessage>, I>>(
    object: I,
  ): Slide_Element_DataLink_StageMessage {
    const message = createBaseSlide_Element_DataLink_StageMessage();
    message.shouldFlash = object.shouldFlash ?? false;
    message.flashColor = (object.flashColor !== undefined && object.flashColor !== null)
      ? Color.fromPartial(object.flashColor)
      : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_VideoCountdown(): Slide_Element_DataLink_VideoCountdown {
  return {
    timerFormat: undefined,
    timerFormatString: "",
    colorTriggers: [],
    ignoreLoopingVideos: false,
    videoCountdownSource: 0,
  };
}

export const Slide_Element_DataLink_VideoCountdown = {
  encode(message: Slide_Element_DataLink_VideoCountdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timerFormat !== undefined) {
      Timer_Format.encode(message.timerFormat, writer.uint32(10).fork()).ldelim();
    }
    if (message.timerFormatString !== "") {
      writer.uint32(18).string(message.timerFormatString);
    }
    for (const v of message.colorTriggers) {
      Slide_Element_DataLink_ColorTrigger.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.ignoreLoopingVideos === true) {
      writer.uint32(32).bool(message.ignoreLoopingVideos);
    }
    if (message.videoCountdownSource !== 0) {
      writer.uint32(40).int32(message.videoCountdownSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_VideoCountdown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_VideoCountdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timerFormat = Timer_Format.decode(reader, reader.uint32());
          break;
        case 2:
          message.timerFormatString = reader.string();
          break;
        case 3:
          message.colorTriggers.push(Slide_Element_DataLink_ColorTrigger.decode(reader, reader.uint32()));
          break;
        case 4:
          message.ignoreLoopingVideos = reader.bool();
          break;
        case 5:
          message.videoCountdownSource = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_VideoCountdown {
    return {
      timerFormat: isSet(object.timerFormat) ? Timer_Format.fromJSON(object.timerFormat) : undefined,
      timerFormatString: isSet(object.timerFormatString) ? String(object.timerFormatString) : "",
      colorTriggers: Array.isArray(object?.colorTriggers)
        ? object.colorTriggers.map((e: any) => Slide_Element_DataLink_ColorTrigger.fromJSON(e))
        : [],
      ignoreLoopingVideos: isSet(object.ignoreLoopingVideos) ? Boolean(object.ignoreLoopingVideos) : false,
      videoCountdownSource: isSet(object.videoCountdownSource)
        ? slide_Element_DataLink_VideoCountdown_VideoCountdownSourceFromJSON(object.videoCountdownSource)
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_VideoCountdown): unknown {
    const obj: any = {};
    message.timerFormat !== undefined &&
      (obj.timerFormat = message.timerFormat ? Timer_Format.toJSON(message.timerFormat) : undefined);
    message.timerFormatString !== undefined && (obj.timerFormatString = message.timerFormatString);
    if (message.colorTriggers) {
      obj.colorTriggers = message.colorTriggers.map((e) =>
        e ? Slide_Element_DataLink_ColorTrigger.toJSON(e) : undefined
      );
    } else {
      obj.colorTriggers = [];
    }
    message.ignoreLoopingVideos !== undefined && (obj.ignoreLoopingVideos = message.ignoreLoopingVideos);
    message.videoCountdownSource !== undefined &&
      (obj.videoCountdownSource = slide_Element_DataLink_VideoCountdown_VideoCountdownSourceToJSON(
        message.videoCountdownSource,
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_VideoCountdown>, I>>(
    object: I,
  ): Slide_Element_DataLink_VideoCountdown {
    const message = createBaseSlide_Element_DataLink_VideoCountdown();
    message.timerFormat = (object.timerFormat !== undefined && object.timerFormat !== null)
      ? Timer_Format.fromPartial(object.timerFormat)
      : undefined;
    message.timerFormatString = object.timerFormatString ?? "";
    message.colorTriggers = object.colorTriggers?.map((e) => Slide_Element_DataLink_ColorTrigger.fromPartial(e)) || [];
    message.ignoreLoopingVideos = object.ignoreLoopingVideos ?? false;
    message.videoCountdownSource = object.videoCountdownSource ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_AudioCountdown(): Slide_Element_DataLink_AudioCountdown {
  return { timerFormat: undefined, timerFormatString: "", colorTriggers: [], ignoreLoopingAudio: false };
}

export const Slide_Element_DataLink_AudioCountdown = {
  encode(message: Slide_Element_DataLink_AudioCountdown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timerFormat !== undefined) {
      Timer_Format.encode(message.timerFormat, writer.uint32(10).fork()).ldelim();
    }
    if (message.timerFormatString !== "") {
      writer.uint32(18).string(message.timerFormatString);
    }
    for (const v of message.colorTriggers) {
      Slide_Element_DataLink_ColorTrigger.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.ignoreLoopingAudio === true) {
      writer.uint32(32).bool(message.ignoreLoopingAudio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_AudioCountdown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_AudioCountdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timerFormat = Timer_Format.decode(reader, reader.uint32());
          break;
        case 2:
          message.timerFormatString = reader.string();
          break;
        case 3:
          message.colorTriggers.push(Slide_Element_DataLink_ColorTrigger.decode(reader, reader.uint32()));
          break;
        case 4:
          message.ignoreLoopingAudio = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_AudioCountdown {
    return {
      timerFormat: isSet(object.timerFormat) ? Timer_Format.fromJSON(object.timerFormat) : undefined,
      timerFormatString: isSet(object.timerFormatString) ? String(object.timerFormatString) : "",
      colorTriggers: Array.isArray(object?.colorTriggers)
        ? object.colorTriggers.map((e: any) => Slide_Element_DataLink_ColorTrigger.fromJSON(e))
        : [],
      ignoreLoopingAudio: isSet(object.ignoreLoopingAudio) ? Boolean(object.ignoreLoopingAudio) : false,
    };
  },

  toJSON(message: Slide_Element_DataLink_AudioCountdown): unknown {
    const obj: any = {};
    message.timerFormat !== undefined &&
      (obj.timerFormat = message.timerFormat ? Timer_Format.toJSON(message.timerFormat) : undefined);
    message.timerFormatString !== undefined && (obj.timerFormatString = message.timerFormatString);
    if (message.colorTriggers) {
      obj.colorTriggers = message.colorTriggers.map((e) =>
        e ? Slide_Element_DataLink_ColorTrigger.toJSON(e) : undefined
      );
    } else {
      obj.colorTriggers = [];
    }
    message.ignoreLoopingAudio !== undefined && (obj.ignoreLoopingAudio = message.ignoreLoopingAudio);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_AudioCountdown>, I>>(
    object: I,
  ): Slide_Element_DataLink_AudioCountdown {
    const message = createBaseSlide_Element_DataLink_AudioCountdown();
    message.timerFormat = (object.timerFormat !== undefined && object.timerFormat !== null)
      ? Timer_Format.fromPartial(object.timerFormat)
      : undefined;
    message.timerFormatString = object.timerFormatString ?? "";
    message.colorTriggers = object.colorTriggers?.map((e) => Slide_Element_DataLink_ColorTrigger.fromPartial(e)) || [];
    message.ignoreLoopingAudio = object.ignoreLoopingAudio ?? false;
    return message;
  },
};

function createBaseSlide_Element_DataLink_GroupName(): Slide_Element_DataLink_GroupName {
  return { groupSource: 0 };
}

export const Slide_Element_DataLink_GroupName = {
  encode(message: Slide_Element_DataLink_GroupName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupSource !== 0) {
      writer.uint32(8).int32(message.groupSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_GroupName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_GroupName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupSource = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_GroupName {
    return {
      groupSource: isSet(object.groupSource)
        ? slide_Element_DataLink_GroupName_GroupSourceTypeFromJSON(object.groupSource)
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_GroupName): unknown {
    const obj: any = {};
    message.groupSource !== undefined &&
      (obj.groupSource = slide_Element_DataLink_GroupName_GroupSourceTypeToJSON(message.groupSource));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_GroupName>, I>>(
    object: I,
  ): Slide_Element_DataLink_GroupName {
    const message = createBaseSlide_Element_DataLink_GroupName();
    message.groupSource = object.groupSource ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_GroupColor(): Slide_Element_DataLink_GroupColor {
  return { groupSource: 0 };
}

export const Slide_Element_DataLink_GroupColor = {
  encode(message: Slide_Element_DataLink_GroupColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupSource !== 0) {
      writer.uint32(8).int32(message.groupSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_GroupColor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_GroupColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupSource = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_GroupColor {
    return {
      groupSource: isSet(object.groupSource)
        ? slide_Element_DataLink_GroupColor_GroupSourceTypeFromJSON(object.groupSource)
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_GroupColor): unknown {
    const obj: any = {};
    message.groupSource !== undefined &&
      (obj.groupSource = slide_Element_DataLink_GroupColor_GroupSourceTypeToJSON(message.groupSource));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_GroupColor>, I>>(
    object: I,
  ): Slide_Element_DataLink_GroupColor {
    const message = createBaseSlide_Element_DataLink_GroupColor();
    message.groupSource = object.groupSource ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_SlideLabelText(): Slide_Element_DataLink_SlideLabelText {
  return { slideLabelSource: 0 };
}

export const Slide_Element_DataLink_SlideLabelText = {
  encode(message: Slide_Element_DataLink_SlideLabelText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slideLabelSource !== 0) {
      writer.uint32(8).int32(message.slideLabelSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_SlideLabelText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_SlideLabelText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slideLabelSource = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_SlideLabelText {
    return {
      slideLabelSource: isSet(object.slideLabelSource)
        ? slide_Element_DataLink_SlideLabelText_SlideLabelSourceFromJSON(object.slideLabelSource)
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_SlideLabelText): unknown {
    const obj: any = {};
    message.slideLabelSource !== undefined &&
      (obj.slideLabelSource = slide_Element_DataLink_SlideLabelText_SlideLabelSourceToJSON(message.slideLabelSource));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_SlideLabelText>, I>>(
    object: I,
  ): Slide_Element_DataLink_SlideLabelText {
    const message = createBaseSlide_Element_DataLink_SlideLabelText();
    message.slideLabelSource = object.slideLabelSource ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_SlideLabelColor(): Slide_Element_DataLink_SlideLabelColor {
  return { slideLabelSource: 0 };
}

export const Slide_Element_DataLink_SlideLabelColor = {
  encode(message: Slide_Element_DataLink_SlideLabelColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slideLabelSource !== 0) {
      writer.uint32(8).int32(message.slideLabelSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_SlideLabelColor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_SlideLabelColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slideLabelSource = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_SlideLabelColor {
    return {
      slideLabelSource: isSet(object.slideLabelSource)
        ? slide_Element_DataLink_SlideLabelColor_SlideLabelSourceFromJSON(object.slideLabelSource)
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_SlideLabelColor): unknown {
    const obj: any = {};
    message.slideLabelSource !== undefined &&
      (obj.slideLabelSource = slide_Element_DataLink_SlideLabelColor_SlideLabelSourceToJSON(message.slideLabelSource));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_SlideLabelColor>, I>>(
    object: I,
  ): Slide_Element_DataLink_SlideLabelColor {
    const message = createBaseSlide_Element_DataLink_SlideLabelColor();
    message.slideLabelSource = object.slideLabelSource ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_PresentationNotes(): Slide_Element_DataLink_PresentationNotes {
  return {};
}

export const Slide_Element_DataLink_PresentationNotes = {
  encode(_: Slide_Element_DataLink_PresentationNotes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_PresentationNotes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_PresentationNotes();
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

  fromJSON(_: any): Slide_Element_DataLink_PresentationNotes {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_PresentationNotes): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_PresentationNotes>, I>>(
    _: I,
  ): Slide_Element_DataLink_PresentationNotes {
    const message = createBaseSlide_Element_DataLink_PresentationNotes();
    return message;
  },
};

function createBaseSlide_Element_DataLink_Presentation(): Slide_Element_DataLink_Presentation {
  return { presentationSource: 0 };
}

export const Slide_Element_DataLink_Presentation = {
  encode(message: Slide_Element_DataLink_Presentation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.presentationSource !== 0) {
      writer.uint32(8).int32(message.presentationSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_Presentation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_Presentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.presentationSource = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_Presentation {
    return {
      presentationSource: isSet(object.presentationSource)
        ? slide_Element_DataLink_Presentation_PresentationSourceFromJSON(object.presentationSource)
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_Presentation): unknown {
    const obj: any = {};
    message.presentationSource !== undefined &&
      (obj.presentationSource = slide_Element_DataLink_Presentation_PresentationSourceToJSON(
        message.presentationSource,
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_Presentation>, I>>(
    object: I,
  ): Slide_Element_DataLink_Presentation {
    const message = createBaseSlide_Element_DataLink_Presentation();
    message.presentationSource = object.presentationSource ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_PlaylistItem(): Slide_Element_DataLink_PlaylistItem {
  return { playlistItemSource: 0, showArrangement: false };
}

export const Slide_Element_DataLink_PlaylistItem = {
  encode(message: Slide_Element_DataLink_PlaylistItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playlistItemSource !== 0) {
      writer.uint32(8).int32(message.playlistItemSource);
    }
    if (message.showArrangement === true) {
      writer.uint32(16).bool(message.showArrangement);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_PlaylistItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_PlaylistItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playlistItemSource = reader.int32() as any;
          break;
        case 2:
          message.showArrangement = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_PlaylistItem {
    return {
      playlistItemSource: isSet(object.playlistItemSource)
        ? slide_Element_DataLink_PlaylistItem_PlaylistItemSourceTypeFromJSON(object.playlistItemSource)
        : 0,
      showArrangement: isSet(object.showArrangement) ? Boolean(object.showArrangement) : false,
    };
  },

  toJSON(message: Slide_Element_DataLink_PlaylistItem): unknown {
    const obj: any = {};
    message.playlistItemSource !== undefined &&
      (obj.playlistItemSource = slide_Element_DataLink_PlaylistItem_PlaylistItemSourceTypeToJSON(
        message.playlistItemSource,
      ));
    message.showArrangement !== undefined && (obj.showArrangement = message.showArrangement);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_PlaylistItem>, I>>(
    object: I,
  ): Slide_Element_DataLink_PlaylistItem {
    const message = createBaseSlide_Element_DataLink_PlaylistItem();
    message.playlistItemSource = object.playlistItemSource ?? 0;
    message.showArrangement = object.showArrangement ?? false;
    return message;
  },
};

function createBaseSlide_Element_DataLink_AutoAdvanceTimeRemaining(): Slide_Element_DataLink_AutoAdvanceTimeRemaining {
  return { autoAdvanceSource: 0, timerFormat: undefined };
}

export const Slide_Element_DataLink_AutoAdvanceTimeRemaining = {
  encode(
    message: Slide_Element_DataLink_AutoAdvanceTimeRemaining,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.autoAdvanceSource !== 0) {
      writer.uint32(8).int32(message.autoAdvanceSource);
    }
    if (message.timerFormat !== undefined) {
      Timer_Format.encode(message.timerFormat, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_AutoAdvanceTimeRemaining {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_AutoAdvanceTimeRemaining();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.autoAdvanceSource = reader.int32() as any;
          break;
        case 2:
          message.timerFormat = Timer_Format.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_AutoAdvanceTimeRemaining {
    return {
      autoAdvanceSource: isSet(object.autoAdvanceSource)
        ? slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSourceFromJSON(object.autoAdvanceSource)
        : 0,
      timerFormat: isSet(object.timerFormat) ? Timer_Format.fromJSON(object.timerFormat) : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_AutoAdvanceTimeRemaining): unknown {
    const obj: any = {};
    message.autoAdvanceSource !== undefined &&
      (obj.autoAdvanceSource = slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSourceToJSON(
        message.autoAdvanceSource,
      ));
    message.timerFormat !== undefined &&
      (obj.timerFormat = message.timerFormat ? Timer_Format.toJSON(message.timerFormat) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_AutoAdvanceTimeRemaining>, I>>(
    object: I,
  ): Slide_Element_DataLink_AutoAdvanceTimeRemaining {
    const message = createBaseSlide_Element_DataLink_AutoAdvanceTimeRemaining();
    message.autoAdvanceSource = object.autoAdvanceSource ?? 0;
    message.timerFormat = (object.timerFormat !== undefined && object.timerFormat !== null)
      ? Timer_Format.fromPartial(object.timerFormat)
      : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_CaptureStatusText(): Slide_Element_DataLink_CaptureStatusText {
  return { statusText: undefined, elapsedTime: undefined };
}

export const Slide_Element_DataLink_CaptureStatusText = {
  encode(message: Slide_Element_DataLink_CaptureStatusText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusText !== undefined) {
      Slide_Element_DataLink_CaptureStatusText_StatusText.encode(message.statusText, writer.uint32(10).fork()).ldelim();
    }
    if (message.elapsedTime !== undefined) {
      Slide_Element_DataLink_CaptureStatusText_ElapsedTime.encode(message.elapsedTime, writer.uint32(18).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_CaptureStatusText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_CaptureStatusText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statusText = Slide_Element_DataLink_CaptureStatusText_StatusText.decode(reader, reader.uint32());
          break;
        case 2:
          message.elapsedTime = Slide_Element_DataLink_CaptureStatusText_ElapsedTime.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_CaptureStatusText {
    return {
      statusText: isSet(object.statusText)
        ? Slide_Element_DataLink_CaptureStatusText_StatusText.fromJSON(object.statusText)
        : undefined,
      elapsedTime: isSet(object.elapsedTime)
        ? Slide_Element_DataLink_CaptureStatusText_ElapsedTime.fromJSON(object.elapsedTime)
        : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_CaptureStatusText): unknown {
    const obj: any = {};
    message.statusText !== undefined && (obj.statusText = message.statusText
      ? Slide_Element_DataLink_CaptureStatusText_StatusText.toJSON(message.statusText)
      : undefined);
    message.elapsedTime !== undefined && (obj.elapsedTime = message.elapsedTime
      ? Slide_Element_DataLink_CaptureStatusText_ElapsedTime.toJSON(message.elapsedTime)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_CaptureStatusText>, I>>(
    object: I,
  ): Slide_Element_DataLink_CaptureStatusText {
    const message = createBaseSlide_Element_DataLink_CaptureStatusText();
    message.statusText = (object.statusText !== undefined && object.statusText !== null)
      ? Slide_Element_DataLink_CaptureStatusText_StatusText.fromPartial(object.statusText)
      : undefined;
    message.elapsedTime = (object.elapsedTime !== undefined && object.elapsedTime !== null)
      ? Slide_Element_DataLink_CaptureStatusText_ElapsedTime.fromPartial(object.elapsedTime)
      : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_CaptureStatusText_StatusText(): Slide_Element_DataLink_CaptureStatusText_StatusText {
  return {};
}

export const Slide_Element_DataLink_CaptureStatusText_StatusText = {
  encode(_: Slide_Element_DataLink_CaptureStatusText_StatusText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_CaptureStatusText_StatusText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_CaptureStatusText_StatusText();
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

  fromJSON(_: any): Slide_Element_DataLink_CaptureStatusText_StatusText {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_CaptureStatusText_StatusText): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_CaptureStatusText_StatusText>, I>>(
    _: I,
  ): Slide_Element_DataLink_CaptureStatusText_StatusText {
    const message = createBaseSlide_Element_DataLink_CaptureStatusText_StatusText();
    return message;
  },
};

function createBaseSlide_Element_DataLink_CaptureStatusText_ElapsedTime(): Slide_Element_DataLink_CaptureStatusText_ElapsedTime {
  return { timerFormat: undefined };
}

export const Slide_Element_DataLink_CaptureStatusText_ElapsedTime = {
  encode(
    message: Slide_Element_DataLink_CaptureStatusText_ElapsedTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timerFormat !== undefined) {
      Timer_Format.encode(message.timerFormat, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_CaptureStatusText_ElapsedTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_CaptureStatusText_ElapsedTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timerFormat = Timer_Format.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_CaptureStatusText_ElapsedTime {
    return { timerFormat: isSet(object.timerFormat) ? Timer_Format.fromJSON(object.timerFormat) : undefined };
  },

  toJSON(message: Slide_Element_DataLink_CaptureStatusText_ElapsedTime): unknown {
    const obj: any = {};
    message.timerFormat !== undefined &&
      (obj.timerFormat = message.timerFormat ? Timer_Format.toJSON(message.timerFormat) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_CaptureStatusText_ElapsedTime>, I>>(
    object: I,
  ): Slide_Element_DataLink_CaptureStatusText_ElapsedTime {
    const message = createBaseSlide_Element_DataLink_CaptureStatusText_ElapsedTime();
    message.timerFormat = (object.timerFormat !== undefined && object.timerFormat !== null)
      ? Timer_Format.fromPartial(object.timerFormat)
      : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_CaptureStatusColor(): Slide_Element_DataLink_CaptureStatusColor {
  return {};
}

export const Slide_Element_DataLink_CaptureStatusColor = {
  encode(_: Slide_Element_DataLink_CaptureStatusColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_CaptureStatusColor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_CaptureStatusColor();
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

  fromJSON(_: any): Slide_Element_DataLink_CaptureStatusColor {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_CaptureStatusColor): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_CaptureStatusColor>, I>>(
    _: I,
  ): Slide_Element_DataLink_CaptureStatusColor {
    const message = createBaseSlide_Element_DataLink_CaptureStatusColor();
    return message;
  },
};

function createBaseSlide_Element_DataLink_SlideCount(): Slide_Element_DataLink_SlideCount {
  return { slideCountSourceType: 0 };
}

export const Slide_Element_DataLink_SlideCount = {
  encode(message: Slide_Element_DataLink_SlideCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slideCountSourceType !== 0) {
      writer.uint32(8).int32(message.slideCountSourceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_SlideCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_SlideCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slideCountSourceType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_SlideCount {
    return {
      slideCountSourceType: isSet(object.slideCountSourceType)
        ? slide_Element_DataLink_SlideCount_SlideCountSourceTypeFromJSON(object.slideCountSourceType)
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_SlideCount): unknown {
    const obj: any = {};
    message.slideCountSourceType !== undefined &&
      (obj.slideCountSourceType = slide_Element_DataLink_SlideCount_SlideCountSourceTypeToJSON(
        message.slideCountSourceType,
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_SlideCount>, I>>(
    object: I,
  ): Slide_Element_DataLink_SlideCount {
    const message = createBaseSlide_Element_DataLink_SlideCount();
    message.slideCountSourceType = object.slideCountSourceType ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_ChordProChart(): Slide_Element_DataLink_ChordProChart {
  return {};
}

export const Slide_Element_DataLink_ChordProChart = {
  encode(_: Slide_Element_DataLink_ChordProChart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_DataLink_ChordProChart {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_ChordProChart();
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

  fromJSON(_: any): Slide_Element_DataLink_ChordProChart {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_ChordProChart): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_ChordProChart>, I>>(
    _: I,
  ): Slide_Element_DataLink_ChordProChart {
    const message = createBaseSlide_Element_DataLink_ChordProChart();
    return message;
  },
};

function createBaseSlide_Element_TextScroller(): Slide_Element_TextScroller {
  return {
    shouldScroll: false,
    scrollRate: 0,
    shouldRepeat: false,
    repeatDistance: 0,
    scrollingDirection: 0,
    startsOffScreen: false,
    fadeLeft: 0,
    fadeRight: 0,
  };
}

export const Slide_Element_TextScroller = {
  encode(message: Slide_Element_TextScroller, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shouldScroll === true) {
      writer.uint32(8).bool(message.shouldScroll);
    }
    if (message.scrollRate !== 0) {
      writer.uint32(17).double(message.scrollRate);
    }
    if (message.shouldRepeat === true) {
      writer.uint32(24).bool(message.shouldRepeat);
    }
    if (message.repeatDistance !== 0) {
      writer.uint32(33).double(message.repeatDistance);
    }
    if (message.scrollingDirection !== 0) {
      writer.uint32(40).int32(message.scrollingDirection);
    }
    if (message.startsOffScreen === true) {
      writer.uint32(48).bool(message.startsOffScreen);
    }
    if (message.fadeLeft !== 0) {
      writer.uint32(57).double(message.fadeLeft);
    }
    if (message.fadeRight !== 0) {
      writer.uint32(65).double(message.fadeRight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_TextScroller {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_TextScroller();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shouldScroll = reader.bool();
          break;
        case 2:
          message.scrollRate = reader.double();
          break;
        case 3:
          message.shouldRepeat = reader.bool();
          break;
        case 4:
          message.repeatDistance = reader.double();
          break;
        case 5:
          message.scrollingDirection = reader.int32() as any;
          break;
        case 6:
          message.startsOffScreen = reader.bool();
          break;
        case 7:
          message.fadeLeft = reader.double();
          break;
        case 8:
          message.fadeRight = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_TextScroller {
    return {
      shouldScroll: isSet(object.shouldScroll) ? Boolean(object.shouldScroll) : false,
      scrollRate: isSet(object.scrollRate) ? Number(object.scrollRate) : 0,
      shouldRepeat: isSet(object.shouldRepeat) ? Boolean(object.shouldRepeat) : false,
      repeatDistance: isSet(object.repeatDistance) ? Number(object.repeatDistance) : 0,
      scrollingDirection: isSet(object.scrollingDirection)
        ? slide_Element_TextScroller_DirectionFromJSON(object.scrollingDirection)
        : 0,
      startsOffScreen: isSet(object.startsOffScreen) ? Boolean(object.startsOffScreen) : false,
      fadeLeft: isSet(object.fadeLeft) ? Number(object.fadeLeft) : 0,
      fadeRight: isSet(object.fadeRight) ? Number(object.fadeRight) : 0,
    };
  },

  toJSON(message: Slide_Element_TextScroller): unknown {
    const obj: any = {};
    message.shouldScroll !== undefined && (obj.shouldScroll = message.shouldScroll);
    message.scrollRate !== undefined && (obj.scrollRate = message.scrollRate);
    message.shouldRepeat !== undefined && (obj.shouldRepeat = message.shouldRepeat);
    message.repeatDistance !== undefined && (obj.repeatDistance = message.repeatDistance);
    message.scrollingDirection !== undefined &&
      (obj.scrollingDirection = slide_Element_TextScroller_DirectionToJSON(message.scrollingDirection));
    message.startsOffScreen !== undefined && (obj.startsOffScreen = message.startsOffScreen);
    message.fadeLeft !== undefined && (obj.fadeLeft = message.fadeLeft);
    message.fadeRight !== undefined && (obj.fadeRight = message.fadeRight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Slide_Element_TextScroller>, I>>(object: I): Slide_Element_TextScroller {
    const message = createBaseSlide_Element_TextScroller();
    message.shouldScroll = object.shouldScroll ?? false;
    message.scrollRate = object.scrollRate ?? 0;
    message.shouldRepeat = object.shouldRepeat ?? false;
    message.repeatDistance = object.repeatDistance ?? 0;
    message.scrollingDirection = object.scrollingDirection ?? 0;
    message.startsOffScreen = object.startsOffScreen ?? false;
    message.fadeLeft = object.fadeLeft ?? 0;
    message.fadeRight = object.fadeRight ?? 0;
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
