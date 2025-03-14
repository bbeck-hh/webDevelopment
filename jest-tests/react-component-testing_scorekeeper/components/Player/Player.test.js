import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
    render(
        <Player
            name="Karl"
            score={0}
            onDecreasePlayerScore={() => { }}
            onIncreasePlayerScore={() => { }}
        />
    );

    const playerName = screen.getByText("Karl");
    const decreaseButton = screen.getByRole("button", { name: "-" });
    const increaseButton = screen.getByRole("button", { name: "+" });


    expect(playerName).toBeInTheDocument();
    expect(decreaseButton).toBeInTheDocument();
    expect(increaseButton).toBeInTheDocument();
});

test("calls callbacks when increasing or decreasing score", async () => { });
