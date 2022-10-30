import Image from 'next/image'

export const ImageDescription = (props) => {

    let index:number, hint:string;

    ({index, hint} = props);

    return (
    <div>
        <h1>次なる目的地はこちら！</h1>
        <Image src={`/images/image/map${index}.png`}  alt= {`map${index}`} width={320} height={132} />
        <Image src={`/images/image/photo${index}.png`}  alt={`photo${index}`} width={320} height={132} />
        <h2>宝へのヒント！ →　{hint}</h2>
    </div>
}