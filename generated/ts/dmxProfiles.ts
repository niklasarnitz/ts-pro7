/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "rv.data";

export interface DMXProfiles {
  workspaceProfile: DMXProfiles_DMXProfile | undefined;
  layerProfiles: DMXProfiles_DMXProfile[];
}

export interface DMXProfiles_DMXProfile {
  profile: DMXProfiles_DMXProfile_Profile | undefined;
  fixture: DMXProfiles_DMXProfile_Fixture | undefined;
  isEnabled: boolean;
  customMappings: DMXProfiles_DMXProfile_ChannelMapping[];
}

export interface DMXProfiles_DMXProfile_Profile {
  profileType: DMXProfiles_DMXProfile_Profile_ProfileType;
  startingChannel?: number | undefined;
}

export enum DMXProfiles_DMXProfile_Profile_ProfileType {
  BASIC = 0,
  ADVANCED = 1,
  CUSTOM = 2,
  UNRECOGNIZED = -1,
}

export function dMXProfiles_DMXProfile_Profile_ProfileTypeFromJSON(
  object: any,
): DMXProfiles_DMXProfile_Profile_ProfileType {
  switch (object) {
    case 0:
    case "BASIC":
      return DMXProfiles_DMXProfile_Profile_ProfileType.BASIC;
    case 1:
    case "ADVANCED":
      return DMXProfiles_DMXProfile_Profile_ProfileType.ADVANCED;
    case 2:
    case "CUSTOM":
      return DMXProfiles_DMXProfile_Profile_ProfileType.CUSTOM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DMXProfiles_DMXProfile_Profile_ProfileType.UNRECOGNIZED;
  }
}

