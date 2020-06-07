/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    useEffect,
    useState,
    useMemo,
    forwardRef,
    useImperativeHandle
} from "react";
import HITSAPI from "../../shared/HITSAPI";
import CustomTablePanel from "../CustomTable/CustomTablePanel";
import EmptyData from "../EmptyData/EmptyData";
import { Table } from "antd";
import "antd/dist/antd.css";
import "./style.css";

function TableListAnt(props, ref) {
    const hitsAPI = new HITSAPI();

    const [queryParam, setQueryParam] = useState("");

    const apiPathInit = useMemo(() => {
        return props.apiPath;
    }, []);

    const [tableOption, setTableOption] = useState({
        data: [
        ],
        pagination: {
            showSizeChanger: true,
            showQuickJumper: true,
            size: "small"
        },
        loading: false
    });

    const handleTableChange = (pagination, filters, sorter) => {
        console.log("handleTableChange");
        const pager = { ...tableOption.pagination };
        pager.current = pagination.current;
        pager.pageSize = pagination.pageSize;

        let skip = pager.current === 1 ? 0 : (pager.current - 1) * pager.pageSize;

        console.log(pager);
        console.log(pagination.pageSize);
        console.log(pagination.current);
        console.log(sorter.field);
        console.log(sorter.order);
        console.log(filters);

        setTableOption({ pagination: pager });
        let queryParamTmp = queryParam;
        if (sorter.order) {
            queryParamTmp += `&sortField=${sorter.field}&sortOrder=${sorter.order}`;
        }
        fetchModels(skip, pagination.pageSize, queryParamTmp);
    };

    useImperativeHandle(ref, () => ({
        fetchModelsApi: (queryParam) => {
            setQueryParam(queryParam);
            fetchModels(0, 10, queryParam);
        }
    }));

    // on tableOption change
    useEffect(() => {
        fetchModels();
    }, []);

    // fetch data
    const fetchModels = async (skip = 0, row = 10, param = "") => {
        setTableOption({ loading: true });
        await hitsAPI.axios
            .get(`/todos?skip=${skip}&top=${row}${param}`)
            .then(function (response) {
                const pagination = { ...tableOption.pagination };
                pagination.total = response.data.totalCount;
                setTableOption({
                    loading: false,
                    data: response.data,
                    pagination
                });
            });
    };
    return (
        <CustomTablePanel>
            <Table
                size={"small"}
                className="table-lists"
                columns={props.columnsInit}
                rowKey={props.uniqueId}
                dataSource={tableOption.data}
                // pagination={tableOption.pagination}
                loading={tableOption.loading}
                onChange={handleTableChange}
                locale={{ emptyText: <EmptyData/> }}
                scroll={{ x: props.type }}
            />
        </CustomTablePanel>
    );
}

export default forwardRef(TableListAnt);