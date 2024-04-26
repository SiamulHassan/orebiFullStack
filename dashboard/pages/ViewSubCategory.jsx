import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const ViewSubCategory = () => {
  const [showCategory, setShowCategory] = useState([]);
  useEffect(() => {
    async function getAllCategory() {
      let {
        data: {
          data: {
            subCateData: { subcategory },
          },
        },
      } = await axios.get(
        "http://localhost:8000/api/v1/product/viewsubcategory"
      );
      let catArray = [];
      subcategory.map((createItems) => {
        // console.log(
        //   createItems,
        //   "::::",
        //   createItems.categoryId.name,
        //   createItems.categoryId.status,
        //   createItems.name
        // );
        catArray.push({
          key: createItems._id,
          name: createItems.name,
          status: createItems.status,
          category: createItems.categoryId.name,
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
    {
      title: "Category",
      dataIndex: "category",
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

export default ViewSubCategory;