export function dMXProfiles_DMXProfile_Profile_ProfileTypeToJSON(
  object: DMXProfiles_DMXProfile_Profile_ProfileType,
): string {
  switch (object) {
    case DMXProfiles_DMXProfile_Profile_ProfileType.BASIC:
      return "BASIC";
    case DMXProfiles_DMXProfile_Profile_ProfileType.ADVANCED:
      return "ADVANCED";
    case DMXProfiles_DMXProfile_Profile_ProfileType.CUSTOM:
      return "CUSTOM";
    case DMXProfiles_DMXProfile_Profile_ProfileType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DMXProfiles_DMXProfile_ChannelMapping {
  channelIndex: number;
  command: DMXProfiles_DMXProfile_ChannelMapping_CommandType;
}

export enum DMXProfiles_DMXProfile_ChannelMapping_CommandType {
  OPACITY = 0,
  BLEND_MODE = 1,
  SELECT_CUE = 2,
  CONTROL_TYPE = 3,
  CONTROL_VALUE = 4,
  TRANSITION_DURATION = 5,
  SELECT_PLAYLIST = 6,
  TARGETED_LAYER = 7,
  UNRECOGNIZED = -1,
}

export function dMXProfiles_DMXProfile_ChannelMapping_CommandTypeFromJSON(
  object: any,
): DMXProfiles_DMXProfile_ChannelMapping_CommandType {
  switch (object) {
    case 0:
    case "OPACITY":
      return DMXProfiles_DMXProfile_ChannelMapping_CommandType.OPACITY;
    case 1:
    case "BLEND_MODE":
      return DMXProfiles_DMXProfile_ChannelMapping_CommandType.BLEND_MODE;
    case 2:
    case "SELECT_CUE":
      return DMXProfiles_DMXProfile_ChannelMapping_CommandType.SELECT_CUE;
    case 3:
    case "CONTROL_TYPE":
      return DMXProfiles_DMXProfile_ChannelMapping_CommandType.CONTROL_TYPE;
    case 4:
    case "CONTROL_VALUE":
      return DMXProfiles_DMXProfile_ChannelMapping_CommandType.CONTROL_VALUE;
    case 5:
    case "TRANSITION_DURATION":
      return DMXProfiles_DMXProfile_ChannelMapping_CommandType.TRANSITION_DURATION;
    case 6:
    case "SELECT_PLAYLIST":
      return DMXProfiles_DMXProfile_ChannelMapping_CommandType.SELECT_PLAYLIST;
    case 7:
    case "TARGETED_LAYER":
      return DMXProfiles_DMXProfile_ChannelMapping_CommandType.TARGETED_LAYER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DMXProfiles_DMXProfile_ChannelMapping_CommandType.UNRECOGNIZED;
  }
}

export function dMXProfiles_DMXProfile_ChannelMapping_CommandTypeToJSON(
  object: DMXProfiles_DMXProfile_ChannelMapping_CommandType,
): string {
  switch (object) {
    case DMXProfiles_DMXProfile_ChannelMapping_CommandType.OPACITY:
      return "OPACITY";
    case DMXProfiles_DMXProfile_ChannelMapping_CommandType.BLEND_MODE:
      return "BLEND_MODE";
    case DMXProfiles_DMXProfile_ChannelMapping_CommandType.SELECT_CUE:
      return "SELECT_CUE";
    case DMXProfiles_DMXProfile_ChannelMapping_CommandType.CONTROL_TYPE:
      return "CONTROL_TYPE";
    case DMXProfiles_DMXProfile_ChannelMapping_CommandType.CONTROL_VALUE:
      return "CONTROL_VALUE";
    case DMXProfiles_DMXProfile_ChannelMapping_CommandType.TRANSITION_DURATION:
      return "TRANSITION_DURATION";
    case DMXProfiles_DMXProfile_ChannelMapping_CommandType.SELECT_PLAYLIST:
      return "SELECT_PLAYLIST";
    case DMXProfiles_DMXProfile_ChannelMapping_CommandType.TARGETED_LAYER:
      return "TARGETED_LAYER";
    case DMXProfiles_DMXProfile_ChannelMapping_CommandType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DMXProfiles_DMXProfile_Fixture {
  fixtureType: DMXProfiles_DMXProfile_Fixture_FixtureType;
  layerIndex?: number | undefined;
}

export enum DMXProfiles_DMXProfile_Fixture_FixtureType {
  WORKSPACE = 0,
  LAYER = 1,
  UNRECOGNIZED = -1,
}

export function dMXProfiles_DMXProfile_Fixture_FixtureTypeFromJSON(
  object: any,
): DMXProfiles_DMXProfile_Fixture_FixtureType {
  switch (object) {
    case 0:
    case "WORKSPACE":
      return DMXProfiles_DMXProfile_Fixture_FixtureType.WORKSPACE;
    case 1:
    case "LAYER":
      return DMXProfiles_DMXProfile_Fixture_FixtureType.LAYER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DMXProfiles_DMXProfile_Fixture_FixtureType.UNRECOGNIZED;
  }
}

export function dMXProfiles_DMXProfile_Fixture_FixtureTypeToJSON(
  object: DMXProfiles_DMXProfile_Fixture_FixtureType,
): string {
  switch (object) {
    case DMXProfiles_DMXProfile_Fixture_FixtureType.WORKSPACE:
      return "WORKSPACE";
    case DMXProfiles_DMXProfile_Fixture_FixtureType.LAYER:
      return "LAYER";
    case DMXProfiles_DMXProfile_Fixture_FixtureType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseDMXProfiles(): DMXProfiles {
  return { workspaceProfile: undefined, layerProfiles: [] };
}

export const DMXProfiles = {
  encode(message: DMXProfiles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.workspaceProfile !== undefined) {
      DMXProfiles_DMXProfile.encode(message.workspaceProfile, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.layerProfiles) {
      DMXProfiles_DMXProfile.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DMXProfiles {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDMXProfiles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.workspaceProfile = DMXProfiles_DMXProfile.decode(reader, reader.uint32());
          break;
        case 2:
          message.layerProfiles.push(DMXProfiles_DMXProfile.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DMXProfiles {
    return {
      workspaceProfile: isSet(object.workspaceProfile)
        ? DMXProfiles_DMXProfile.fromJSON(object.workspaceProfile)
        : undefined,
      layerProfiles: Array.isArray(object?.layerProfiles)
        ? object.layerProfiles.map((e: any) => DMXProfiles_DMXProfile.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DMXProfiles): unknown {
    const obj: any = {};
    message.workspaceProfile !== undefined && (obj.workspaceProfile = message.workspaceProfile
      ? DMXProfiles_DMXProfile.toJSON(message.workspaceProfile)
      : undefined);
    if (message.layerProfiles) {
      obj.layerProfiles = message.layerProfiles.map((e) => e ? DMXProfiles_DMXProfile.toJSON(e) : undefined);
    } else {
      obj.layerProfiles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DMXProfiles>, I>>(object: I): DMXProfiles {
    const message = createBaseDMXProfiles();
    message.workspaceProfile = (object.workspaceProfile !== undefined && object.workspaceProfile !== null)
      ? DMXProfiles_DMXProfile.fromPartial(object.workspaceProfile)
      : undefined;
    message.layerProfiles = object.layerProfiles?.map((e) => DMXProfiles_DMXProfile.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDMXProfiles_DMXProfile(): DMXProfiles_DMXProfile {
  return { profile: undefined, fixture: undefined, isEnabled: false, customMappings: [] };
}

export const DMXProfiles_DMXProfile = {
  encode(message: DMXProfiles_DMXProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profile !== undefined) {
      DMXProfiles_DMXProfile_Profile.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    if (message.fixture !== undefined) {
      DMXProfiles_DMXProfile_Fixture.encode(message.fixture, writer.uint32(18).fork()).ldelim();
    }
    if (message.isEnabled === true) {
      writer.uint32(24).bool(message.isEnabled);
    }
    for (const v of message.customMappings) {
      DMXProfiles_DMXProfile_ChannelMapping.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DMXProfiles_DMXProfile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDMXProfiles_DMXProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profile = DMXProfiles_DMXProfile_Profile.decode(reader, reader.uint32());
          break;
        case 2:
          message.fixture = DMXProfiles_DMXProfile_Fixture.decode(reader, reader.uint32());
          break;
        case 3:
          message.isEnabled = reader.bool();
          break;
        case 4:
          message.customMappings.push(DMXProfiles_DMXProfile_ChannelMapping.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DMXProfiles_DMXProfile {
    return {
      profile: isSet(object.profile) ? DMXProfiles_DMXProfile_Profile.fromJSON(object.profile) : undefined,
      fixture: isSet(object.fixture) ? DMXProfiles_DMXProfile_Fixture.fromJSON(object.fixture) : undefined,
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
      customMappings: Array.isArray(object?.customMappings)
        ? object.customMappings.map((e: any) => DMXProfiles_DMXProfile_ChannelMapping.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DMXProfiles_DMXProfile): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile ? DMXProfiles_DMXProfile_Profile.toJSON(message.profile) : undefined);
    message.fixture !== undefined &&
      (obj.fixture = message.fixture ? DMXProfiles_DMXProfile_Fixture.toJSON(message.fixture) : undefined);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    if (message.customMappings) {
      obj.customMappings = message.customMappings.map((e) =>
        e ? DMXProfiles_DMXProfile_ChannelMapping.toJSON(e) : undefined
      );
    } else {
      obj.customMappings = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DMXProfiles_DMXProfile>, I>>(object: I): DMXProfiles_DMXProfile {
    const message = createBaseDMXProfiles_DMXProfile();
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? DMXProfiles_DMXProfile_Profile.fromPartial(object.profile)
      : undefined;
    message.fixture = (object.fixture !== undefined && object.fixture !== null)
      ? DMXProfiles_DMXProfile_Fixture.fromPartial(object.fixture)
      : undefined;
    message.isEnabled = object.isEnabled ?? false;
    message.customMappings = object.customMappings?.map((e) => DMXProfiles_DMXProfile_ChannelMapping.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseDMXProfiles_DMXProfile_Profile(): DMXProfiles_DMXProfile_Profile {
  return { profileType: 0, startingChannel: undefined };
}

export const DMXProfiles_DMXProfile_Profile = {
  encode(message: DMXProfiles_DMXProfile_Profile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profileType !== 0) {
      writer.uint32(8).int32(message.profileType);
    }
    if (message.startingChannel !== undefined) {
      writer.uint32(16).uint32(message.startingChannel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DMXProfiles_DMXProfile_Profile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDMXProfiles_DMXProfile_Profile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profileType = reader.int32() as any;
          break;
        case 2:
          message.startingChannel = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DMXProfiles_DMXProfile_Profile {
    return {
      profileType: isSet(object.profileType)
        ? dMXProfiles_DMXProfile_Profile_ProfileTypeFromJSON(object.profileType)
        : 0,
      startingChannel: isSet(object.startingChannel) ? Number(object.startingChannel) : undefined,
    };
  },

  toJSON(message: DMXProfiles_DMXProfile_Profile): unknown {
    const obj: any = {};
    message.profileType !== undefined &&
      (obj.profileType = dMXProfiles_DMXProfile_Profile_ProfileTypeToJSON(message.profileType));
    message.startingChannel !== undefined && (obj.startingChannel = Math.round(message.startingChannel));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DMXProfiles_DMXProfile_Profile>, I>>(
    object: I,
  ): DMXProfiles_DMXProfile_Profile {
    const message = createBaseDMXProfiles_DMXProfile_Profile();
    message.profileType = object.profileType ?? 0;
    message.startingChannel = object.startingChannel ?? undefined;
    return message;
  },
};

function createBaseDMXProfiles_DMXProfile_ChannelMapping(): DMXProfiles_DMXProfile_ChannelMapping {
  return { channelIndex: 0, command: 0 };
}

export const DMXProfiles_DMXProfile_ChannelMapping = {
  encode(message: DMXProfiles_DMXProfile_ChannelMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelIndex !== 0) {
      writer.uint32(8).uint32(message.channelIndex);
    }
    if (message.command !== 0) {
      writer.uint32(16).int32(message.command);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DMXProfiles_DMXProfile_ChannelMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDMXProfiles_DMXProfile_ChannelMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelIndex = reader.uint32();
          break;
        case 2:
          message.command = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DMXProfiles_DMXProfile_ChannelMapping {
    return {
      channelIndex: isSet(object.channelIndex) ? Number(object.channelIndex) : 0,
      command: isSet(object.command) ? dMXProfiles_DMXProfile_ChannelMapping_CommandTypeFromJSON(object.command) : 0,
    };
  },

  toJSON(message: DMXProfiles_DMXProfile_ChannelMapping): unknown {
    const obj: any = {};
    message.channelIndex !== undefined && (obj.channelIndex = Math.round(message.channelIndex));
    message.command !== undefined &&
      (obj.command = dMXProfiles_DMXProfile_ChannelMapping_CommandTypeToJSON(message.command));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DMXProfiles_DMXProfile_ChannelMapping>, I>>(
    object: I,
  ): DMXProfiles_DMXProfile_ChannelMapping {
    const message = createBaseDMXProfiles_DMXProfile_ChannelMapping();
    message.channelIndex = object.channelIndex ?? 0;
    message.command = object.command ?? 0;
    return message;
  },
};

function createBaseDMXProfiles_DMXProfile_Fixture(): DMXProfiles_DMXProfile_Fixture {
  return { fixtureType: 0, layerIndex: undefined };
}

export const DMXProfiles_DMXProfile_Fixture = {
  encode(message: DMXProfiles_DMXProfile_Fixture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fixtureType !== 0) {
      writer.uint32(8).int32(message.fixtureType);
    }
    if (message.layerIndex !== undefined) {
      writer.uint32(16).uint32(message.layerIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DMXProfiles_DMXProfile_Fixture {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDMXProfiles_DMXProfile_Fixture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixtureType = reader.int32() as any;
          break;
        case 2:
          message.layerIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DMXProfiles_DMXProfile_Fixture {
    return {
      fixtureType: isSet(object.fixtureType)
        ? dMXProfiles_DMXProfile_Fixture_FixtureTypeFromJSON(object.fixtureType)
        : 0,
      layerIndex: isSet(object.layerIndex) ? Number(object.layerIndex) : undefined,
    };
  },

  toJSON(message: DMXProfiles_DMXProfile_Fixture): unknown {
    const obj: any = {};
    message.fixtureType !== undefined &&
      (obj.fixtureType = dMXProfiles_DMXProfile_Fixture_FixtureTypeToJSON(message.fixtureType));
    message.layerIndex !== undefined && (obj.layerIndex = Math.round(message.layerIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DMXProfiles_DMXProfile_Fixture>, I>>(
    object: I,
  ): DMXProfiles_DMXProfile_Fixture {
    const message = createBaseDMXProfiles_DMXProfile_Fixture();
    message.fixtureType = object.fixtureType ?? 0;
    message.layerIndex = object.layerIndex ?? undefined;
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
