/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Action } from "./action";
import { Background } from "./background";
import { ApplicationInfo, IntRange, MusicKeyScale, URL, UUID } from "./basicTypes";
import { Cue } from "./cue";
import { Transition } from "./effects";
import { Group } from "./groups";
import { Timestamp } from "./timestamp";

export const protobufPackage = "rv.data";

export interface Presentation {
  applicationInfo: ApplicationInfo | undefined;
  uuid: UUID | undefined;
  name: string;
  lastDateUsed: Timestamp | undefined;
  lastModifiedDate: Timestamp | undefined;
  category: string;
  notes: string;
  background: Background | undefined;
  chordChart: URL | undefined;
  selectedArrangement: UUID | undefined;
  arrangements: Presentation_Arrangement[];
  cueGroups: Presentation_CueGroup[];
  cues: Cue[];
  ccli: Presentation_CCLI | undefined;
  bibleReference: Presentation_BibleReference | undefined;
  socialMedia: Presentation_SocialMedia | undefined;
  timeline: Presentation_Timeline | undefined;
  transition: Transition | undefined;
  contentDestination: Presentation_ContentDestination;
  multiTracksLicensing: Presentation_MultiTracksLicensing | undefined;
  musicKey: string;
  music: Presentation_Music | undefined;
  slideShowDuration?: number | undefined;
}

export enum Presentation_ContentDestination {
  CONTENT_DESTINATION_GLOBAL = 0,
  CONTENT_DESTINATION_ANNOUNCEMENTS = 1,
  UNRECOGNIZED = -1,
}

export function presentation_ContentDestinationFromJSON(object: any): Presentation_ContentDestination {
  switch (object) {
    case 0:
    case "CONTENT_DESTINATION_GLOBAL":
      return Presentation_ContentDestination.CONTENT_DESTINATION_GLOBAL;
    case 1:
    case "CONTENT_DESTINATION_ANNOUNCEMENTS":
      return Presentation_ContentDestination.CONTENT_DESTINATION_ANNOUNCEMENTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Presentation_ContentDestination.UNRECOGNIZED;
  }
}

