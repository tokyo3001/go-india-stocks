import Image from "next/image";
const FeaturedCompanies = () => {
  return (
    <div>
      <h1 className="text-xl text-red-600 font-semibold px-12 py-1 w-full">
        FEATURED COMPANIES
      </h1>
      <div className="bg-sky-100 px-5 py-2 flex items-center gap-4 overflow-scroll scrollbar-hide">
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/20230306ad.jpg" alt="capri" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/D1edit.jpg" alt="fino" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/dtpatten1.png" alt="gravita" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/hginfra.jpg" alt="hira" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/caprinew1.jpg" alt="capri" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/20230104maninfraconstruct600.png" alt="fino" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/20230110unparts.png" alt="gravita" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/fino.png" alt="hira" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/nathbio.jpg" alt="capri" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/deepind.png" alt="fino" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/ganeshhousing.jpg" alt="gravita" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/godawari.jpg" alt="hira" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/gravita.jpg" alt="capri" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/infibeamavenues.png" alt="fino" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/lx2.png" alt="gravita" width="98" height="50" />
        <Image src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/greate1.png" alt="hira" width="98" height="50" />
      </div>
    </div>
  );
};

export default FeaturedCompanies;
