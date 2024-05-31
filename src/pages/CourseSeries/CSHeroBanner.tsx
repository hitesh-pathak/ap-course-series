import { SectionCtn, StartCtnHrz } from '../../components/containers/container';
import { ThumbnailSigned } from '../../components/media/Thumbnail';

export default function CSHeroBanner() {
  return (
    <SectionCtn>
      <StartCtnHrz className="flex-col md:flex-row md:items-start">
        <div className="w-full shrink-0 md:w-2/5">
          <div className="w-full aspect-[16/9]">
            <ThumbnailSigned
              src="https://cimg.acharyaprashant.org/images/img-fabc3f2c-d7ff-442a-ade2-8e87f1b34410/10/image.jpg"
              alt="Course Image Thumbnail"
            />
          </div>
        </div>
      </StartCtnHrz>
    </SectionCtn>
  );
}