export function presentation_ContentDestinationToJSON(object: Presentation_ContentDestination): string {
  switch (object) {
    case Presentation_ContentDestination.CONTENT_DESTINATION_GLOBAL:
      return "CONTENT_DESTINATION_GLOBAL";
    case Presentation_ContentDestination.CONTENT_DESTINATION_ANNOUNCEMENTS:
      return "CONTENT_DESTINATION_ANNOUNCEMENTS";
    case Presentation_ContentDestination.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Presentation_CCLI {
  author: string;
  artistCredits: string;
  songTitle: string;
  publisher: string;
  copyrightYear: number;
  songNumber: number;
  display: boolean;
  album: string;
  artwork: Uint8Array;
}

export interface Presentation_BibleReference {
  bookIndex: number;
  bookName: string;
  chapterRange: IntRange | undefined;
  verseRange: IntRange | undefined;
  translationName: string;
  translationDisplayAbbreviation: string;
  translationInternalAbbreviation: string;
  bookKey: string;
}

export interface Presentation_SocialMedia {
  term: string;
  time: Timestamp | undefined;
}

export interface Presentation_Timeline {
  cues: Presentation_Timeline_Cue[];
  duration: number;
  loop: boolean;
  audioAction: Action | undefined;
  timecodeEnable: boolean;
  timecodeOffset: number;
}

export interface Presentation_Timeline_Cue {
  triggerTime: number;
  name: string;
  cueId?: UUID | undefined;
  mediaAction?: Action | undefined;
}

export interface Presentation_Arrangement {
  uuid: UUID | undefined;
  name: string;
  groupIdentifiers: UUID[];
}

export interface Presentation_CueGroup {
  group: Group | undefined;
  cueIdentifiers: UUID[];
}

export interface Presentation_MultiTracksLicensing {
  songIdentifier: number;
  customerIdentifier: string;
  expirationDate: Timestamp | undefined;
  licenseExpiration: Timestamp | undefined;
  subscription: Presentation_MultiTracksLicensing_Subscription;
}

export enum Presentation_MultiTracksLicensing_Subscription {
  SUBSCRIPTION_CHART_PRO = 0,
  SUBSCRIPTION_SLIDE_PRO = 1,
  UNRECOGNIZED = -1,
}

export function presentation_MultiTracksLicensing_SubscriptionFromJSON(
  object: any,
): Presentation_MultiTracksLicensing_Subscription {
  switch (object) {
    case 0:
    case "SUBSCRIPTION_CHART_PRO":
      return Presentation_MultiTracksLicensing_Subscription.SUBSCRIPTION_CHART_PRO;
    case 1:
    case "SUBSCRIPTION_SLIDE_PRO":
      return Presentation_MultiTracksLicensing_Subscription.SUBSCRIPTION_SLIDE_PRO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Presentation_MultiTracksLicensing_Subscription.UNRECOGNIZED;
  }
}

export function presentation_MultiTracksLicensing_SubscriptionToJSON(
  object: Presentation_MultiTracksLicensing_Subscription,
): string {
  switch (object) {
    case Presentation_MultiTracksLicensing_Subscription.SUBSCRIPTION_CHART_PRO:
      return "SUBSCRIPTION_CHART_PRO";
    case Presentation_MultiTracksLicensing_Subscription.SUBSCRIPTION_SLIDE_PRO:
      return "SUBSCRIPTION_SLIDE_PRO";
    case Presentation_MultiTracksLicensing_Subscription.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Presentation_Music {
  originalMusicKey: string;
  userMusicKey: string;
  original: MusicKeyScale | undefined;
  user: MusicKeyScale | undefined;
}

function createBasePresentation(): Presentation {
  return {
    applicationInfo: undefined,
    uuid: undefined,
    name: "",
    lastDateUsed: undefined,
    lastModifiedDate: undefined,
    category: "",
    notes: "",
    background: undefined,
    chordChart: undefined,
    selectedArrangement: undefined,
    arrangements: [],
    cueGroups: [],
    cues: [],
    ccli: undefined,
    bibleReference: undefined,
    socialMedia: undefined,
    timeline: undefined,
    transition: undefined,
    contentDestination: 0,
    multiTracksLicensing: undefined,
    musicKey: "",
    music: undefined,
    slideShowDuration: undefined,
  };
}

export const Presentation = {
  encode(message: Presentation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(message.applicationInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.lastDateUsed !== undefined) {
      Timestamp.encode(message.lastDateUsed, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastModifiedDate !== undefined) {
      Timestamp.encode(message.lastModifiedDate, writer.uint32(42).fork()).ldelim();
    }
    if (message.category !== "") {
      writer.uint32(50).string(message.category);
    }
    if (message.notes !== "") {
      writer.uint32(58).string(message.notes);
    }
    if (message.background !== undefined) {
      Background.encode(message.background, writer.uint32(66).fork()).ldelim();
    }
    if (message.chordChart !== undefined) {
      URL.encode(message.chordChart, writer.uint32(74).fork()).ldelim();
    }
    if (message.selectedArrangement !== undefined) {
      UUID.encode(message.selectedArrangement, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.arrangements) {
      Presentation_Arrangement.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.cueGroups) {
      Presentation_CueGroup.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.cues) {
      Cue.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.ccli !== undefined) {
      Presentation_CCLI.encode(message.ccli, writer.uint32(114).fork()).ldelim();
    }
    if (message.bibleReference !== undefined) {
      Presentation_BibleReference.encode(message.bibleReference, writer.uint32(122).fork()).ldelim();
    }
    if (message.socialMedia !== undefined) {
      Presentation_SocialMedia.encode(message.socialMedia, writer.uint32(130).fork()).ldelim();
    }
    if (message.timeline !== undefined) {
      Presentation_Timeline.encode(message.timeline, writer.uint32(138).fork()).ldelim();
    }
    if (message.transition !== undefined) {
      Transition.encode(message.transition, writer.uint32(146).fork()).ldelim();
    }
    if (message.contentDestination !== 0) {
      writer.uint32(152).int32(message.contentDestination);
    }
    if (message.multiTracksLicensing !== undefined) {
      Presentation_MultiTracksLicensing.encode(message.multiTracksLicensing, writer.uint32(170).fork()).ldelim();
    }
    if (message.musicKey !== "") {
      writer.uint32(178).string(message.musicKey);
    }
    if (message.music !== undefined) {
      Presentation_Music.encode(message.music, writer.uint32(186).fork()).ldelim();
    }
    if (message.slideShowDuration !== undefined) {
      writer.uint32(161).double(message.slideShowDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.applicationInfo = ApplicationInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.uuid = UUID.decode(reader, reader.uint32());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.lastDateUsed = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.lastModifiedDate = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.category = reader.string();
          break;
        case 7:
          message.notes = reader.string();
          break;
        case 8:
          message.background = Background.decode(reader, reader.uint32());
          break;
        case 9:
          message.chordChart = URL.decode(reader, reader.uint32());
          break;
        case 10:
          message.selectedArrangement = UUID.decode(reader, reader.uint32());
          break;
        case 11:
          message.arrangements.push(Presentation_Arrangement.decode(reader, reader.uint32()));
          break;
        case 12:
          message.cueGroups.push(Presentation_CueGroup.decode(reader, reader.uint32()));
          break;
        case 13:
          message.cues.push(Cue.decode(reader, reader.uint32()));
          break;
        case 14:
          message.ccli = Presentation_CCLI.decode(reader, reader.uint32());
          break;
        case 15:
          message.bibleReference = Presentation_BibleReference.decode(reader, reader.uint32());
          break;
        case 16:
          message.socialMedia = Presentation_SocialMedia.decode(reader, reader.uint32());
          break;
        case 17:
          message.timeline = Presentation_Timeline.decode(reader, reader.uint32());
          break;
        case 18:
          message.transition = Transition.decode(reader, reader.uint32());
          break;
        case 19:
          message.contentDestination = reader.int32() as any;
          break;
        case 21:
          message.multiTracksLicensing = Presentation_MultiTracksLicensing.decode(reader, reader.uint32());
          break;
        case 22:
          message.musicKey = reader.string();
          break;
        case 23:
          message.music = Presentation_Music.decode(reader, reader.uint32());
          break;
        case 20:
          message.slideShowDuration = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Presentation {
    return {
      applicationInfo: isSet(object.applicationInfo) ? ApplicationInfo.fromJSON(object.applicationInfo) : undefined,
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      lastDateUsed: isSet(object.lastDateUsed) ? Timestamp.fromJSON(object.lastDateUsed) : undefined,
      lastModifiedDate: isSet(object.lastModifiedDate) ? Timestamp.fromJSON(object.lastModifiedDate) : undefined,
      category: isSet(object.category) ? String(object.category) : "",
      notes: isSet(object.notes) ? String(object.notes) : "",
      background: isSet(object.background) ? Background.fromJSON(object.background) : undefined,
      chordChart: isSet(object.chordChart) ? URL.fromJSON(object.chordChart) : undefined,
      selectedArrangement: isSet(object.selectedArrangement) ? UUID.fromJSON(object.selectedArrangement) : undefined,
      arrangements: Array.isArray(object?.arrangements)
        ? object.arrangements.map((e: any) => Presentation_Arrangement.fromJSON(e))
        : [],
      cueGroups: Array.isArray(object?.cueGroups)
        ? object.cueGroups.map((e: any) => Presentation_CueGroup.fromJSON(e))
        : [],
      cues: Array.isArray(object?.cues) ? object.cues.map((e: any) => Cue.fromJSON(e)) : [],
      ccli: isSet(object.ccli) ? Presentation_CCLI.fromJSON(object.ccli) : undefined,
      bibleReference: isSet(object.bibleReference)
        ? Presentation_BibleReference.fromJSON(object.bibleReference)
        : undefined,
      socialMedia: isSet(object.socialMedia) ? Presentation_SocialMedia.fromJSON(object.socialMedia) : undefined,
      timeline: isSet(object.timeline) ? Presentation_Timeline.fromJSON(object.timeline) : undefined,
      transition: isSet(object.transition) ? Transition.fromJSON(object.transition) : undefined,
      contentDestination: isSet(object.contentDestination)
        ? presentation_ContentDestinationFromJSON(object.contentDestination)
        : 0,
      multiTracksLicensing: isSet(object.multiTracksLicensing)
        ? Presentation_MultiTracksLicensing.fromJSON(object.multiTracksLicensing)
        : undefined,
      musicKey: isSet(object.musicKey) ? String(object.musicKey) : "",
      music: isSet(object.music) ? Presentation_Music.fromJSON(object.music) : undefined,
      slideShowDuration: isSet(object.slideShowDuration) ? Number(object.slideShowDuration) : undefined,
    };
  },

  toJSON(message: Presentation): unknown {
    const obj: any = {};
    message.applicationInfo !== undefined &&
      (obj.applicationInfo = message.applicationInfo ? ApplicationInfo.toJSON(message.applicationInfo) : undefined);
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.lastDateUsed !== undefined &&
      (obj.lastDateUsed = message.lastDateUsed ? Timestamp.toJSON(message.lastDateUsed) : undefined);
    message.lastModifiedDate !== undefined &&
      (obj.lastModifiedDate = message.lastModifiedDate ? Timestamp.toJSON(message.lastModifiedDate) : undefined);
    message.category !== undefined && (obj.category = message.category);
    message.notes !== undefined && (obj.notes = message.notes);
    message.background !== undefined &&
      (obj.background = message.background ? Background.toJSON(message.background) : undefined);
    message.chordChart !== undefined &&
      (obj.chordChart = message.chordChart ? URL.toJSON(message.chordChart) : undefined);
    message.selectedArrangement !== undefined &&
      (obj.selectedArrangement = message.selectedArrangement ? UUID.toJSON(message.selectedArrangement) : undefined);
    if (message.arrangements) {
      obj.arrangements = message.arrangements.map((e) => e ? Presentation_Arrangement.toJSON(e) : undefined);
    } else {
      obj.arrangements = [];
    }
    if (message.cueGroups) {
      obj.cueGroups = message.cueGroups.map((e) => e ? Presentation_CueGroup.toJSON(e) : undefined);
    } else {
      obj.cueGroups = [];
    }
    if (message.cues) {
      obj.cues = message.cues.map((e) => e ? Cue.toJSON(e) : undefined);
    } else {
      obj.cues = [];
    }
    message.ccli !== undefined && (obj.ccli = message.ccli ? Presentation_CCLI.toJSON(message.ccli) : undefined);
    message.bibleReference !== undefined && (obj.bibleReference = message.bibleReference
      ? Presentation_BibleReference.toJSON(message.bibleReference)
      : undefined);
    message.socialMedia !== undefined &&
      (obj.socialMedia = message.socialMedia ? Presentation_SocialMedia.toJSON(message.socialMedia) : undefined);
    message.timeline !== undefined &&
      (obj.timeline = message.timeline ? Presentation_Timeline.toJSON(message.timeline) : undefined);
    message.transition !== undefined &&
      (obj.transition = message.transition ? Transition.toJSON(message.transition) : undefined);
    message.contentDestination !== undefined &&
      (obj.contentDestination = presentation_ContentDestinationToJSON(message.contentDestination));
    message.multiTracksLicensing !== undefined && (obj.multiTracksLicensing = message.multiTracksLicensing
      ? Presentation_MultiTracksLicensing.toJSON(message.multiTracksLicensing)
      : undefined);
    message.musicKey !== undefined && (obj.musicKey = message.musicKey);
    message.music !== undefined && (obj.music = message.music ? Presentation_Music.toJSON(message.music) : undefined);
    message.slideShowDuration !== undefined && (obj.slideShowDuration = message.slideShowDuration);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Presentation>, I>>(object: I): Presentation {
    const message = createBasePresentation();
    message.applicationInfo = (object.applicationInfo !== undefined && object.applicationInfo !== null)
      ? ApplicationInfo.fromPartial(object.applicationInfo)
      : undefined;
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    message.lastDateUsed = (object.lastDateUsed !== undefined && object.lastDateUsed !== null)
      ? Timestamp.fromPartial(object.lastDateUsed)
      : undefined;
    message.lastModifiedDate = (object.lastModifiedDate !== undefined && object.lastModifiedDate !== null)
      ? Timestamp.fromPartial(object.lastModifiedDate)
      : undefined;
    message.category = object.category ?? "";
    message.notes = object.notes ?? "";
    message.background = (object.background !== undefined && object.background !== null)
      ? Background.fromPartial(object.background)
      : undefined;
    message.chordChart = (object.chordChart !== undefined && object.chordChart !== null)
      ? URL.fromPartial(object.chordChart)
      : undefined;
    message.selectedArrangement = (object.selectedArrangement !== undefined && object.selectedArrangement !== null)
      ? UUID.fromPartial(object.selectedArrangement)
      : undefined;
    message.arrangements = object.arrangements?.map((e) => Presentation_Arrangement.fromPartial(e)) || [];
    message.cueGroups = object.cueGroups?.map((e) => Presentation_CueGroup.fromPartial(e)) || [];
    message.cues = object.cues?.map((e) => Cue.fromPartial(e)) || [];
    message.ccli = (object.ccli !== undefined && object.ccli !== null)
      ? Presentation_CCLI.fromPartial(object.ccli)
      : undefined;
    message.bibleReference = (object.bibleReference !== undefined && object.bibleReference !== null)
      ? Presentation_BibleReference.fromPartial(object.bibleReference)
      : undefined;
    message.socialMedia = (object.socialMedia !== undefined && object.socialMedia !== null)
      ? Presentation_SocialMedia.fromPartial(object.socialMedia)
      : undefined;
    message.timeline = (object.timeline !== undefined && object.timeline !== null)
      ? Presentation_Timeline.fromPartial(object.timeline)
      : undefined;
    message.transition = (object.transition !== undefined && object.transition !== null)
      ? Transition.fromPartial(object.transition)
      : undefined;
    message.contentDestination = object.contentDestination ?? 0;
    message.multiTracksLicensing = (object.multiTracksLicensing !== undefined && object.multiTracksLicensing !== null)
      ? Presentation_MultiTracksLicensing.fromPartial(object.multiTracksLicensing)
      : undefined;
    message.musicKey = object.musicKey ?? "";
    message.music = (object.music !== undefined && object.music !== null)
      ? Presentation_Music.fromPartial(object.music)
      : undefined;
    message.slideShowDuration = object.slideShowDuration ?? undefined;
    return message;
  },
};

function createBasePresentation_CCLI(): Presentation_CCLI {
  return {
    author: "",
    artistCredits: "",
    songTitle: "",
    publisher: "",
    copyrightYear: 0,
    songNumber: 0,
    display: false,
    album: "",
    artwork: new Uint8Array(),
  };
}

export const Presentation_CCLI = {
  encode(message: Presentation_CCLI, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.author !== "") {
      writer.uint32(10).string(message.author);
    }
    if (message.artistCredits !== "") {
      writer.uint32(18).string(message.artistCredits);
    }
    if (message.songTitle !== "") {
      writer.uint32(26).string(message.songTitle);
    }
    if (message.publisher !== "") {
      writer.uint32(34).string(message.publisher);
    }
    if (message.copyrightYear !== 0) {
      writer.uint32(40).uint32(message.copyrightYear);
    }
    if (message.songNumber !== 0) {
      writer.uint32(48).uint32(message.songNumber);
    }
    if (message.display === true) {
      writer.uint32(56).bool(message.display);
    }
    if (message.album !== "") {
      writer.uint32(66).string(message.album);
    }
    if (message.artwork.length !== 0) {
      writer.uint32(74).bytes(message.artwork);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation_CCLI {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_CCLI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.author = reader.string();
          break;
        case 2:
          message.artistCredits = reader.string();
          break;
        case 3:
          message.songTitle = reader.string();
          break;
        case 4:
          message.publisher = reader.string();
          break;
        case 5:
          message.copyrightYear = reader.uint32();
          break;
        case 6:
          message.songNumber = reader.uint32();
          break;
        case 7:
          message.display = reader.bool();
          break;
        case 8:
          message.album = reader.string();
          break;
        case 9:
          message.artwork = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Presentation_CCLI {
    return {
      author: isSet(object.author) ? String(object.author) : "",
      artistCredits: isSet(object.artistCredits) ? String(object.artistCredits) : "",
      songTitle: isSet(object.songTitle) ? String(object.songTitle) : "",
      publisher: isSet(object.publisher) ? String(object.publisher) : "",
      copyrightYear: isSet(object.copyrightYear) ? Number(object.copyrightYear) : 0,
      songNumber: isSet(object.songNumber) ? Number(object.songNumber) : 0,
      display: isSet(object.display) ? Boolean(object.display) : false,
      album: isSet(object.album) ? String(object.album) : "",
      artwork: isSet(object.artwork) ? bytesFromBase64(object.artwork) : new Uint8Array(),
    };
  },

  toJSON(message: Presentation_CCLI): unknown {
    const obj: any = {};
    message.author !== undefined && (obj.author = message.author);
    message.artistCredits !== undefined && (obj.artistCredits = message.artistCredits);
    message.songTitle !== undefined && (obj.songTitle = message.songTitle);
    message.publisher !== undefined && (obj.publisher = message.publisher);
    message.copyrightYear !== undefined && (obj.copyrightYear = Math.round(message.copyrightYear));
    message.songNumber !== undefined && (obj.songNumber = Math.round(message.songNumber));
    message.display !== undefined && (obj.display = message.display);
    message.album !== undefined && (obj.album = message.album);
    message.artwork !== undefined &&
      (obj.artwork = base64FromBytes(message.artwork !== undefined ? message.artwork : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Presentation_CCLI>, I>>(object: I): Presentation_CCLI {
    const message = createBasePresentation_CCLI();
    message.author = object.author ?? "";
    message.artistCredits = object.artistCredits ?? "";
    message.songTitle = object.songTitle ?? "";
    message.publisher = object.publisher ?? "";
    message.copyrightYear = object.copyrightYear ?? 0;
    message.songNumber = object.songNumber ?? 0;
    message.display = object.display ?? false;
    message.album = object.album ?? "";
    message.artwork = object.artwork ?? new Uint8Array();
    return message;
  },
};

function createBasePresentation_BibleReference(): Presentation_BibleReference {
  return {
    bookIndex: 0,
    bookName: "",
    chapterRange: undefined,
    verseRange: undefined,
    translationName: "",
    translationDisplayAbbreviation: "",
    translationInternalAbbreviation: "",
    bookKey: "",
  };
}

export const Presentation_BibleReference = {
  encode(message: Presentation_BibleReference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bookIndex !== 0) {
      writer.uint32(8).uint32(message.bookIndex);
    }
    if (message.bookName !== "") {
      writer.uint32(18).string(message.bookName);
    }
    if (message.chapterRange !== undefined) {
      IntRange.encode(message.chapterRange, writer.uint32(26).fork()).ldelim();
    }
    if (message.verseRange !== undefined) {
      IntRange.encode(message.verseRange, writer.uint32(34).fork()).ldelim();
    }
    if (message.translationName !== "") {
      writer.uint32(42).string(message.translationName);
    }
    if (message.translationDisplayAbbreviation !== "") {
      writer.uint32(50).string(message.translationDisplayAbbreviation);
    }
    if (message.translationInternalAbbreviation !== "") {
      writer.uint32(58).string(message.translationInternalAbbreviation);
    }
    if (message.bookKey !== "") {
      writer.uint32(66).string(message.bookKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation_BibleReference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_BibleReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bookIndex = reader.uint32();
          break;
        case 2:
          message.bookName = reader.string();
          break;
        case 3:
          message.chapterRange = IntRange.decode(reader, reader.uint32());
          break;
        case 4:
          message.verseRange = IntRange.decode(reader, reader.uint32());
          break;
        case 5:
          message.translationName = reader.string();
          break;
        case 6:
          message.translationDisplayAbbreviation = reader.string();
          break;
        case 7:
          message.translationInternalAbbreviation = reader.string();
          break;
        case 8:
          message.bookKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Presentation_BibleReference {
    return {
      bookIndex: isSet(object.bookIndex) ? Number(object.bookIndex) : 0,
      bookName: isSet(object.bookName) ? String(object.bookName) : "",
      chapterRange: isSet(object.chapterRange) ? IntRange.fromJSON(object.chapterRange) : undefined,
      verseRange: isSet(object.verseRange) ? IntRange.fromJSON(object.verseRange) : undefined,
      translationName: isSet(object.translationName) ? String(object.translationName) : "",
      translationDisplayAbbreviation: isSet(object.translationDisplayAbbreviation)
        ? String(object.translationDisplayAbbreviation)
        : "",
      translationInternalAbbreviation: isSet(object.translationInternalAbbreviation)
        ? String(object.translationInternalAbbreviation)
        : "",
      bookKey: isSet(object.bookKey) ? String(object.bookKey) : "",
    };
  },

  toJSON(message: Presentation_BibleReference): unknown {
    const obj: any = {};
    message.bookIndex !== undefined && (obj.bookIndex = Math.round(message.bookIndex));
    message.bookName !== undefined && (obj.bookName = message.bookName);
    message.chapterRange !== undefined &&
      (obj.chapterRange = message.chapterRange ? IntRange.toJSON(message.chapterRange) : undefined);
    message.verseRange !== undefined &&
      (obj.verseRange = message.verseRange ? IntRange.toJSON(message.verseRange) : undefined);
    message.translationName !== undefined && (obj.translationName = message.translationName);
    message.translationDisplayAbbreviation !== undefined &&
      (obj.translationDisplayAbbreviation = message.translationDisplayAbbreviation);
    message.translationInternalAbbreviation !== undefined &&
      (obj.translationInternalAbbreviation = message.translationInternalAbbreviation);
    message.bookKey !== undefined && (obj.bookKey = message.bookKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Presentation_BibleReference>, I>>(object: I): Presentation_BibleReference {
    const message = createBasePresentation_BibleReference();
    message.bookIndex = object.bookIndex ?? 0;
    message.bookName = object.bookName ?? "";
    message.chapterRange = (object.chapterRange !== undefined && object.chapterRange !== null)
      ? IntRange.fromPartial(object.chapterRange)
      : undefined;
    message.verseRange = (object.verseRange !== undefined && object.verseRange !== null)
      ? IntRange.fromPartial(object.verseRange)
      : undefined;
    message.translationName = object.translationName ?? "";
    message.translationDisplayAbbreviation = object.translationDisplayAbbreviation ?? "";
    message.translationInternalAbbreviation = object.translationInternalAbbreviation ?? "";
    message.bookKey = object.bookKey ?? "";
    return message;
  },
};

function createBasePresentation_SocialMedia(): Presentation_SocialMedia {
  return { term: "", time: undefined };
}

export const Presentation_SocialMedia = {
  encode(message: Presentation_SocialMedia, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.term !== "") {
      writer.uint32(10).string(message.term);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation_SocialMedia {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_SocialMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.term = reader.string();
          break;
        case 2:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Presentation_SocialMedia {
    return {
      term: isSet(object.term) ? String(object.term) : "",
      time: isSet(object.time) ? Timestamp.fromJSON(object.time) : undefined,
    };
  },

  toJSON(message: Presentation_SocialMedia): unknown {
    const obj: any = {};
    message.term !== undefined && (obj.term = message.term);
    message.time !== undefined && (obj.time = message.time ? Timestamp.toJSON(message.time) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Presentation_SocialMedia>, I>>(object: I): Presentation_SocialMedia {
    const message = createBasePresentation_SocialMedia();
    message.term = object.term ?? "";
    message.time = (object.time !== undefined && object.time !== null) ? Timestamp.fromPartial(object.time) : undefined;
    return message;
  },
};

function createBasePresentation_Timeline(): Presentation_Timeline {
  return { cues: [], duration: 0, loop: false, audioAction: undefined, timecodeEnable: false, timecodeOffset: 0 };
}

export const Presentation_Timeline = {
  encode(message: Presentation_Timeline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cues) {
      Presentation_Timeline_Cue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.duration !== 0) {
      writer.uint32(41).double(message.duration);
    }
    if (message.loop === true) {
      writer.uint32(48).bool(message.loop);
    }
    if (message.audioAction !== undefined) {
      Action.encode(message.audioAction, writer.uint32(66).fork()).ldelim();
    }
    if (message.timecodeEnable === true) {
      writer.uint32(72).bool(message.timecodeEnable);
    }
    if (message.timecodeOffset !== 0) {
      writer.uint32(81).double(message.timecodeOffset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation_Timeline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_Timeline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cues.push(Presentation_Timeline_Cue.decode(reader, reader.uint32()));
          break;
        case 5:
          message.duration = reader.double();
          break;
        case 6:
          message.loop = reader.bool();
          break;
        case 8:
          message.audioAction = Action.decode(reader, reader.uint32());
          break;
        case 9:
          message.timecodeEnable = reader.bool();
          break;
        case 10:
          message.timecodeOffset = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Presentation_Timeline {
    return {
      cues: Array.isArray(object?.cues) ? object.cues.map((e: any) => Presentation_Timeline_Cue.fromJSON(e)) : [],
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      loop: isSet(object.loop) ? Boolean(object.loop) : false,
      audioAction: isSet(object.audioAction) ? Action.fromJSON(object.audioAction) : undefined,
      timecodeEnable: isSet(object.timecodeEnable) ? Boolean(object.timecodeEnable) : false,
      timecodeOffset: isSet(object.timecodeOffset) ? Number(object.timecodeOffset) : 0,
    };
  },

  toJSON(message: Presentation_Timeline): unknown {
    const obj: any = {};
    if (message.cues) {
      obj.cues = message.cues.map((e) => e ? Presentation_Timeline_Cue.toJSON(e) : undefined);
    } else {
      obj.cues = [];
    }
    message.duration !== undefined && (obj.duration = message.duration);
    message.loop !== undefined && (obj.loop = message.loop);
    message.audioAction !== undefined &&
      (obj.audioAction = message.audioAction ? Action.toJSON(message.audioAction) : undefined);
    message.timecodeEnable !== undefined && (obj.timecodeEnable = message.timecodeEnable);
    message.timecodeOffset !== undefined && (obj.timecodeOffset = message.timecodeOffset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Presentation_Timeline>, I>>(object: I): Presentation_Timeline {
    const message = createBasePresentation_Timeline();
    message.cues = object.cues?.map((e) => Presentation_Timeline_Cue.fromPartial(e)) || [];
    message.duration = object.duration ?? 0;
    message.loop = object.loop ?? false;
    message.audioAction = (object.audioAction !== undefined && object.audioAction !== null)
      ? Action.fromPartial(object.audioAction)
      : undefined;
    message.timecodeEnable = object.timecodeEnable ?? false;
    message.timecodeOffset = object.timecodeOffset ?? 0;
    return message;
  },
};

function createBasePresentation_Timeline_Cue(): Presentation_Timeline_Cue {
  return { triggerTime: 0, name: "", cueId: undefined, mediaAction: undefined };
}

export const Presentation_Timeline_Cue = {
  encode(message: Presentation_Timeline_Cue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerTime !== 0) {
      writer.uint32(9).double(message.triggerTime);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.cueId !== undefined) {
      UUID.encode(message.cueId, writer.uint32(18).fork()).ldelim();
    }
    if (message.mediaAction !== undefined) {
      Action.encode(message.mediaAction, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation_Timeline_Cue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_Timeline_Cue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerTime = reader.double();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 2:
          message.cueId = UUID.decode(reader, reader.uint32());
          break;
        case 4:
          message.mediaAction = Action.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Presentation_Timeline_Cue {
    return {
      triggerTime: isSet(object.triggerTime) ? Number(object.triggerTime) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      cueId: isSet(object.cueId) ? UUID.fromJSON(object.cueId) : undefined,
      mediaAction: isSet(object.mediaAction) ? Action.fromJSON(object.mediaAction) : undefined,
    };
  },

  toJSON(message: Presentation_Timeline_Cue): unknown {
    const obj: any = {};
    message.triggerTime !== undefined && (obj.triggerTime = message.triggerTime);
    message.name !== undefined && (obj.name = message.name);
    message.cueId !== undefined && (obj.cueId = message.cueId ? UUID.toJSON(message.cueId) : undefined);
    message.mediaAction !== undefined &&
      (obj.mediaAction = message.mediaAction ? Action.toJSON(message.mediaAction) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Presentation_Timeline_Cue>, I>>(object: I): Presentation_Timeline_Cue {
    const message = createBasePresentation_Timeline_Cue();
    message.triggerTime = object.triggerTime ?? 0;
    message.name = object.name ?? "";
    message.cueId = (object.cueId !== undefined && object.cueId !== null) ? UUID.fromPartial(object.cueId) : undefined;
    message.mediaAction = (object.mediaAction !== undefined && object.mediaAction !== null)
      ? Action.fromPartial(object.mediaAction)
      : undefined;
    return message;
  },
};

function createBasePresentation_Arrangement(): Presentation_Arrangement {
  return { uuid: undefined, name: "", groupIdentifiers: [] };
}

export const Presentation_Arrangement = {
  encode(message: Presentation_Arrangement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.groupIdentifiers) {
      UUID.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation_Arrangement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_Arrangement();
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
          message.groupIdentifiers.push(UUID.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Presentation_Arrangement {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      groupIdentifiers: Array.isArray(object?.groupIdentifiers)
        ? object.groupIdentifiers.map((e: any) => UUID.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Presentation_Arrangement): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.groupIdentifiers) {
      obj.groupIdentifiers = message.groupIdentifiers.map((e) => e ? UUID.toJSON(e) : undefined);
    } else {
      obj.groupIdentifiers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Presentation_Arrangement>, I>>(object: I): Presentation_Arrangement {
    const message = createBasePresentation_Arrangement();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    message.groupIdentifiers = object.groupIdentifiers?.map((e) => UUID.fromPartial(e)) || [];
    return message;
  },
};

function createBasePresentation_CueGroup(): Presentation_CueGroup {
  return { group: undefined, cueIdentifiers: [] };
}

export const Presentation_CueGroup = {
  encode(message: Presentation_CueGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.cueIdentifiers) {
      UUID.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation_CueGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_CueGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = Group.decode(reader, reader.uint32());
          break;
        case 2:
          message.cueIdentifiers.push(UUID.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Presentation_CueGroup {
    return {
      group: isSet(object.group) ? Group.fromJSON(object.group) : undefined,
      cueIdentifiers: Array.isArray(object?.cueIdentifiers)
        ? object.cueIdentifiers.map((e: any) => UUID.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Presentation_CueGroup): unknown {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    if (message.cueIdentifiers) {
      obj.cueIdentifiers = message.cueIdentifiers.map((e) => e ? UUID.toJSON(e) : undefined);
    } else {
      obj.cueIdentifiers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Presentation_CueGroup>, I>>(object: I): Presentation_CueGroup {
    const message = createBasePresentation_CueGroup();
    message.group = (object.group !== undefined && object.group !== null) ? Group.fromPartial(object.group) : undefined;
    message.cueIdentifiers = object.cueIdentifiers?.map((e) => UUID.fromPartial(e)) || [];
    return message;
  },
};

function createBasePresentation_MultiTracksLicensing(): Presentation_MultiTracksLicensing {
  return {
    songIdentifier: 0,
    customerIdentifier: "",
    expirationDate: undefined,
    licenseExpiration: undefined,
    subscription: 0,
  };
}

export const Presentation_MultiTracksLicensing = {
  encode(message: Presentation_MultiTracksLicensing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.songIdentifier !== 0) {
      writer.uint32(8).int64(message.songIdentifier);
    }
    if (message.customerIdentifier !== "") {
      writer.uint32(18).string(message.customerIdentifier);
    }
    if (message.expirationDate !== undefined) {
      Timestamp.encode(message.expirationDate, writer.uint32(26).fork()).ldelim();
    }
    if (message.licenseExpiration !== undefined) {
      Timestamp.encode(message.licenseExpiration, writer.uint32(34).fork()).ldelim();
    }
    if (message.subscription !== 0) {
      writer.uint32(40).int32(message.subscription);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation_MultiTracksLicensing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_MultiTracksLicensing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.songIdentifier = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.customerIdentifier = reader.string();
          break;
        case 3:
          message.expirationDate = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.licenseExpiration = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.subscription = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Presentation_MultiTracksLicensing {
    return {
      songIdentifier: isSet(object.songIdentifier) ? Number(object.songIdentifier) : 0,
      customerIdentifier: isSet(object.customerIdentifier) ? String(object.customerIdentifier) : "",
      expirationDate: isSet(object.expirationDate) ? Timestamp.fromJSON(object.expirationDate) : undefined,
      licenseExpiration: isSet(object.licenseExpiration) ? Timestamp.fromJSON(object.licenseExpiration) : undefined,
      subscription: isSet(object.subscription)
        ? presentation_MultiTracksLicensing_SubscriptionFromJSON(object.subscription)
        : 0,
    };
  },

  toJSON(message: Presentation_MultiTracksLicensing): unknown {
    const obj: any = {};
    message.songIdentifier !== undefined && (obj.songIdentifier = Math.round(message.songIdentifier));
    message.customerIdentifier !== undefined && (obj.customerIdentifier = message.customerIdentifier);
    message.expirationDate !== undefined &&
      (obj.expirationDate = message.expirationDate ? Timestamp.toJSON(message.expirationDate) : undefined);
    message.licenseExpiration !== undefined &&
      (obj.licenseExpiration = message.licenseExpiration ? Timestamp.toJSON(message.licenseExpiration) : undefined);
    message.subscription !== undefined &&
      (obj.subscription = presentation_MultiTracksLicensing_SubscriptionToJSON(message.subscription));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Presentation_MultiTracksLicensing>, I>>(
    object: I,
  ): Presentation_MultiTracksLicensing {
    const message = createBasePresentation_MultiTracksLicensing();
    message.songIdentifier = object.songIdentifier ?? 0;
    message.customerIdentifier = object.customerIdentifier ?? "";
    message.expirationDate = (object.expirationDate !== undefined && object.expirationDate !== null)
      ? Timestamp.fromPartial(object.expirationDate)
      : undefined;
    message.licenseExpiration = (object.licenseExpiration !== undefined && object.licenseExpiration !== null)
      ? Timestamp.fromPartial(object.licenseExpiration)
      : undefined;
    message.subscription = object.subscription ?? 0;
    return message;
  },
};

function createBasePresentation_Music(): Presentation_Music {
  return { originalMusicKey: "", userMusicKey: "", original: undefined, user: undefined };
}

export const Presentation_Music = {
  encode(message: Presentation_Music, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originalMusicKey !== "") {
      writer.uint32(10).string(message.originalMusicKey);
    }
    if (message.userMusicKey !== "") {
      writer.uint32(18).string(message.userMusicKey);
    }
    if (message.original !== undefined) {
      MusicKeyScale.encode(message.original, writer.uint32(26).fork()).ldelim();
    }
    if (message.user !== undefined) {
      MusicKeyScale.encode(message.user, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation_Music {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_Music();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originalMusicKey = reader.string();
          break;
        case 2:
          message.userMusicKey = reader.string();
          break;
        case 3:
          message.original = MusicKeyScale.decode(reader, reader.uint32());
          break;
        case 4:
          message.user = MusicKeyScale.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Presentation_Music {
    return {
      originalMusicKey: isSet(object.originalMusicKey) ? String(object.originalMusicKey) : "",
      userMusicKey: isSet(object.userMusicKey) ? String(object.userMusicKey) : "",
      original: isSet(object.original) ? MusicKeyScale.fromJSON(object.original) : undefined,
      user: isSet(object.user) ? MusicKeyScale.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: Presentation_Music): unknown {
    const obj: any = {};
    message.originalMusicKey !== undefined && (obj.originalMusicKey = message.originalMusicKey);
    message.userMusicKey !== undefined && (obj.userMusicKey = message.userMusicKey);
    message.original !== undefined &&
      (obj.original = message.original ? MusicKeyScale.toJSON(message.original) : undefined);
    message.user !== undefined && (obj.user = message.user ? MusicKeyScale.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Presentation_Music>, I>>(object: I): Presentation_Music {
    const message = createBasePresentation_Music();
    message.originalMusicKey = object.originalMusicKey ?? "";
    message.userMusicKey = object.userMusicKey ?? "";
    message.original = (object.original !== undefined && object.original !== null)
      ? MusicKeyScale.fromPartial(object.original)
      : undefined;
    message.user = (object.user !== undefined && object.user !== null)
      ? MusicKeyScale.fromPartial(object.user)
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
