import Image from 'next/image'

type Props = {
    index:number, 
    keyword:string
}

const ImageDescription = (props:Props) => {

    let index:number, keyword:string;

    ({index, keyword} = props);

    return (
    <div>

        <h2>キーワード{`${index}`} →　{keyword}</h2>

        <h1>次の場所で草を刈れ！</h1>
        <Image src={`/images/map${index}.png`}  alt= {`map${index}`} width={500} height={400} />
        <Image src={`/images/photo${index}.png`}  alt={`photo${index}`} width={500} height={400} />
    </div>
    )
}

export default ImageDescription;