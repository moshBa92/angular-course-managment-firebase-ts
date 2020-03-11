import {
  transition,
  trigger,
  query,
  style,
  animate,
  group
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  transition(
    "university-website => * ,course => auth , course => student, course => admin",
    [
      query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
        optional: true
      }),
      group([
        query(
          ":enter",
          [
            style({ transform: "translateX(100%)" }),
            animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
          ],
          { optional: true }
        ),
        query(
          ":leave",
          [
            style({ transform: "translateX(0%)" }),
            animate(
              "0.5s ease-in-out",
              style({ transform: "translateX(-100%)" })
            )
          ],
          { optional: true }
        )
      ])
    ]
  ),
  transition(
    "student => *,admin => * ,auth => *, change-password => * , course => university-website",
    [
      query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
        optional: true
      }),
      group([
        query(
          ":enter",
          [
            style({ transform: "translateX(-100%)" }),
            animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
          ],
          { optional: true }
        ),
        query(
          ":leave",
          [
            style({ transform: "translateX(0%)" }),
            animate(
              "0.5s ease-in-out",
              style({ transform: "translateX(100%)" })
            )
          ],
          { optional: true }
        )
      ])
    ]
  )
]);
