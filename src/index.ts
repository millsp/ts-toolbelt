import {Union, Object, Any} from './ts-toolbelt'

interface CampaignMeta {
    campaign_id: number;
    campaign_name: string;
}

interface CampaignsMeta {
    campaigns_meta: readonly CampaignMeta[];
}

type MediaChannelSource = 'facebook' | 'youtube';

interface CreativeInstanceInfoGeneric<Source extends MediaChannelSource> {
    id: string;
    channel: Source;
    campaign_ids: readonly number[];
}

type FacebookCreativeInfo = CreativeInstanceInfoGeneric<'facebook'>;
type YouTubeCreativeInfo = CreativeInstanceInfoGeneric<'youtube'>;

export type CreativeInstanceInfo<
    Channel extends MediaChannelSource = MediaChannelSource
> = {
    facebook: FacebookCreativeInfo;
    youtube: YouTubeCreativeInfo;
}[Channel];

type CreativeInfoWithCampaignMeta = CreativeInstanceInfo & CampaignsMeta;

export type CreativeGroupInfoWithCampaignMeta = CreativeGroupInfo &
    CampaignsMeta & {
        instances: CreativeInfoWithCampaignMeta[];
    };

type CreativeTypesData<Channel extends MediaChannelSource> = {
    youtube: YouTubeCreativeData;
    facebook: FacebookCreativeData;
}[Channel];

export type CreativeWithDataGeneric<
    Channel extends MediaChannelSource = MediaChannelSource,
    HasData extends 'has-data' | 'pending-data' = 'has-data'
> = Object.Merge<
    CreativeInstanceInfo<Channel>,
    {
        data: HasData extends 'has-data'
            ? CreativeTypesData<Channel>
            : CreativeTypesData<Channel> | 'pending';
    }
>;

type CreativeWithDataGenericWithCampaignMeta<
    T extends MediaChannelSource
> = CreativeWithDataGeneric<T> & CampaignsMeta;

export type CreativeWithDataWithCampaignMeta =
    | CreativeWithDataGenericWithCampaignMeta<'facebook'>
    | CreativeWithDataGenericWithCampaignMeta<'youtube'>;

type CreativeGroupInstanceData<
    Source extends MediaChannelSource = MediaChannelSource
> =
    | {
          instances: ReadonlyArray<
              CreativeWithDataGeneric<Source, 'pending-data'>
          >;
          instanceDataStatus: 'pending';
      }
    | {
          instances: ReadonlyArray<CreativeWithDataGeneric<Source, 'has-data'>>;
          instanceDataStatus: 'done';
      };

type CreativeGroupWithInstanceDataGeneric<
    Source extends MediaChannelSource = MediaChannelSource
> = Object.MergeUp<
    CreativeGroupInfo<Source>,
    CreativeGroupInstanceData<Source>,
    'deep',
    0
>;

export type CreativeGroupWithInstanceData =
    | CreativeGroupWithInstanceDataGeneric<'facebook'>
    | CreativeGroupWithInstanceDataGeneric<'youtube'>;

interface FacebookCreativeData {
    fb_post_text: string;
}

interface YouTubeCreativeData {
    yt_video_title: string;
}

type CreativeGroupFromServerGeneric<
    Source extends MediaChannelSource = MediaChannelSource
> = {
    id: string;
    channel: Source;
    instances: ReadonlyArray<CreativeInstanceInfo<Source>>;
};

type YouTubeCreativeGroupFromServer = CreativeGroupFromServerGeneric<'youtube'>;
type FacebookCreativeGroupFromServer = CreativeGroupFromServerGeneric<
    'facebook'
>;

export type CreativeGroupFromServer<
    Channel extends MediaChannelSource = MediaChannelSource
> = {
    youtube: YouTubeCreativeGroupFromServer;
    facebook: FacebookCreativeGroupFromServer;
}[Channel];

type CreativeGroupGeneric<
    Source extends MediaChannelSource = MediaChannelSource
> = Any.Compute<CreativeGroupFromServer<Source> & CalculatedGroupInfoGeneric>;

export type CalculatedGroupInfoGeneric = {
    localField: string;
};

type YouTubeCreativeGroupInfo = CreativeGroupGeneric<'youtube'>;
type FacebookCreativeGroupInfo = CreativeGroupGeneric<'facebook'>;

export type CreativeGroupInfo<
    Channel extends MediaChannelSource = MediaChannelSource
> = {
    youtube: YouTubeCreativeGroupInfo;
    facebook: FacebookCreativeGroupInfo;
}[Channel];

export type CreativesGroupWithCampaignsAndData = Any.Compute<
    Object.MergeUp<
        CampaignsMeta,
        Object.MergeUp<
            { instances: CampaignsMeta[] },
            Union.Select<
                CreativeGroupWithInstanceData,
                { instanceDataStatus: 'done' }
            >,
            'deep',
            0
        >
    >
>;

declare const merged: CreativesGroupWithCampaignsAndData
type R1 = Any.Equals<
    CreativesGroupWithCampaignsAndData['channel'],
    MediaChannelSource
>; // ❌
type R2 = Any.Equals<
    CreativesGroupWithCampaignsAndData['campaigns_meta'],
    readonly CampaignMeta[]
>; // ✅
type R3 = Any.Equals<
    CreativesGroupWithCampaignsAndData['instances'][number]['campaigns_meta'],
    readonly CampaignMeta[]
>; // ❌

merged.channel

interface Merged {
    id: string;
    channel: MediaChannelSource;
    campaigns_meta: readonly CampaignMeta[];
    instanceDataStatus: 'pending' | 'done';
    instances: ReadonlyArray<{
        id: string;
        channel: MediaChannelSource;
        campaign_ids: readonly number[];
        campaigns_meta: readonly CampaignMeta[];
        data: 'pending' | CreativeTypesData<MediaChannelSource>;
    }>;
}
