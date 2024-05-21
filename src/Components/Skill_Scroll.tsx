import InfinityScroll from "../Utils/InfinityScroll";

const Skill_Scroll = () => {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      className="bg-transparent p-7 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)]"
    >
      <InfinityScroll ariaVal={false} />
      <InfinityScroll ariaVal={true} />
      <InfinityScroll ariaVal={true} />
    </div>
  );
};

export default Skill_Scroll;
