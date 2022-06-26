import React from "react";
import { Collapse } from "react-bootstrap";

import { Icon } from "@iconify/react";
const SearchModal = ({ open, setOpen }) => {
    return (
        <Collapse
            // className="w-100 vh-100 position-absolute fixed-top bg-white"
            in={open}
        >
            <div
                id="example-collapse-text"
                className=" fade bg-white"
                //id="templatemo_search"
            >
                <div className="modal-dialog modal-lg" role="document">
                    <form action="" method="get" className="modal-content modal-body border-0 p-0">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                            <button type="submit" className="input-group-text bg-success text-light">
                                <Icon icon="fluent:search-16-filled" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Collapse>
    );
};

export default SearchModal;
