import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { Reports } from "..";
import { getReportApi, getProjectsListApi } from "../../../apis";
import userEvent from "@testing-library/user-event";



jest.mock("../../../apis")
jest.mock("../../../axiosInstance")
describe('Reports', () => {



    it("it shoud render component", async () => {
        render(
            <Reports />
        )

    })

    it("it should check dropDown ", async () => {
        const promise = Promise.resolve();
        (getReportApi as jest.Mock).mockImplementation(() => Promise.resolve([
            {
                projectId: "bgYhx",
                gatewayId: "GzFF8",
                amount: 327.72
            }
        ]))


        const { getByTestId } = render(
            <Reports />
        )
        fireEvent.change(getByTestId("select-project"), {
            target: { value: "project1" },
        });

        await act(() => promise)




    })

    it("shoul call the projects api successfully", async () => {
        const promise = Promise.resolve();
        (getProjectsListApi as jest.Mock).mockImplementation(() => Promise.resolve([
            {
                projectId: "bgYhx",
                gatewayId: "GzFF8",
                amount: 327.72
            }
        ]))

        const { getByTestId } = await act(async () => render(<Reports />));
        await getProjectsListApi();
        await waitFor(() => {
            expect(getByTestId('select-project')).toBeInTheDocument();
        });

        await act(() => promise)
    })

    it("it should handle generate report button ", () => {

        const { getByTestId, container } = render(<Reports />)
        const btn = getByTestId("generate-report-btn")
        userEvent.click(btn)
        expect(container.getElementsByClassName("donutChart").length).toBe(1)

    })
})
