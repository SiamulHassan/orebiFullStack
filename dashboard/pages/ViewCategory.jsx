import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const ViewCategory = () => {
  const [showCategory, setShowCategory] = useState([]);
  useEffect(() => {
    async function getAllCategory() {
      let {
        data: {
          data: {
            CateData: { categories },
          },
        },
      } = await axios.get("http://localhost:8000/api/v1/product/viewcategory");
      let catArray = [];
      categories.map((createItems) => {
        catArray.push({
          key: createItems._id,
          name: createItems.name,
          status: createItems.status,
        });
      });
      setShowCategory(catArray);
    }
    getAllCategory();
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  const data = showCategory;
  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      //   title={() => "Header"}
      //   footer={() => "Footer"}
    />
  );
};

export default ViewCategory;
