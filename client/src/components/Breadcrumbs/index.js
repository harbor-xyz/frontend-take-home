import { useNavigate } from "react-router-dom";

function Breadcrumbs({ list }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row gap-x-4 items-center mb-4 font-semibold">
      {list.map((item, index) => {
        if (index === list.length - 1) {
          return <div key={item.value}>{item.label}</div>;
        }
        return (
          <div className="flex items-center gap-x-4" key={item.value}>
            <div
              className="cursor-pointer text-blue-600"
              onClick={() => navigate(item.value)}
            >
              {item.label}
            </div>
            <div>`{">"}</div>
          </div>
        );
      })}
    </div>
  );
}
export { Breadcrumbs };
