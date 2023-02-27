// Generated by @wagmi/cli@0.1.10 on 2/26/2023 at 10:51:08 PM
import {
  useNetwork,
  useContract,
  UseContractConfig,
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AttestationStation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export const attestationStationABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'about',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'key', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'AttestationCreated',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: '_attestations',
        internalType: 'struct AttestationStation.AttestationData[]',
        type: 'tuple[]',
        components: [
          { name: 'about', internalType: 'address', type: 'address' },
          { name: 'key', internalType: 'bytes32', type: 'bytes32' },
          { name: 'val', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'attest',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_about', internalType: 'address', type: 'address' },
      { name: '_key', internalType: 'bytes32', type: 'bytes32' },
      { name: '_val', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'attest',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'attestations',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

/**
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export const attestationStationAddress = {
  10: '0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77',
  420: '0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77',
  31337: '0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77',
} as const

/**
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export const attestationStationConfig = {
  address: attestationStationAddress,
  abi: attestationStationABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Semver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const semverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_major', internalType: 'uint256', type: 'uint256' },
      { name: '_minor', internalType: 'uint256', type: 'uint256' },
      { name: '_patch', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContract}__ with `abi` set to __{@link attestationStationABI}__.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStation(
  config: Omit<UseContractConfig, 'abi' | 'address'> & {
    chainId?: keyof typeof attestationStationAddress
  } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContract({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link attestationStationABI}__.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStationRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof attestationStationABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof attestationStationABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address'
  > & { chainId?: keyof typeof attestationStationAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractRead({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    ...config,
  } as UseContractReadConfig<
    typeof attestationStationABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link attestationStationABI}__ and `functionName` set to `"attestations"`.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStationAttestations<
  TSelectData = ReadContractResult<
    typeof attestationStationABI,
    'attestations'
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof attestationStationABI,
      'attestations',
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof attestationStationAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractRead({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    functionName: 'attestations',
    ...config,
  } as UseContractReadConfig<
    typeof attestationStationABI,
    'attestations',
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link attestationStationABI}__ and `functionName` set to `"version"`.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStationVersion<
  TSelectData = ReadContractResult<typeof attestationStationABI, 'version'>,
>(
  config: Omit<
    UseContractReadConfig<typeof attestationStationABI, 'version', TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof attestationStationAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractRead({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    functionName: 'version',
    ...config,
  } as UseContractReadConfig<
    typeof attestationStationABI,
    'version',
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link attestationStationABI}__.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStationWrite<
  TMode extends WriteContractMode,
  TFunctionName extends string,
  TChainId extends number = keyof typeof attestationStationAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof attestationStationABI, string>['abi'],
        TFunctionName
      > & { address?: `0x${string}`; chainId?: TChainId }
    : UseContractWriteConfig<
        TMode,
        typeof attestationStationABI,
        TFunctionName
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractWrite<TMode, typeof attestationStationABI, TFunctionName>({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link attestationStationABI}__ and `functionName` set to `"attest"`.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStationAttest<
  TMode extends WriteContractMode,
  TChainId extends number = keyof typeof attestationStationAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<
          typeof attestationStationABI,
          'attest'
        >['abi'],
        'attest'
      > & {
        address?: `0x${string}`
        chainId?: TChainId
        functionName?: 'attest'
      }
    : UseContractWriteConfig<TMode, typeof attestationStationABI, 'attest'> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'attest'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractWrite<TMode, typeof attestationStationABI, 'attest'>({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    functionName: 'attest',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link attestationStationABI}__.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function usePrepareAttestationStationWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof attestationStationABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof attestationStationAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return usePrepareContractWrite({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof attestationStationABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link attestationStationABI}__ and `functionName` set to `"attest"`.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function usePrepareAttestationStationAttest(
  config: Omit<
    UsePrepareContractWriteConfig<typeof attestationStationABI, 'attest'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof attestationStationAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return usePrepareContractWrite({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    functionName: 'attest',
    ...config,
  } as UsePrepareContractWriteConfig<typeof attestationStationABI, 'attest'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link attestationStationABI}__.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStationEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof attestationStationABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof attestationStationAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractEvent({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    ...config,
  } as UseContractEventConfig<typeof attestationStationABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link attestationStationABI}__ and `eventName` set to `"AttestationCreated"`.
 *
 * - [__View Contract on Optimism Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStationAttestationCreatedEvent(
  config: Omit<
    UseContractEventConfig<typeof attestationStationABI, 'AttestationCreated'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof attestationStationAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractEvent({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    eventName: 'AttestationCreated',
    ...config,
  } as UseContractEventConfig<
    typeof attestationStationABI,
    'AttestationCreated'
  >)
}

/**
 * Wraps __{@link useContract}__ with `abi` set to __{@link semverABI}__.
 */
export function useSemver(config: Omit<UseContractConfig, 'abi'> = {} as any) {
  return useContract({ abi: semverABI, ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link semverABI}__.
 */
export function useSemverRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof semverABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof semverABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: semverABI, ...config } as UseContractReadConfig<
    typeof semverABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link semverABI}__ and `functionName` set to `"version"`.
 */
export function useSemverVersion<
  TSelectData = ReadContractResult<typeof semverABI, 'version'>,
>(
  config: Omit<
    UseContractReadConfig<typeof semverABI, 'version', TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: semverABI,
    functionName: 'version',
    ...config,
  } as UseContractReadConfig<typeof semverABI, 'version', TSelectData>)
}
