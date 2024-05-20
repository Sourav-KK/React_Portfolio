import InfinityScroll from "../Utils/InfinityScroll";

const SAmple = () => {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      className="bg-stone-700 p-7 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
    >
      <InfinityScroll ariaVal={false} />
      <InfinityScroll ariaVal={true} />
      <InfinityScroll ariaVal={true} />
    </div>
  );
};

export default SAmple;
