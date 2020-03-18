import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClipLoader,
  ClimbingBoxLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PropagateLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SyncLoader,
} from 'react-spinners';

export type SpinnerStyles =
  | 'BarLoader'
  | 'BeatLoader'
  | 'BounceLoader'
  | 'CircleLoader'
  | 'ClipLoader'
  | 'ClimbingBoxLoader'
  | 'DotLoader'
  | 'FadeLoader'
  | 'GridLoader'
  | 'HashLoader'
  | 'MoonLoader'
  | 'PacmanLoader'
  | 'PropagateLoader'
  | 'PulseLoader'
  | 'RingLoader'
  | 'RiseLoader'
  | 'RotateLoader'
  | 'ScaleLoader'
  | 'SyncLoader';

export default (loader: SpinnerStyles) => {
  const map = {
    BarLoader,
    BeatLoader,
    BounceLoader,
    CircleLoader,
    ClipLoader,
    ClimbingBoxLoader,
    DotLoader,
    FadeLoader,
    GridLoader,
    HashLoader,
    MoonLoader,
    PacmanLoader,
    PropagateLoader,
    PulseLoader,
    RingLoader,
    RiseLoader,
    RotateLoader,
    ScaleLoader,
    SyncLoader,
  };

  return map[loader.toString()];
};
