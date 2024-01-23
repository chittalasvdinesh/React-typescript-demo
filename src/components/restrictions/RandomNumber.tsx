
type RandomNNumberType = {
    value: number
}

type PositiveNumber = RandomNNumberType & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never
}

type NegativeNumber = RandomNNumberType & {
    isPositive?: never,
    isNegative: boolean,
    isZero?: never
}

type ZeroNumber = RandomNNumberType & {
    isPositive?: never,
    isNegative?: never,
    isZero: boolean
}

type RandomNNumberProps = PositiveNumber | NegativeNumber | ZeroNumber


export const RandomNNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNNumberProps) => {
    return <div>
        {value} {isPositive && "Positive"} {isNegative && "Negative"} {isZero && "Zero"}
    </div>
}